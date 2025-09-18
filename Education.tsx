import React from 'react';
import { EDUCATION } from '../constants';
import { MortarBoardIcon } from './icons/GeneralIcons';

const EducationCard: React.FC<{ edu: typeof EDUCATION[0] }> = ({ edu }) => (
    <div className="bg-gray-900 rounded-lg shadow-xl w-full px-6 py-4 transition-transform transform hover:-translate-y-2 duration-300">
        <div className="flex items-center mb-2">
            <div className="w-8 h-8 mr-3 text-cyan-400">
                <MortarBoardIcon />
            </div>
            <h3 className="font-bold text-white text-xl">{edu.institution}</h3>
        </div>
        <p className="text-md font-medium leading-snug tracking-wide text-cyan-400">{edu.degree}</p>
        <p className="text-sm text-gray-400 mt-1">{edu.period}</p>
        <p className="text-md text-gray-300 mt-2">{edu.score}</p>
    </div>
);


const Education: React.FC = () => {
    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    My Education
                </h2>
                <div className="relative max-w-3xl mx-auto timeline-container">
                     {/* This pseudo-element will be animated */}
                    <div className="absolute left-1/2 w-0.5 h-full bg-gray-600 transform -translate-x-1/2 timeline-line"></div>
                    {EDUCATION.map((edu, index) => (
                        <div key={index} className="mb-8 flex justify-between items-center w-full timeline-item" style={{ transitionDelay: `${index * 200}ms`}}>
                            {/* Left Side */}
                            <div className="w-5/12">
                                {index % 2 !== 0 && <EducationCard edu={edu} />}
                            </div>

                            {/* Center Dot */}
                            <div className="z-20 flex items-center bg-cyan-500 shadow-xl w-8 h-8 rounded-full timeline-dot">
                                <div className="h-2 w-2 bg-white rounded-full mx-auto"></div>
                            </div>
                            
                            {/* Right Side */}
                            <div className="w-5/12">
                                {index % 2 === 0 && <EducationCard edu={edu} />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .timeline-line {
                    transform-origin: top;
                    transform: scaleY(0);
                    transition: transform 1s ease-out;
                }
                .is-visible .timeline-line {
                    transform: scaleY(1);
                }
                .timeline-item {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }
                 .is-visible .timeline-item {
                    opacity: 1;
                    transform: translateY(0);
                }
                .timeline-dot {
                    transform: scale(0);
                    transition: transform 0.5s ease-out;
                }
                .is-visible .timeline-dot {
                    transform: scale(1);
                }
            `}</style>
        </section>
    );
};

export default Education;