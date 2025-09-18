import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Achievements from './components/Achievements';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('Home');
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    const sectionRefs = {
        'Home': useRef<HTMLElement>(null),
        'About': useRef<HTMLElement>(null),
        'Education': useRef<HTMLElement>(null),
        'Projects': useRef<HTMLElement>(null),
        'Achievements': useRef<HTMLElement>(null),
        'Skills': useRef<HTMLElement>(null),
        'Contact': useRef<HTMLElement>(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting) {
                        const sectionName = id.charAt(0).toUpperCase() + id.slice(1);
                        setActiveSection(sectionName === 'Hero' ? 'Home' : sectionName);
                        setVisibleSections(prev => new Set(prev).add(id));
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px' }
        );
        
        const animationObserver = new IntersectionObserver(
            (entries) => {
                 entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        animationObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
                animationObserver.observe(ref.current);
            }
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                    animationObserver.unobserve(ref.current);
                }
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-gray-900 font-sans leading-normal tracking-wider">
            <Header activeSection={activeSection} />
            <main>
                <section ref={sectionRefs['Home']} id="home">
                    <Hero />
                </section>
                <section ref={sectionRefs['About']} id="about" className="section-container">
                    <About />
                </section>
                <section ref={sectionRefs['Education']} id="education" className="section-container">
                    <Education />
                </section>
                <section ref={sectionRefs['Projects']} id="projects" className="section-container">
                    <Projects />
                </section>
                <section ref={sectionRefs['Achievements']} id="achievements" className="section-container">
                    <Achievements />
                </section>
                 <section ref={sectionRefs['Skills']} id="skills" className="section-container">
                    <Skills />
                </section>
                <section ref={sectionRefs['Contact']} id="contact" className="section-container">
                    <Contact />
                </section>
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default App;