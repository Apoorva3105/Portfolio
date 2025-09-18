import React from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero: React.FC = () => {
    const particlesInit = async (engine: any) => {
        await loadSlim(engine);
    };

    // FIX: The 'loaded' prop from react-tsparticles expects a function that returns a Promise. Making this function async resolves the type mismatch.
    const particlesLoaded = async (container: any) => {
        // The console.log that was here has been removed to prevent circular structure errors.
    };

    const particleOptions = {
        background: {
            color: {
                value: 'transparent',
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#67e8f9', // cyan-300
            },
            links: {
                color: '#67e8f9',
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                direction: 'none' as const,
                enable: true,
                outModes: {
                    default: 'out' as const,
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: 'circle' as const,
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }

    return (
        <section id="hero" className="min-h-screen flex items-center bg-grid-gray-700/[0.2] relative overflow-hidden">
            <Particles id="tsparticles" options={particleOptions} init={particlesInit} loaded={particlesLoaded} />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container mx-auto px-6 text-center z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-float">
                    Apoorva Prashant Kulkarni
                </h1>
                <p className="text-xl md:text-2xl text-cyan-400 mb-8 animate-float" style={{animationDelay: '0.2s'}}>
                    Information Technology Student | Programmer | Problem Solver
                </p>
                <p className="max-w-3xl mx-auto text-gray-300 mb-12">
                    A passionate and self-driven IT student with a strong foundation in programming, database management, and problem-solving, eager to contribute to real-world technology solutions.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300">
                        View My Work
                    </a>
                    <a href="#contact" className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300">
                        Get In Touch
                    </a>
                </div>
            </div>
             <style>{`
                .bg-grid-gray-700\\[\\[0\\.2\\]] {
                    background-size: 40px 40px;
                    background-image:
                        linear-gradient(to right, rgba(107, 114, 128, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(107, 114, 128, 0.2) 1px, transparent 1px);
                }
            `}</style>
        </section>
    );
};

export default Hero;