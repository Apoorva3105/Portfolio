import React from 'react';
import { DownloadIcon } from './icons/GeneralIcons';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    About Me
                </h2>
                <div className="max-w-4xl mx-auto text-lg text-gray-300 text-center space-y-4">
                    <p>
                        A passionate and self-driven Information Technology student with a strong foundation in programming, database management, and problem-solving. I bring together technical expertise and people skills developed through diverse experiences—including hackathons, academic projects, and professional roles.
                    </p>
                    <p>
                        My journey began with a selection as a Deck Cadet at Mediterranean Shipping Company (MSC), where I honed my communication and interpersonal strengths. Later, as a Sales Representative and Interviewer at Budding Mariners, I further refined my ability to connect with people, conduct assessments, and guide aspiring professionals.
                    </p>
                    <p>
                       I have actively contributed to technical projects such as developing an Arduino-based automation model to visualize Malus Law and a full-stack budget management app (Xpensify). I continuously pursue technical certifications in C++, SQL, and DBMS, while actively seeking opportunities that challenge both my logical and creative thinking.
                    </p>
                     <p>
                        Adaptable, collaborative, and driven by curiosity, I am eager to contribute to real-world technology solutions and grow as a problem solver in the tech industry.
                    </p>
                </div>
                <div className="text-center mt-12">
                    <a 
                        href="/Apoorva_Kulkarni_Resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300"
                    >
                        <DownloadIcon className="h-5 w-5" />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;