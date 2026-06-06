import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home, Sparkles, Bookmark, Briefcase, MessageSquare, TrendingUp, Search, Bell,
  Target, Settings, User, Crown, BarChart3, X, PanelLeftClose, PanelLeftOpen,
  ChevronDown,
} from 'lucide-react';
import { useLayout } from '../context/LayoutContext';

const CANONICAL_ITEMS = [
  { key: 'home', label: 'Home', icon: Home, path: '/dashboard' },
  {
    key: 'ai-job-match', label: 'AI Job Match', icon: Search, path: '/jobs',
    children: [
      { key: 'best-matches', label: 'Best Matches', path: '/jobs', defaultActive: true },
      { key: 'high-match', label: 'High Match', path: '/jobs' },
      { key: 'good-match', label: 'Good Match', path: '/jobs' },
      { key: 'explore-all', label: 'Explore All', path: '/jobs' },
      { key: 'saved-jobs', label: 'Saved Jobs', path: '/saved-jobs' },
      { key: 'job-alerts', label: 'Job Alerts', path: '/jobs' },
    ],
  },
  {
    key: 'career-growth', label: 'Career Growth', icon: TrendingUp, path: '/career-growth/setup',
    children: [
      { key: 'setup-resume', label: 'Setup Resume', path: '/career-growth/setup' },
      { key: 'onboarding', label: 'Onboarding', path: '/career-growth/onboarding' },
      { key: 'career-path', label: 'Career Path', path: '/career-path' },
    ],
  },
  { key: 'ai-coach', label: 'AI Career Coach', icon: MessageSquare, path: '/ai-coach', badge: { text: 'New', color: 'green' } },
  { key: 'applications', label: 'Applications', icon: Briefcase, path: '/applications', badge: { text: 'Beta', color: 'blue' } },
  { key: 'profile', label: 'Profile', icon: User, path: '/profile' },
  { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
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
  ctaColor: 'orange',
};

const CANONICAL_CAREER_SCORE = { value: 72, label: 'Good Progress', percent: 72 };

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
      <span className="text-xl font-bold tracking-tight whitespace-nowrap text-slate-900">
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
  const isActive = currentPath === item.path
    || (item.key === 'career-growth' && (currentPath.startsWith('/career-growth') || currentPath === '/career-path'));
  const hasChildren = item.children && item.children.length > 0;

  const baseClasses = `relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer group ${
    isActive
      ? 'bg-primary-50 text-primary'
      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
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
          {!collapsed && (
            <>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className={`px-1.5 py-0.5 ${item.badge.color === 'green' ? 'bg-success-50 text-success-600' : 'bg-blue-50 text-blue-600'} text-[9px] font-bold rounded`}>
                  {item.badge.text}
                </span>
              )}
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${isActive ? 'rotate-180' : ''}`} />
            </>
          )}
        </div>
        {isActive && !collapsed && (
          <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary-100 pl-2">
            {item.children.map((child) => {
              const childActive = child.defaultActive
                ? currentPath === child.path
                : currentPath === child.path;
              return (
                <div
                  key={child.key}
                  onClick={() => { navigate(child.path); onItemClick?.(); }}
                  className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] font-medium cursor-pointer transition-colors ${
                    childActive
                      ? 'text-primary bg-primary-50/60'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${childActive ? 'bg-primary' : 'bg-slate-300'}`} />
                  {child.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={baseClasses} onClick={handleClick} title={collapsed ? item.label : undefined}>
      {Icon && <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary' : 'text-slate-400'}`} />}
      {!collapsed && (
        <>
          <span className="flex-1">{item.label}</span>
          {item.badge && (
            <span className={`px-1.5 py-0.5 ${item.badge.color === 'green' ? 'bg-success-50 text-success-600' : 'bg-blue-50 text-blue-600'} text-[9px] font-bold rounded`}>
              {item.badge.text}
            </span>
          )}
        </>
      )}
    </div>
  );
};

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
            onLogoClick={() => { navigate('/'); }}
            collapsed={collapsed}
            onToggleCollapse={toggleSidebar}
          />
        </div>

        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          <nav className={`flex-1 min-h-0 overflow-y-auto ${collapsed ? 'px-2' : 'px-3'} py-2`}>
            {CANONICAL_ITEMS.map((item) => (
              <React.Fragment key={item.key}>
                <MenuItem
                  item={item}
                  currentPath={currentPath}
                  navigate={navigate}
                  onItemClick={close}
                  collapsed={collapsed}
                />
                {item.key === 'career-growth' && !collapsed && (
                  <div className="px-3 pt-1 pb-2">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Growth Progress</span>
                        <span className="text-[10px] font-bold text-blue-600">60%</span>
                      </div>
                      <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }} />
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {!collapsed && (
          <div className="shrink-0 p-4 border-t border-border">
            <div className="bg-primary-50/70 rounded-xl p-4 border border-primary-100/80 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-4 h-4 text-primary" />
                  <span className="text-[13px] font-bold text-slate-900">{CANONICAL_PREMIUM.title}</span>
                </div>
                <ul className="text-[11px] text-slate-600 space-y-1.5 mb-3 leading-relaxed">
                  {CANONICAL_PREMIUM.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => { navigate('/settings'); close(); }}
                  className="w-full py-2.5 bg-primary hover:bg-primary-600 text-white text-[12px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  {CANONICAL_PREMIUM.cta} <span className="text-base leading-none">→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {!collapsed && (
          <div className="shrink-0 mt-auto p-4 border-t border-border">
            <div className="bg-white rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[13px] font-bold text-slate-900">Your Career Score</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-3xl font-extrabold text-slate-900">{CANONICAL_CAREER_SCORE.value}</span>
                <span className="text-[10px] font-bold text-success-600 bg-success-50 px-1.5 py-0.5 rounded mb-1">
                  {CANONICAL_CAREER_SCORE.label}
                </span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-success" style={{ width: `${CANONICAL_CAREER_SCORE.percent}%` }} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-500">Improve Now →</span>
                <span className="text-[10px] font-bold text-slate-400">{CANONICAL_CAREER_SCORE.percent}%</span>
              </div>
            </div>
          </div>
        )}

        {collapsed && (
          <div className="shrink-0 mt-auto p-2 border-t border-border flex justify-center">
            <button
              onClick={() => { navigate('/settings'); close(); }}
              className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              title={CANONICAL_PREMIUM.cta}
              aria-label={CANONICAL_PREMIUM.cta}
            >
              <Crown className="w-4 h-4" />
            </button>
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
