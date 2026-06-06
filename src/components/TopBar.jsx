import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Bell, ChevronDown, Zap, Search, Info, Bookmark, Search as SearchIcon, TrendingUp, MessageSquare, FileText, Menu } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useLayout } from '../context/LayoutContext';

const VARIANTS = {
  search: {
    type: 'search',
    placeholder: 'Search for jobs, roles or companies...',
  },
  searchSkill: {
    type: 'search',
    placeholder: 'Search for jobs, skills, roles or companies...',
  },
  creditOnly: {
    type: 'credit-only',
  },
  tabs: {
    type: 'tabs',
  },
};

const TopBar = ({ variant = 'search' }) => {
  const navigate = useNavigate();
  const { credits, user, notifications, totalCredits } = useAppContext();
  const config = VARIANTS[variant] || VARIANTS.search;
  const { toggle } = useLayout();

  return (
    <header className="h-14 lg:h-16 bg-white border-b border-border flex items-center justify-between px-3 sm:px-5 lg:px-8 sticky top-0 z-10 gap-2">
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={toggle}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="lg:hidden flex items-center gap-1.5 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-[11px] font-extrabold">C</span>
          </div>
          <span className="text-base font-bold tracking-tight">
            Career<span className="text-primary">Vibe</span>
          </span>
        </div>
      </div>

      {config.type === 'search' && (
        <div className="flex-1 max-w-2xl hidden sm:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={config.placeholder}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
            />
          </div>
        </div>
      )}

      {config.type === 'search' && (
        <button className="sm:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg" aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
      )}

      {config.type === 'credit-only' && <div className="flex-1" />}

      {config.type === 'tabs' && (
        <div className="flex-1 min-w-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center h-full gap-1">
            {[
              { label: 'Find Jobs', path: '/find-jobs', icon: SearchIcon },
              { label: 'Career Path', path: '/career-path', icon: TrendingUp },
              { label: 'AI Career Coach', path: '/ai-coach', icon: MessageSquare },
              { label: 'Resume Review', path: '/resume-review', icon: FileText },
            ].map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `px-3 sm:px-5 h-full flex items-center gap-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'border-primary text-primary bg-primary-50/30'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                <tab.icon className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">{tab.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
        {config.type !== 'credit-only' ? (
          <>
            <div
              onClick={() => navigate('/find-jobs')}
              className="hidden md:flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 rounded-full border border-border cursor-pointer hover:bg-slate-100 transition-colors"
            >
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-slate-900">{credits.toLocaleString()}</div>
                <div className="text-[9px] text-slate-500 font-bold -mt-0.5">Career Credits</div>
              </div>
            </div>

            <div
              onClick={() => navigate('/find-jobs')}
              className="md:hidden flex items-center gap-1 px-2 py-1 bg-slate-50 rounded-full border border-border cursor-pointer"
              title="Career Credits"
            >
              <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
              <span className="text-xs font-extrabold text-slate-900">{credits.toLocaleString()}</span>
            </div>

            <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-primary text-white text-[9px] font-extrabold rounded-full flex items-center justify-center border-2 border-white">
                  {notifications}
                </span>
              )}
            </button>

            <div className="hidden sm:flex items-center gap-2.5 pl-2 lg:pl-4 border-l border-border cursor-pointer group">
              <div className="text-right">
                <div className="text-sm font-bold group-hover:text-primary transition-colors">{user.name}</div>
                <div className={`text-[10px] font-bold ${user.isPremium ? 'text-primary' : 'text-slate-500'}`}>
                  {user.isPremium ? 'Premium' : user.role}
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0">
                <img src={user.avatar} alt={user.name} />
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <div className="sm:hidden w-8 h-8 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0">
              <img src={user.avatar} alt={user.name} />
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => navigate('/find-jobs')}
              className="flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 bg-slate-50 rounded-full border border-border cursor-pointer hover:bg-slate-100 transition-colors"
            >
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-slate-900">{credits.toLocaleString()}</div>
                <div className="text-[9px] text-slate-500 font-bold -mt-0.5 hidden xs:block sm:block">Career Credits</div>
              </div>
              <Info className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
            </div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-primary text-white text-[9px] font-extrabold rounded-full flex items-center justify-center border-2 border-white">
                  {notifications}
                </span>
              )}
            </button>

            <div className="hidden sm:flex items-center gap-2.5 pl-2 lg:pl-4 border-l border-border cursor-pointer group">
              <div className="text-right">
                <div className="text-sm font-bold group-hover:text-primary transition-colors">{user.name}</div>
                <div className="text-[10px] font-bold text-slate-500">Profile</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0">
                <img src={user.avatar} alt={user.name} />
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <div className="sm:hidden w-8 h-8 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0">
              <img src={user.avatar} alt={user.name} />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default TopBar;
