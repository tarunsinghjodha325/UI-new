import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Home, Compass, Sparkles, Bookmark, Briefcase, MessageSquare, GraduationCap,
  TrendingUp, Search, Bell, Target, Settings, User, Crown, Plus,
  FileText, DollarSign, BarChart3, Award, Layers, X, ChevronLeft, ChevronRight, PanelLeftClose, PanelLeftOpen,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useLayout } from '../context/LayoutContext';

const VARIANTS = {
  dashboard: {
    title: null,
    sections: [
      {
        items: [
          { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
          { key: 'ai-job-match', label: 'AI Job Match', icon: Search, path: '/jobs' },
          { key: 'career-path', label: 'Career Growth', icon: TrendingUp, path: '/career-path' },
          { key: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/saved-jobs' },
          { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications' },
          { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach', badge: { text: 'New', color: 'green' } },
          { key: 'interview-prep', label: 'Interview Prep', icon: GraduationCap, path: '/interview-prep' },
          { key: 'salary-insights', label: 'Salary Insights', icon: DollarSign, path: '/salary' },
        ],
      },
    ],
    premium: {
      title: 'Upgrade to Premium',
      bullets: [
        'Unlimited job matches',
        'Advanced AI insights',
        'Personalized roadmap',
        'Priority support',
      ],
      cta: 'Upgrade Now',
      ctaColor: 'orange',
    },
  },
  jobs: {
    title: null,
    sections: [
      {
        items: [
          { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
          {
            key: 'ai-job-match', label: 'AI Job Match', icon: Search, path: '/jobs', expanded: true,
            children: [
              { key: 'best-matches', label: 'Best Matches', icon: null, dotColor: 'orange', path: '/jobs' },
              { key: 'high-match', label: 'High Match', icon: null, path: '/jobs' },
              { key: 'good-match', label: 'Good Match', icon: null, path: '/jobs' },
              { key: 'explore-all', label: 'Explore All', icon: null, path: '/jobs' },
              { key: 'saved-jobs', label: 'Saved Jobs', icon: null, path: '/saved-jobs' },
              { key: 'job-alerts', label: 'Job Alerts', icon: null, path: '/jobs' },
            ],
          },
          { key: 'career-path', label: 'Career Path', icon: TrendingUp, path: '/career-path', expanded: false },
          { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach', badge: { text: 'New', color: 'green' } },
          { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications', badge: { text: 'Beta', color: 'blue' } },
          { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
          { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ],
      },
    ],
    premium: {
      title: 'Upgrade to Premium',
      bullets: [
        'Unlimited AI Matches',
        'Advanced Resume Optimization',
        'LinkedIn Profile Insights',
        'Priority Career Support',
      ],
      cta: 'Upgrade Now',
      ctaColor: 'orange',
    },
    careerScore: { value: 72, label: 'Good Progress', percent: 72 },
  },
  welcome: {
    title: null,
    sections: [
      {
        label: 'MAIN',
        items: [
          { key: 'home', label: 'Home', icon: Home, path: '/dashboard', active: true },
          { key: 'ai-job-match', label: 'AI Job Match', icon: Search, path: '/jobs' },
          { key: 'career-growth', label: 'Career Growth', icon: TrendingUp, path: '/career-growth/setup' },
          { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications' },
          { key: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/saved-jobs' },
          { key: 'job-alerts', label: 'Job Alerts', icon: Bell, path: '/jobs' },
        ],
      },
      {
        label: 'AI TOOLS',
        items: [
          { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach', badge: { text: 'New', color: 'green' } },
          { key: 'skill-gap', label: 'Skill Gap Analyzer', icon: Target, path: '/skills' },
          { key: 'interview-prep', label: 'Interview Prep', icon: GraduationCap, path: '/interview-prep' },
          { key: 'salary-insights', label: 'Salary Insights', icon: DollarSign, path: '/salary' },
        ],
      },
      {
        label: 'ACCOUNT',
        items: [
          { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
          { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ],
      },
    ],
    premium: {
      title: 'Upgrade to Premium',
      bullets: [
        'Unlimited job matches',
        'Advanced AI insights',
        'Priority career support',
        'Resume optimization',
      ],
      cta: 'Upgrade Now',
      ctaColor: 'orange',
    },
  },
  careerPath: {
    title: null,
    sections: [
      {
        items: [
          { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
          { key: 'career-path', label: 'Career Path', icon: TrendingUp, path: '/career-path', active: true },
          { key: 'find-jobs', label: 'Find Jobs', icon: Search, path: '/find-jobs' },
          { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach' },
          { key: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/saved-jobs' },
          { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications' },
          { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
          { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ],
      },
    ],
    premium: {
      title: 'Unlock Premium',
      bullets: [
        'Get advanced insights, AI coaching, and more.',
      ],
      cta: 'Upgrade Now',
      ctaColor: 'orange',
    },
  },
  careerGrowthOnboarding: {
    title: null,
    sections: [
      {
        items: [
          { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
          { key: 'ai-job-match', label: 'AI Job Match', icon: Search, path: '/jobs' },
          { key: 'career-growth', label: 'Career Growth', icon: TrendingUp, path: '/career-growth/onboarding', active: true },
          { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications' },
          { key: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/saved-jobs' },
          { key: 'job-alerts', label: 'Job Alerts', icon: Bell, path: '/jobs' },
        ],
      },
      {
        label: 'AI TOOLS',
        items: [
          { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach', badge: { text: 'New', color: 'green' } },
          { key: 'skill-gap', label: 'Skill Gap Analyzer', icon: Target, path: '/skills' },
          { key: 'interview-prep', label: 'Interview Prep', icon: GraduationCap, path: '/interview-prep' },
          { key: 'salary-insights', label: 'Salary Insights', icon: DollarSign, path: '/salary' },
        ],
      },
      {
        label: 'ACCOUNT',
        items: [
          { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
          { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ],
      },
    ],
    premium: {
      title: 'Upgrade to Premium',
      bullets: [
        'Unlimited job matches',
        'Advanced AI insights',
        'Priority career support',
        'Resume optimization',
      ],
      cta: 'Upgrade Now',
      ctaColor: 'orange',
    },
  },
  findJobs: {
    title: null,
    sections: [
      {
        items: [
          { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
          { key: 'career-path', label: 'Career Path', icon: TrendingUp, path: '/career-path' },
          { key: 'find-jobs', label: 'Find Jobs', icon: Search, path: '/find-jobs', active: true },
          { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach', badge: { text: 'Free', color: 'green' } },
          { key: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/saved-jobs' },
          { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications', count: 14 },
          { key: 'skills', label: 'Skills & Gaps', icon: Layers, path: '/skills' },
          { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
          { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ],
      },
    ],
    premium: {
      title: 'Upgrade to Premium',
      bullets: [
        'Get more credits, unlock AI resume optimization, unlimited applications and premium tools.',
      ],
      cta: 'Upgrade Now',
      ctaColor: 'orange',
    },
  },
  aiCoach: {
    title: null,
    sections: [
      {
        items: [
          { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
          { key: 'career-path', label: 'Career Path', icon: TrendingUp, path: '/career-path' },
          { key: 'find-jobs', label: 'Find Jobs', icon: Search, path: '/find-jobs' },
          { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach', active: true, badge: { text: 'Free', color: 'green' } },
          { key: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/saved-jobs' },
          { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications', count: 14 },
          { key: 'skills', label: 'Skills & Gaps', icon: Layers, path: '/skills' },
          { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
          { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ],
      },
    ],
    premium: {
      title: 'Unlock Unlimited AI Coaching',
      bullets: [
        'Unlimited conversations',
        'Personalized career strategies',
        'Interview & salary advice',
        'Priority AI support',
      ],
      cta: 'Upgrade Now',
      ctaColor: 'orange',
    },
  },
  savedJobs: {
    title: null,
    sections: [
      {
        items: [
          { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
          { key: 'career-path', label: 'Career Path', icon: TrendingUp, path: '/career-path' },
          { key: 'find-jobs', label: 'Find Jobs', icon: Search, path: '/find-jobs' },
          { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach', badge: { text: 'Free', color: 'green' } },
          { key: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/saved-jobs', active: true },
          { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications', count: 14 },
          { key: 'skills', label: 'Skills & Gaps', icon: Layers, path: '/skills' },
          { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
          { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ],
      },
    ],
    premium: {
      title: 'Build a Better Resume',
      bullets: [
        'Get Better Matches',
        'AI will optimize your resume to match more roles.',
      ],
      cta: 'Optimize Resume with AI',
      ctaColor: 'orange',
      cost: '⚡ 120 Credits',
    },
  },
};

const Logo = ({ onNavigate, onLogoClick, collapsed, onToggleCollapse }) => (
  <div
    onClick={onLogoClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onLogoClick?.(); }}
    className={`flex items-center gap-2 border-b border-border lg:border-b-0 cursor-pointer hover:bg-slate-50 transition-colors ${collapsed ? 'px-3 py-5 justify-center' : 'px-5 py-5'}`}
  >
    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
      <Sparkles className="text-white w-5 h-5" />
    </div>
    {!collapsed && (
      <span className="text-xl font-bold tracking-tight whitespace-nowrap">
        Career<span className="text-primary">Vibe</span>
      </span>
    )}
    <button
      onClick={(e) => { e.stopPropagation(); onNavigate?.(); }}
      className={`ml-auto lg:hidden p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg ${collapsed ? 'hidden' : ''}`}
      aria-label="Close menu"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);

const MenuItem = ({ item, currentPath, navigate, onItemClick, collapsed }) => {
  const Icon = item.icon;
  const isActive = item.active || currentPath === item.path;
  const hasChildren = item.children && item.children.length > 0;

  const baseClasses = `relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer group ${
    isActive
      ? 'bg-primary-50 text-primary'
      : 'text-slate-600 hover:bg-slate-50'
  } ${collapsed ? 'justify-center' : ''}`;

  const handleClick = () => {
    navigate(item.path);
    onItemClick?.();
  };

  if (hasChildren) {
    return (
      <div>
        <div className={baseClasses} onClick={handleClick} title={collapsed ? item.label : undefined}>
          {Icon && <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary' : 'text-slate-400'}`} />}
          {!collapsed && <span className="flex-1">{item.label}</span>}
          {!collapsed && item.badge && (
            <span className={`px-1.5 py-0.5 ${item.badge.color === 'green' ? 'bg-success-50 text-success-600' : 'bg-blue-50 text-blue-600'} text-[9px] font-bold rounded`}>
              {item.badge.text}
            </span>
          )}
        </div>
        {isActive && !collapsed && (
          <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary-100 pl-2">
            {item.children.map((child) => (
              <div
                key={child.key}
                onClick={() => { navigate(child.path); onItemClick?.(); }}
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] font-medium cursor-pointer transition-colors ${
                  child.key === 'best-matches' && isActive
                    ? 'text-primary bg-primary-50/60'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {child.dotColor ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                )}
                {child.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={baseClasses} onClick={handleClick} title={collapsed ? item.label : undefined}>
      {Icon && <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary' : 'text-slate-400'}`} />}
      {!collapsed && <span className="flex-1">{item.label}</span>}
      {!collapsed && item.badge && (
        <span className={`px-1.5 py-0.5 ${item.badge.color === 'green' ? 'bg-success-50 text-success-600' : 'bg-blue-50 text-blue-600'} text-[9px] font-bold rounded`}>
          {item.badge.text}
        </span>
      )}
      {!collapsed && item.count && (
        <span className="text-[11px] text-slate-400 font-bold">{item.count}</span>
      )}
    </div>
  );
};

const Sidebar = ({ variant = 'dashboard' }) => {
  const config = VARIANTS[variant] || VARIANTS.dashboard;
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { user } = useAppContext();
  const { mobileMenuOpen, close, sidebarCollapsed, toggleSidebar } = useLayout();
  const collapsed = sidebarCollapsed;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 bg-slate-900/50 z-30 lg:hidden transition-opacity duration-200 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      <aside
        className={`fixed lg:fixed top-0 left-0 h-screen bg-white border-r border-border flex flex-col z-40 transform transition-all duration-200 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${
          collapsed ? 'lg:w-[68px]' : 'lg:w-[220px]'
        } w-[260px]`}
      >
        <div className="shrink-0">
          <Logo
            onNavigate={close}
            onLogoClick={() => { navigate('/'); onItemClick?.(); }}
            collapsed={collapsed}
            onToggleCollapse={toggleSidebar}
          />
        </div>

        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          <nav className={`flex-1 min-h-0 overflow-y-auto ${collapsed ? 'px-2' : 'px-3'}`}>
            {config.sections.map((section, idx) => (
              <div key={idx} className="mb-2">
                {section.label && !collapsed && (
                  <div className="px-3 pt-4 pb-2 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                    {section.label}
                  </div>
                )}
                {section.label && collapsed && (
                  <div className="pt-4 pb-2 flex justify-center">
                    <span className="w-4 h-px bg-slate-200" />
                  </div>
                )}
                <div className="space-y-0.5">
                  {section.items.map((item) => (
                    <MenuItem
                      key={item.key}
                      item={item}
                      currentPath={currentPath}
                      navigate={navigate}
                      onItemClick={close}
                      collapsed={collapsed}
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {config.premium && !collapsed && (
            <div className="shrink-0 p-4 border-t border-border">
              <div className="bg-primary-50/70 rounded-xl p-4 border border-primary-100/80 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Crown className="w-4 h-4 text-primary" />
                    <span className="text-[13px] font-bold text-slate-900">{config.premium.title}</span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-1.5 mb-3 leading-relaxed">
                    {config.premium.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        {b.includes('credits') || b.includes('AI') ? (
                          <span className="leading-snug">{b}</span>
                        ) : (
                          <>
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{b}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => { navigate('/settings'); close(); }}
                    className="w-full py-2.5 bg-primary text-white text-[12px] font-bold rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-1"
                  >
                    {config.premium.cta} <span className="text-base leading-none">→</span>
                  </button>
                  {config.premium.cost && (
                    <div className="text-center text-[10px] text-slate-500 mt-2 font-bold">{config.premium.cost}</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {config.premium && collapsed && (
            <div className="shrink-0 p-2 border-t border-border flex justify-center">
              <button
                onClick={() => { navigate('/settings'); close(); }}
                className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                title={config.premium.cta}
                aria-label={config.premium.cta}
              >
                <Crown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {config.careerScore && !collapsed && (
          <div className="shrink-0 p-4 border-t border-border">
            <div className="bg-white rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[13px] font-bold text-slate-900">Your Career Score</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-3xl font-extrabold text-slate-900">{config.careerScore.value}</span>
                <span className="text-[10px] font-bold text-success-600 bg-success-50 px-1.5 py-0.5 rounded mb-1">
                  {config.careerScore.label}
                </span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-success" style={{ width: `${config.careerScore.percent}%` }} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-500">Improve Now →</span>
                <span className="text-[10px] font-bold text-slate-400">{config.careerScore.percent}%</span>
              </div>
            </div>
          </div>
        )}

        <div className="hidden lg:flex shrink-0 p-3 border-t border-border justify-center">
          <button
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors text-xs font-medium"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <PanelLeftOpen className="w-4 h-4" />
            ) : (
              <>
                <PanelLeftClose className="w-4 h-4" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
