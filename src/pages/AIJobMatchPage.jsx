import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import JobCard from '../components/JobCard';
import {
  Filter, ChevronDown, Sparkles, Bell, Info, TrendingUp, Settings as SettingsIcon,
} from 'lucide-react';

const DonutChart = ({ total, segments }) => {
  const r = 40;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="transparent" stroke="#E5E7EB" strokeWidth="12" />
        {segments.map((s, i) => {
          const len = (s.value / total) * c;
          const dashOffset = -offset;
          offset += len;
          return (
            <circle
              key={i}
              cx="50" cy="50" r={r}
              fill="transparent"
              stroke={s.color}
              strokeWidth="12"
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={dashOffset}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-slate-900 leading-none">{total}</span>
        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">Total Matches</span>
      </div>
    </div>
  );
};

const AIJobMatchPage = () => {
  const navigate = useNavigate();
  const jobs = [
    {
      company: 'Google', logo: 'G', logoBg: 'bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500',
      title: 'Senior Product Manager',
      companyColor: 'text-blue-500',
      location: 'Bangalore, India',
      type: 'On-site',
      experience: '8+ Yrs Exp',
      salary: '₹45L – ₹70L PA',
      matchScore: 94,
      description: 'Lead product strategy and build innovative solutions for millions of users globally.',
      whyMatch: ['Strong in Product Strategy', 'Experience in SaaS', 'Leadership & Team Mgmt'],
      missingSkills: ['Data Analytics', 'A/B Testing'],
      postedOn: 'Google Careers',
      postedTime: '1 day ago',
      via: 'Google Careers',
    },
    {
      company: 'Microsoft', logo: 'M', logoBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
      title: 'Product Manager',
      companyColor: 'text-blue-500',
      location: 'Hyderabad, India',
      type: 'Hybrid',
      experience: '5-8 Yrs Exp',
      salary: '₹35L – ₹55L PA',
      matchScore: 91,
      description: 'Drive end-to-end product development and customer impact at scale.',
      whyMatch: ['Problem Solving Skills', 'Product Roadmapping', 'Customer Focused'],
      missingSkills: ['SQL', 'Data Modeling'],
      postedOn: 'Microsoft Careers',
      postedTime: '2 days ago',
      via: 'Microsoft Careers',
    },
    {
      company: 'Amazon', logo: 'a', logoBg: 'bg-slate-900',
      title: 'Senior Product Manager',
      companyColor: 'text-orange-500',
      location: 'Pune, India',
      type: 'On-site',
      experience: '8+ Yrs Exp',
      salary: '₹40L – ₹65L PA',
      matchScore: 89,
      description: 'Own product vision and roadmap to deliver impactful customer-centric solutions.',
      whyMatch: ['Product Leadership', 'Cross-functional Mgmt', 'Data-driven Decisions'],
      missingSkills: ['Stakeholder Mgmt', 'Advanced SQL'],
      postedOn: 'Amazon Jobs',
      postedTime: '3 days ago',
      via: 'Amazon Jobs',
    },
  ];

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full overflow-x-hidden">
        <TopBar variant="search" />

        <div className="p-4 sm:p-6 max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-5">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                AI Job Match <Sparkles className="w-5 h-5 text-primary" />
              </h1>
              <button
                onClick={() => navigate('/settings')}
                className="px-4 py-2 bg-white border border-border text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              >
                <SettingsIcon className="w-3.5 h-3.5" /> Match Settings
              </button>
            </div>
            <p className="text-sm text-slate-500 mb-1.5">Top job matches based on your resume, skills and career goals.</p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-6">
              Jobs pulled from company career pages and trusted job portals.
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-4 sm:gap-6 border-b border-border mb-5 overflow-x-auto no-scrollbar">
              {[
                { label: 'Best Matches (28)', active: true },
                { label: 'High Match (45)' },
                { label: 'Good Match (68)' },
                { label: 'Explore All' },
              ].map((tab, i) => (
                <button
                  key={i}
                  className={`pb-3 text-[12px] sm:text-[13px] font-bold transition-all relative whitespace-nowrap ${
                    tab.active ? 'text-primary' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                  {tab.active && <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary rounded-t" />}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <button className="px-3 py-2 bg-white border border-border text-slate-700 text-[11px] font-bold rounded-lg flex items-center gap-1.5 hover:bg-slate-50">
                <Filter className="w-3.5 h-3.5" /> All Filters
              </button>
              {['Experience', 'Location', 'Remote', 'Salary', 'Company Size', 'Job Type'].map(f => (
                <button key={f} className="px-3 py-2 bg-white border border-border text-slate-600 text-[11px] font-bold rounded-lg flex items-center gap-1 hover:bg-slate-50">
                  {f} <ChevronDown className="w-3 h-3" />
                </button>
              ))}
              <div className="ml-auto flex items-center gap-1 text-[11px] text-slate-500">
                <span>Sort by:</span>
                <button className="text-slate-900 font-bold flex items-center gap-1">Best Match <ChevronDown className="w-3 h-3" /></button>
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((j, i) => <JobCard key={i} job={j} variant="default" />)}
            </div>

            {/* Want better matches banner */}
            <div className="mt-6 bg-primary-50 border border-primary-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Want even better matches?</h4>
                  <p className="text-[11px] text-slate-600">Optimize your resume to increase your match score and unlock more opportunities.</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/resume-review')}
                className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center gap-2"
              >
                Optimize Resume with AI <span className="opacity-60">⚡</span> <span className="opacity-60">120 Credits</span>
              </button>
            </div>
          </div>

          {/* Right panel */}
          <div className="w-full lg:w-80 shrink-0 space-y-4">
            {/* Match Overview */}
            <div className="card p-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-sm text-slate-900">Your Match Overview</h3>
                <Info className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <DonutChart total={28} segments={[
                { value: 12, color: '#16A34A' },
                { value: 10, color: '#F97316' },
                { value: 6, color: '#A78BFA' },
              ]} />
              <div className="mt-5 space-y-2.5">
                {[
                  { label: 'High Match (90%+)', value: 12, color: 'bg-success-500' },
                  { label: 'Good Match (70-89%)', value: 10, color: 'bg-primary' },
                  { label: 'Fair Match (50-69%)', value: 6, color: 'bg-purple-400' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                      <span className="text-slate-700 font-semibold">{s.label}</span>
                    </div>
                    <span className="font-bold text-slate-900">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unlock more matches */}
            <div className="card p-5">
              <h3 className="font-bold text-sm text-slate-900 mb-2">Unlock more matches</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                Apply to <span className="text-primary font-bold">25 more jobs</span> to unlock unlimited applications.
              </p>
              <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5">
                <span className="font-bold">5 / 25 Applications Used</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-success-500 rounded-full" style={{ width: '20%' }} />
              </div>
            </div>

            {/* Improve Match Score */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="font-bold text-sm text-slate-900">Improve Your Match Score</h3>
              </div>
              <p className="text-[11px] text-slate-500 mb-3">Key areas to improve for better job matches.</p>
              <div className="space-y-2 mb-3">
                {[
                  { skill: 'Data Analytics', impact: 'High', delta: '+15%' },
                  { skill: 'A/B Testing', impact: 'High', delta: '+12%' },
                  { skill: 'Stakeholder Mgmt', impact: 'Medium', delta: '+8%' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-[12px] font-bold text-slate-800">{s.skill}</p>
                      <span className={`inline-block mt-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold ${
                        s.impact === 'High' ? 'bg-success-50 text-success-600' : 'bg-primary-50 text-primary'
                      }`}>{s.impact} Impact</span>
                    </div>
                    <span className="text-xs font-bold text-success-600">{s.delta}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/skills')}
                className="text-[11px] font-bold text-primary hover:underline"
              >
                View All Skill Gaps →
              </button>
            </div>

            {/* Job Alert */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-1">
                <Bell className="w-4 h-4 text-primary" />
                <h3 className="font-bold text-sm text-slate-900">Job Alert</h3>
              </div>
              <p className="text-[11px] text-slate-500 mb-4">Get notified when new high-match jobs are available.</p>
              <div className="border-t border-slate-100 pt-3">
                <p className="text-[11px] font-bold text-slate-800">Senior Product Manager</p>
                <p className="text-[10px] text-slate-500">Bangalore, India • Remote</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] text-slate-500">Weekly • Email</span>
                  <div className="w-9 h-5 bg-success-500 rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/settings')}
                className="text-[11px] font-bold text-primary hover:underline mt-3 block"
              >
                Manage Alerts →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIJobMatchPage;
