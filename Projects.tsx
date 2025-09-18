import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons/SocialIcons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        const rotateX = (y / height) * -20;
        const rotateY = (x / width) * 20;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    const cardClasses = `
        bg-gray-800 rounded-lg overflow-hidden shadow-xl
        hover:shadow-cyan-500/20 group relative flex flex-col h-full card-3d
        ${project.featured ? 'ring-2 ring-cyan-500 shadow-lg shadow-cyan-500/30' : ''}
    `;
    
    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cardClasses}
        >
            {project.featured && (
                <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">
                    Featured Project
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-gray-700 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="mt-6 flex items-center justify-end space-x-4">
                    {project.sourceUrl && (
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            <GitHubIcon className="h-6 w-6" />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                           <ExternalLinkIcon className="h-6 w-6" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {PROJECTS.map(project => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;