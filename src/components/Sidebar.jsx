import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bookmark,
  Check,
  Crown,
  Home,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  User,
  X,
} from 'lucide-react';
import { useLayout } from '../context/LayoutContext';

const NAV_SECTIONS = [
  {
    title: 'MAIN',
    items: [
      { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
      { key: 'ai-job-match', label: 'AI Job Match', icon: Target, path: '/jobs' },
      { key: 'career-path', label: 'Career Path', icon: TrendingUp, path: '/career-path' },
      {
        key: 'ai-coach',
        label: 'AI Career Coach',
        icon: MessageSquare,
        path: '/ai-coach',
        badge: { text: 'New', color: 'green' },
      },
    ],
  },
  {
    title: 'TRACKING',
    items: [
      { key: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/saved-jobs' },
      { key: 'job-alerts', label: 'Job Alerts', icon: Bell, path: '/jobs' },
    ],
  },
  {
    title: 'ACCOUNT',
    items: [
      { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
      { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
    ],
  },
];

const CANONICAL_PREMIUM = {
  title: 'Upgrade to Premium',
  bullets: [
    'Unlimited AI Matches',
    'Advanced Resume Optimization',
    'LinkedIn Profile Insights',
    'Priority Career Support',
  ],
  cta: 'Upgrade Now',
};

const CANONICAL_CAREER_SCORE = { value: 72, label: 'Good Progress', percent: 72 };

const Logo = ({ onNavigate, onLogoClick, collapsed }) => (
  <div
    onClick={onLogoClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onLogoClick?.();
    }}
    className={`flex items-center gap-2 border-b border-border lg:border-b-0 cursor-pointer hover:bg-slate-50 transition-colors ${
      collapsed ? 'px-3 py-5 justify-center' : 'px-5 py-5'
    }`}
  >
    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
      <Sparkles className="text-white w-5 h-5" />
    </div>
    {!collapsed && (
      <span className="text-xl font-bold tracking-tight whitespace-nowrap text-slate-900">
        Career<span className="text-primary">Vibe</span>
      </span>
    )}
    <button
      onClick={(e) => {
        e.stopPropagation();
        onNavigate?.();
      }}
      className={`ml-auto lg:hidden p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg ${collapsed ? 'hidden' : ''}`}
      aria-label="Close menu"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);

const MenuItem = ({ item, currentPath, navigate, onItemClick, collapsed }) => {
  const Icon = item.icon;
  const isActive = currentPath === item.path
    || (item.key === 'career-path' && currentPath.startsWith('/career-growth'));

  const handleClick = () => {
    navigate(item.path);
    onItemClick?.();
  };

  return (
    <div
      onClick={handleClick}
      title={collapsed ? item.label : undefined}
      className={`relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer group ${
        isActive
          ? 'bg-primary-50 text-primary'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      } ${collapsed ? 'justify-center' : ''}`}
    >
      {Icon && <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary' : 'text-slate-400'}`} />}
      {!collapsed && (
        <>
          <span className="flex-1 truncate">{item.label}</span>
          {item.badge && (
            <span className="px-1.5 py-0.5 bg-success-50 text-success-600 text-[9px] font-bold rounded">
              {item.badge.text}
            </span>
          )}
        </>
      )}
    </div>
  );
};

const CareerScoreCard = () => (
  <div className="rounded-lg border border-border bg-white p-3">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-primary-50 rounded-md flex items-center justify-center shrink-0">
        <BarChart3 className="w-3.5 h-3.5 text-primary" />
      </div>
      <span className="text-[12px] font-bold text-slate-900">Your Career Score</span>
    </div>
    <div className="mt-2 flex items-center gap-2">
      <span className="text-2xl font-extrabold leading-none text-slate-900">{CANONICAL_CAREER_SCORE.value}</span>
      <span className="text-[9px] font-bold text-success-600 bg-success-50 px-1.5 py-0.5 rounded">
        {CANONICAL_CAREER_SCORE.label}
      </span>
    </div>
    <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-success" style={{ width: `${CANONICAL_CAREER_SCORE.percent}%` }} />
    </div>
    <div className="mt-1.5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-slate-500">Improve Now</span>
      <span className="text-[10px] font-bold text-slate-400">{CANONICAL_CAREER_SCORE.percent}%</span>
    </div>
  </div>
);

const PremiumCard = ({ navigate, close }) => (
  <div className="bg-primary-50/70 rounded-lg p-3 border border-primary-100/80">
    <div className="flex items-center gap-2 mb-2">
      <Crown className="w-3.5 h-3.5 text-primary" />
      <span className="text-[12px] font-bold text-slate-900">{CANONICAL_PREMIUM.title}</span>
    </div>
    <ul className="text-[10px] text-slate-600 space-y-1 mb-2.5 leading-snug">
      {CANONICAL_PREMIUM.bullets.map((bullet) => (
        <li key={bullet} className="flex items-start gap-1.5">
          <Check className="w-3 h-3 text-primary mt-0.5 shrink-0" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
    <button
      onClick={() => {
        navigate('/settings');
        close();
      }}
      className="w-full py-2 bg-primary hover:bg-primary-600 text-white text-[11px] font-bold rounded-md transition-colors flex items-center justify-center gap-1"
    >
      {CANONICAL_PREMIUM.cta}
      <ArrowRight className="w-3 h-3" />
    </button>
  </div>
);

const CollapsedPremiumButton = ({ navigate, close }) => (
  <button
    onClick={() => {
      navigate('/settings');
      close();
    }}
    className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
    title={CANONICAL_PREMIUM.cta}
    aria-label={CANONICAL_PREMIUM.cta}
  >
    <Crown className="w-4 h-4" />
  </button>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { mobileMenuOpen, close, sidebarCollapsed, toggleSidebar } = useLayout();
  const collapsed = sidebarCollapsed;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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
            onLogoClick={() => {
              navigate('/');
            }}
            collapsed={collapsed}
          />
        </div>

        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          <nav className={`flex-1 min-h-0 overflow-y-auto ${collapsed ? 'px-2' : 'px-3'} py-3`}>
            {NAV_SECTIONS.map((section) => (
              <div key={section.title} className={collapsed ? 'mb-2' : 'mb-5'}>
                {!collapsed && (
                  <div className="px-3 mb-2 text-[10px] font-extrabold tracking-wider text-slate-500">
                    {section.title}
                  </div>
                )}
                <div className="space-y-1">
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
        </div>

        <div className={`shrink-0 mt-auto border-t border-border ${collapsed ? 'p-2 flex justify-center' : 'p-3 space-y-3'}`}>
          {collapsed ? (
            <CollapsedPremiumButton navigate={navigate} close={close} />
          ) : (
            <>
              <CareerScoreCard />
              <PremiumCard navigate={navigate} close={close} />
            </>
          )}
        </div>

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
