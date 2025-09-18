import React, { useRef } from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Achievement } from '../types';
import { TrophyIcon } from './icons/GeneralIcons';

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        const rotateX = (y / height) * -15;
        const rotateY = (x / width) * 15;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 card-3d h-full"
        >
            <div className="flex items-start h-full">
                <div className="flex-shrink-0 h-10 w-10 text-cyan-400 mr-4">
                    <TrophyIcon />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <p className="text-sm font-semibold text-gray-400 mt-1">
                        {achievement.issuer} - <span className="font-normal">{achievement.date}</span>
                    </p>
                    <p className="text-gray-300 mt-3">{achievement.description}</p>
                </div>
            </div>
        </div>
    );
};

const Achievements: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Achievements & Certificates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ACHIEVEMENTS.map((achievement, index) => (
                        <AchievementCard key={index} achievement={achievement} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;