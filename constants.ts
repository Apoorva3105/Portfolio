import type { Project, Skill, Education, Achievement } from './types';
import { CPPIcon, DatabaseIcon, HTMLIcon, CSSIcon, JSIcon, NodeJSIcon } from './components/icons/SkillIcons';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './components/icons/SocialIcons';
import { CommunicationIcon, TeamworkIcon, LeadershipIcon, AdaptabilityIcon, TimeManagementIcon } from './components/icons/GeneralIcons';

export const NAV_LINKS = ['About', 'Education', 'Projects', 'Achievements', 'Skills', 'Contact'];

export const PROJECTS: Project[] = [
  {
    title: 'Sortify - AI-Based Waste Segregator',
    description: 'An AI-driven system using machine learning and computer vision to automatically classify and sort waste. Developed for the Smart India Hackathon, it integrates an Android app with a hardware setup for real-time segregation.',
    tags: ['Machine Learning', 'Computer Vision', 'Hardware', 'Android', 'Hackathon'],
    featured: true,
  },
  {
    title: 'Xpensify - Budget Management Web App',
    description: 'Developed a full-stack web application to manage budgets and split bills with chatbot support. This was my first hackathon experience, exploring team collaboration and the full development lifecycle.',
    tags: ['Full-Stack', 'Web App', 'Hackathon', 'Team Project'],
  },
  {
    title: 'Malus Law Visualizer using Arduino',
    description: 'An Arduino-based automation model to visualize Malus Law. This physics project involved automating the plotting of a Malus Law graph using sensors, enhancing my understanding of hardware coding and physics automation.',
    tags: ['Arduino', 'Hardware', 'Physics', 'Automation'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Modern College of Engineering, Progressive Education Society',
    period: '2024 – 2028 (Expected)',
    score: 'CGPA: 8.73 (First Year)',
  },
  {
    degree: 'HSC - Class 12 (Science – PCM)',
    institution: 'Maharashtra Technical Education Society Junior College',
    period: '2023 – 2024',
    score: 'Aggregate: 73.83%',
  },
  {
    degree: 'SSC - Class 10',
    institution: 'SPM English School, Pune',
    period: '2021 – 2022',
    score: 'Overall: 90.60%',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
    {
        title: 'Selected as Deck Cadet',
        issuer: 'Mediterranean Shipping Company (MSC)',
        date: '2024',
        description: 'Secured a position after a competitive written exam and interview process, highlighting strong interpersonal skills.'
    },
    {
        title: 'Department Presenter',
        issuer: 'NBA Accreditation Visit',
        date: '2024',
        description: 'Represented the IT department, explaining departmental initiatives and student projects to the accreditation committee.'
    },
    {
        title: 'Leader of the Book Reading Club',
        issuer: 'Student Community Initiative',
        date: '2024',
        description: 'Leading club activities, organizing meetings, and fostering a passion for literature and discussion among students.'
    },
    {
        title: "Participant in 'Space on Wheels'",
        issuer: 'ISRO',
        date: '2024',
        description: 'Connected with schools and scientists to interact with students curious about science and astrophysics.'
    },
    {
        title: 'C++ Programming Certificate',
        issuer: 'SoloLearn',
        date: '2023',
        description: 'Completed a certification course covering the fundamentals and advanced concepts of C++ programming.'
    },
    {
        title: 'Databases & DBMS Fundamentals',
        issuer: 'SoloLearn',
        date: '2023',
        description: 'Certified in database management, covering relational models, normalization, and data integrity.'
    },
    {
        title: 'Structured Programming in C++',
        issuer: 'Scaler School of Technology',
        date: '2023',
        description: 'Completed a comprehensive course on structured programming principles and best practices using C++.'
    },
    {
        title: 'Top Ranks in IMO',
        issuer: 'International Mathematics Olympiad',
        date: 'High School',
        description: 'Consistently achieved top rankings (1st, 2nd, and 4th) at the international level.'
    }
];

export const SKILLS: Skill[] = [
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
    { name: 'JavaScript', icon: JSIcon },
    { name: 'Node.js', icon: NodeJSIcon },
    { name: 'C++', icon: CPPIcon },
    { name: 'SQL', icon: DatabaseIcon },
    { name: 'DBMS', icon: DatabaseIcon },
];

export const SOFT_SKILLS: Skill[] = [
    { name: 'Communication & Public Speaking', icon: CommunicationIcon },
    { name: 'Teamwork & Collaboration', icon: TeamworkIcon },
    { name: 'Leadership & Mentoring', icon: LeadershipIcon },
    { name: 'Adaptability & Self-Learning', icon: AdaptabilityIcon },
    { name: 'Time Management & Organization', icon: TimeManagementIcon }
];

export const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/apoorva-kulkarni',
    icon: GitHubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/apoorva-kulkarni-278541219/',
    icon: LinkedInIcon,
  },
  {
    name: 'Email',
    url: 'mailto:apoorvak3105@gmail.com',
    icon: EmailIcon,
  },
];