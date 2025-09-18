import React, { useRef } from 'react';
import { SKILLS, SOFT_SKILLS } from '../constants';
import { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        const rotateX = (y / height) * -30;
        const rotateY = (x / width) * 30;
        cardRef.current.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
    };

    const { name, icon: Icon } = skill;
    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg shadow-md card-3d"
        >
            <div className="text-cyan-400 mb-2 h-12 w-12">
                <Icon />
            </div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>
    );
}

const Skills: React.FC = () => {
    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    Skills
                </h2>
                
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-cyan-400 mb-10">Languages & Technologies</h3>
                    <div className="max-w-md mx-auto grid grid-cols-3 gap-8 text-center">
                        {SKILLS.map((skill) => (
                           <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-center text-cyan-400 mb-10">Soft Skills</h3>
                    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                        {SOFT_SKILLS.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-3 bg-gray-700 text-gray-200 text-lg font-medium pl-3 pr-4 py-2 rounded-full shadow-md transition-transform transform hover:-translate-y-1">
                                {/* FIX: Replaced direct JSX invocation with React.createElement to resolve type error when passing className prop. */}
                                {React.createElement(skill.icon, { className: "h-6 w-6 text-cyan-400" })}
                                <span className="leading-none">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
