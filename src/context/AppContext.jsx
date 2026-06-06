import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

const ALTERNATE_DATA = {
  'Lead Customer Experience & Operations Specialist': {
    current: 'Operations Specialist',
    next: 'Project Manager',
    future: 'Senior Operations Manager',
    nextMatch: 70,
    futureMatch: 82,
    targetMatch: 78,
    overall: 78,
    skills: [
      { name: 'Customer Experience Strategy', val: 3 },
      { name: 'Data Analysis', val: 4 },
      { name: 'Process Improvement', val: 5, done: true },
      { name: 'Project Management', val: 4 },
      { name: 'Stakeholder Management', val: 4 },
    ],
    courses: [
      { id: 1, title: 'Customer Experience Management', platform: 'Coursera', rating: 4.8, impact: 'High' },
      { id: 2, title: 'Advanced Data Analysis for Business', platform: 'Udemy', rating: 4.7, impact: 'High' },
      { id: 3, title: 'Process Optimization & Lean Six Sigma', platform: 'Coursera', rating: 4.6, impact: 'Medium' },
    ],
    insights: { salary: '$95K – $130K', demand: 'High', growth: '15%', locations: 'Remote, New York, SF', industries: 'SaaS, E-commerce, Fintech' },
  },
  'Senior Full Stack Engineer': {
    current: 'Junior Developer',
    next: 'Mid-level Developer',
    future: 'Senior Developer',
    nextMatch: 75,
    futureMatch: 85,
    targetMatch: 82,
    overall: 82,
    skills: [
      { name: 'React / Next.js', val: 4 },
      { name: 'Node.js / APIs', val: 4 },
      { name: 'System Design', val: 3 },
      { name: 'Cloud / AWS', val: 4 },
      { name: 'TypeScript', val: 5, done: true },
    ],
    courses: [
      { id: 1, title: 'System Design Masterclass', platform: 'Educative', rating: 4.9, impact: 'High' },
      { id: 2, title: 'Advanced React Patterns', platform: 'Frontend Masters', rating: 4.8, impact: 'High' },
      { id: 3, title: 'AWS Solutions Architect', platform: 'Udemy', rating: 4.7, impact: 'Medium' },
    ],
    insights: { salary: '$130K – $180K', demand: 'Very High', growth: '22%', locations: 'Remote, SF, Seattle', industries: 'SaaS, AI, Fintech' },
  },
};

const DEFAULT_DATA = ALTERNATE_DATA['Lead Customer Experience & Operations Specialist'];

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoggedIn: true,
    user: {
      name: 'Alex Johnson',
      email: 'alex@example.com',
      isPremium: true,
      role: 'Job Seeker',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    },
    resumeUploaded: true,
    credits: 742,
    totalCredits: 1000,
    creditsUsed: 258,
    notifications: 2,
    targetRole: 'Lead Customer Experience & Operations Specialist',
    savedJobs: [],
    appliedJobs: [],
  });

  const login = useCallback((withResume = false) => {
    setState((prev) => ({ ...prev, isLoggedIn: true, resumeUploaded: withResume }));
  }, []);

  const logout = useCallback(() => {
    setState((prev) => ({ ...prev, isLoggedIn: false }));
  }, []);

  const updateTargetRole = useCallback((role) => {
    setState((prev) => ({ ...prev, targetRole: role }));
  }, []);

  const deductCredits = useCallback((amount) => {
    setState((prev) => ({ ...prev, credits: Math.max(0, prev.credits - amount) }));
  }, []);

  const toggleResume = useCallback((uploaded) => {
    setState((prev) => ({ ...prev, resumeUploaded: uploaded }));
  }, []);

  const setUser = useCallback((partial) => {
    setState((prev) => ({ ...prev, user: { ...prev.user, ...partial } }));
  }, []);

  const value = {
    ...state,
    login,
    logout,
    updateTargetRole,
    deductCredits,
    toggleResume,
    setUser,
    setState,
    getTargetRoleData: () => ALTERNATE_DATA[state.targetRole] || DEFAULT_DATA,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
};
