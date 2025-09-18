import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  // FIX: Changed type from React.ReactNode to React.ComponentType to store the component itself, not a JSX element.
  icon: React.ComponentType;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
}