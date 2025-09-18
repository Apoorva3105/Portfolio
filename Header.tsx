import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinksWithHome = ['Home', ...NAV_LINKS];

    return (
        <header className={`fixed top-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-white transition-colors hover:text-cyan-400">
                    Apoorva Kulkarni
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinksWithHome.map((link) => (
                        <a 
                            key={link} 
                            href={`#${link.toLowerCase()}`}
                            className={`capitalize text-lg transition-colors duration-300 relative group ${
                                activeSection === link ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            {link}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full ${
                                activeSection === link ? 'w-full' : 'w-0'
                            }`}></span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;