import React from 'react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Get In Touch
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                    I am actively seeking opportunities that challenge both my logical and creative thinking. Feel free to reach out to connect or collaborate.
                </p>
                <a href="mailto:apoorvak3105@gmail.com" className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 mb-12">
                   Email Me
                </a>
                <div className="flex justify-center space-x-6">
                    {SOCIALS.map(({ name, url, icon: Icon }) => (
                         <a 
                            key={name}
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={`${name} profile`} 
                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                            <Icon className="h-8 w-8" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;