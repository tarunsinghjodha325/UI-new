import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import JobCard from '../components/JobCard';
import {
  Zap, Gift, Search, Filter, ChevronDown, Info, CreditCard, Sparkles, Lightbulb, FileText, BarChart3, Briefcase, Mail, FileEdit, Activity,
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
        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">Credits Used</span>
      </div>
    </div>
  );
};

const CreditIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);

const FindJobsCreditsPage = () => {
  const navigate = useNavigate();
  const jobs = [
    {
      company: 'Airtable', logo: 'as', logoBg: 'bg-green-700',
      title: 'Senior Product Manager', location: 'Bangalore, India', type: 'Hybrid', workType: 'Hybrid',
      salary: '$140K – $180K', experience: '5+ Years', employees: '1000+ Employees',
      matchScore: 94, matchLabel: 'Excellent Match',
      tags: ['Product Strategy', 'Analytics', 'SQL', 'Leadership', '+2 more'],
      description: 'Your product strategy experience, SQL skills and leadership background are a strong fit for this role.',
      applyMessage: "You've applied to 14 jobs this month. 11 more applications left.",
      applyCost: 10, viewDetails: true, bookmark: true,
    },
    {
      company: 'Stripe', logo: 'S', logoBg: 'bg-purple-600',
      title: 'Product Manager', location: 'Remote', type: 'Full-time', workType: 'Full-time',
      salary: '$130K – $170K', experience: '4-6 Years', employees: '5000+ Employees',
      matchScore: 91, matchLabel: 'Great Match',
      tags: ['Payments', 'Analytics', 'A/B Testing', 'Problem Solving'],
      applyCost: 10, viewDetails: true, bookmark: true,
    },
    {
      company: 'HubSpot', logo: 'h', logoBg: 'bg-orange-500',
      title: 'Growth Product Manager', location: 'Bangalore, India', type: 'Hybrid', workType: 'Hybrid',
      salary: '$120K – $150K', experience: '3-5 Years', employees: '3000+ Employees',
      matchScore: 87, matchLabel: 'Great Match',
      tags: ['Growth Strategy', 'Data Analysis', 'Experimentation', 'Marketing Analytics'],
      applyCost: 10, viewDetails: true, bookmark: true,
    },
    {
      company: 'Notion', logo: 'N', logoBg: 'bg-slate-900',
      title: 'Product Manager', location: 'Remote', type: 'Full-time', workType: 'Full-time',
      salary: '$110K – $140K', experience: '3+ Years', employees: '1000+ Employees',
      matchScore: 82, matchLabel: 'Good Match',
      tags: ['Product Strategy', 'User Research', 'Roadmapping', 'Communication'],
      applyCost: 10, viewDetails: true, bookmark: true,
    },
  ];

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar variant="findJobs" />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full overflow-x-hidden">
        <TopBar variant="tabs" />

        <div className="p-4 sm:p-6 max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-5">
          <div className="flex-1 min-w-0">
            <div className="grid lg:grid-cols-2 gap-4 mb-5">
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-5">
                  <h2 className="text-base font-bold text-slate-900">Your Career Credits</h2>
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Credits Remaining</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                        <CreditIcon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-2xl font-extrabold text-slate-900">742</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Total Credits</p>
                    <span className="text-2xl font-extrabold text-slate-900">1000</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Credits Used</p>
                    <span className="text-2xl font-extrabold text-slate-900">258</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={() => navigate('/settings')}
                    className="px-4 py-2 bg-primary-50 text-primary text-xs font-bold rounded-xl hover:bg-primary-100 transition-colors flex items-center gap-1"
                  >
                    Buy More Credits <ArrowRightIcon className="w-3 h-3" />
                  </button>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => navigate('/settings')}
                      className="text-[11px] font-bold text-slate-500 hover:text-primary flex items-center gap-1"
                    >
                      <Info className="w-3 h-3" /> How credits work?
                    </button>
                    <button
                      onClick={() => navigate('/settings')}
                      className="text-[11px] font-bold text-slate-500 hover:text-primary flex items-center gap-1"
                    >
                      View usage history <ArrowRightIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold text-slate-900">Daily Credit Boost</h2>
                    <p className="text-[11px] text-slate-500">Earn free credits</p>
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-3 leading-tight">
                  Share with friends and get 100 free credits
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                28 Jobs Matched For You <Sparkles className="w-4 h-4 text-primary" />
              </h2>
              <button
                onClick={() => navigate('/welcome')}
                className="px-3 py-1.5 border border-primary text-primary text-[11px] font-bold rounded-lg hover:bg-primary-50 transition-colors flex items-center gap-1"
              >
                <RefreshIcon className="w-3 h-3" /> Re-analyze Matches
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4">Personalized matches based on your resume, skills and preferences.</p>

            <div className="relative mb-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search job titles, companies or keywords..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex items-center gap-2 mb-5 flex-wrap">
              {[
                { label: 'All Types', active: true },
                { label: 'Full-time' },
                { label: 'Internship' },
                { label: 'Full-time' },
                { label: 'Internship' },
                { label: 'Remote', active: true },
                { label: 'On-site' },
                { label: 'Hybrid' },
              ].map((f, i) => (
                <button
                  key={i}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                    f.active
                      ? 'border-2 border-primary text-primary bg-white'
                      : 'border border-border text-slate-500 bg-white hover:border-slate-300'
                  }`}
                >
                  {f.label}
                </button>
              ))}
              <div className="ml-auto">
                <button className="px-3 py-1.5 border border-border text-slate-600 text-[11px] font-bold rounded-full flex items-center gap-1">
                  Best Match <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((j, i) => <JobCard key={i} job={j} variant="find-jobs" />)}
            </div>

            {/* How Credits Work */}
            <div className="card p-5 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  How Credits Work <Info className="w-3.5 h-3.5 text-slate-400" />
                </h3>
                <button
                  onClick={() => navigate('/settings')}
                  className="text-[11px] font-bold text-primary hover:underline"
                >
                  View full credit guide →
                </button>
              </div>
              <div className="grid grid-cols-6 gap-4">
                {[
                  { icon: <Search className="w-4 h-4" />, label: 'View Job Match', cost: '2 Credits' },
                  { icon: <Briefcase className="w-4 h-4" />, label: 'Apply to Job', cost: '10 Credits' },
                  { icon: <FileText className="w-4 h-4" />, label: 'AI Resume Optimize', cost: '120 Credits' },
                  { icon: <Mail className="w-4 h-4" />, label: 'AI Cover Letter', cost: '60 Credits' },
                  { icon: <FileEdit className="w-4 h-4" />, label: 'Deep ATS Analysis', cost: '75 Credits' },
                  { icon: <Activity className="w-4 h-4" />, label: 'Career Path Analysis', cost: '100 Credits' },
                ].map((c, i) => (
                  <div key={i} className="text-center">
                    <div className="w-9 h-9 mx-auto bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 mb-2">
                      {c.icon}
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 leading-tight mb-1">{c.label}</p>
                    <p className="text-[10px] text-slate-500">{c.cost}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="w-full lg:w-80 shrink-0 space-y-4">
            <div className="card p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Credit Usage Breakdown</h3>
              <DonutChart total={258} segments={[
                { value: 120, color: '#16A34A' },
                { value: 80, color: '#A78BFA' },
                { value: 35, color: '#F59E0B' },
                { value: 15, color: '#0EA5E9' },
                { value: 8, color: '#EF4444' },
              ]} />
              <div className="mt-5 space-y-2.5">
                {[
                  { label: 'Resume Optimization', value: 120, color: 'bg-success-500' },
                  { label: 'Job Applications', value: 80, color: 'bg-purple-400' },
                  { label: 'AI Insights', value: 35, color: 'bg-yellow-500' },
                  { label: 'Career Path', value: 15, color: 'bg-blue-500' },
                  { label: 'Others', value: 8, color: 'bg-red-400' },
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

            <div className="card p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Top actions that used credits</h3>
              <div className="space-y-2">
                {[
                  { icon: <FileText className="w-3.5 h-3.5" />, label: 'AI Resume Optimization', cost: -120 },
                  { icon: <Briefcase className="w-3.5 h-3.5" />, label: 'Job Applications (8)', cost: -80 },
                  { icon: <FileEdit className="w-3.5 h-3.5" />, label: 'Deep ATS Analysis', cost: -30 },
                  { icon: <Activity className="w-3.5 h-3.5" />, label: 'Career Path Analysis', cost: -15 },
                  { icon: <BarChart3 className="w-3.5 h-3.5" />, label: 'Skill Gap Analysis', cost: -13 },
                ].map((a, i) => (
                  <div key={i} className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2 text-slate-600 font-semibold">
                      <span className="text-slate-400">{a.icon}</span> {a.label}
                    </div>
                    <span className="text-slate-900 font-bold">{a.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5 bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <CrownIcon className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-extrabold text-slate-900">Unlock More. Achieve More.</h3>
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-600 mb-4">
                {['3,000 credits every month', 'Unlimited job applications', 'AI Resume Optimization', 'Advanced career insights', 'Priority support'].map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-success-500 mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/settings')}
                className="w-full py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-1.5"
              >
                Upgrade Now <ArrowRightIcon className="w-3 h-3" />
              </button>
            </div>

            <div className="card p-5 bg-gradient-to-br from-primary-50 to-orange-50 border-primary-100">
              <div className="flex items-start gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                <div>
                  <span className="text-[11px] font-bold text-primary">Tip:</span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Optimize your resume with AI to increase your match score and credits efficiency!
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate('/resume-review')}
                className="w-full mt-2 text-[11px] font-bold text-primary hover:bg-primary-50 py-1.5 rounded-lg transition-colors"
              >
                Optimize Resume →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ArrowRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const RefreshIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
  </svg>
);
const CrownIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 16L3 6l5 4 4-6 4 6 5-4-2 10H5zm0 2h14v2H5v-2z" />
  </svg>
);

export default FindJobsCreditsPage;
