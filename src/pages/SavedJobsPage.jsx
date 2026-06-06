import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import JobCard from '../components/JobCard';
import {
  Bookmark, Filter, ChevronDown, Sparkles, MessageSquare, User, FileText, Target, Zap, FileEdit, Award,
} from 'lucide-react';

const GirlIllustration = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#FFEDD5" />
    <ellipse cx="50" cy="35" rx="14" ry="16" fill="#1F2937" />
    <circle cx="50" cy="38" r="11" fill="#FCD7B6" />
    <ellipse cx="46" cy="38" rx="1" fill="#1F2937" />
    <ellipse cx="54" cy="38" rx="1" fill="#1F2937" />
    <path d="M48 42 Q50 44 52 42" stroke="#1F2937" strokeWidth="0.8" fill="none" strokeLinecap="round" />
    <path d="M38 22 Q50 12 62 22 Q60 30 50 28 Q40 30 38 22Z" fill="#1F2937" />
    <path d="M30 80 Q50 60 70 80 L70 100 L30 100 Z" fill="#F97316" />
    <rect x="46" y="55" width="8" height="12" fill="white" />
    <path d="M44 67 L56 67" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SavedJobsPage = () => {
  const navigate = useNavigate();
  const jobs = [
    {
      company: 'Airtable', logo: 'as', logoBg: 'bg-green-700',
      title: 'Senior Product Manager', matchScore: 94, salary: '$140K – $180K',
      location: 'Bangalore, India', type: 'Hybrid', workType: 'Full-time',
      tags: ['Product Strategy', 'Analytics', 'Leadership', 'SQL', '+2 more'],
      savedDays: 2,
    },
    {
      company: 'Stripe', logo: 'S', logoBg: 'bg-purple-600',
      title: 'Product Manager', matchScore: 91, salary: '$130K – $170K',
      location: 'Remote', type: 'Full-time', workType: 'Full-time',
      tags: ['Payments', 'Analytics', 'A/B Testing', 'Problem Solving'],
      savedDays: 3,
    },
    {
      company: 'HubSpot', logo: 'h', logoBg: 'bg-orange-500',
      title: 'Growth Product Manager', matchScore: 87, salary: '$120K – $150K',
      location: 'Bangalore, India', type: 'Hybrid', workType: 'Full-time',
      tags: ['Growth Strategy', 'Data Analysis', 'Experimentation', 'Marketing Analytics'],
      savedDays: 5,
    },
    {
      company: 'Notion', logo: 'N', logoBg: 'bg-slate-900',
      title: 'Product Manager', matchScore: 82, salary: '$110K – $140K',
      location: 'Remote', type: 'Full-time', workType: 'Full-time',
      tags: ['Product Strategy', 'User Research', 'Roadmapping', 'Communication'],
      savedDays: 7,
    },
  ];

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full overflow-x-hidden">
        <TopBar variant="tabs" />

        <div className="p-4 sm:p-6 max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-5">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <Bookmark className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" /> Saved Jobs (18)
              </h1>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate('/jobs')}
                  className="px-3 py-1.5 border border-border bg-white text-slate-600 text-[11px] font-bold rounded-lg flex items-center gap-1.5 hover:bg-slate-50"
                >
                  <Filter className="w-3.5 h-3.5" /> Filters
                </button>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span>Sort by:</span>
                  <button className="text-slate-900 font-bold flex items-center gap-1">Recently Saved <ChevronDownIcon className="w-3 h-3" /></button>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 mb-5">Jobs you saved for later. Track, compare and apply when you're ready.</p>

            {/* Tab pills */}
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              {[
                { label: 'All (18)', active: true },
                { label: 'Interested (10)' },
                { label: 'Shortlisted (5)' },
                { label: 'Applied (3)' },
              ].map((t, i) => (
                <button
                  key={i}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                    t.active
                      ? 'bg-primary text-white'
                      : 'bg-white border border-border text-slate-600 hover:border-primary'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {jobs.map((j, i) => <JobCard key={i} job={j} variant="saved" />)}
            </div>

            {/* CTA banner */}
            <div className="mt-6 bg-gradient-to-r from-primary-50 to-orange-50 border border-primary-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                  <BotIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">Want more high-match jobs?</h3>
                  <p className="text-[11px] text-slate-600">AI can optimize your resume and increase your match score.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => navigate('/resume-review')}
                  className="px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Optimize My Resume <ArrowRightIcon className="w-3 h-3" />
                </button>
                <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                  <ZapIcon className="w-3 h-3 text-primary" /> 120 Credits
                </span>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="w-full lg:w-80 shrink-0 space-y-4">
            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900">AI Insights for Your Saved Jobs</h3>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { icon: <Target className="w-4 h-4 text-success-600" />, value: 18, label: 'Jobs Saved', bg: 'bg-success-50' },
                  { icon: <BriefcaseIcon className="w-4 h-4 text-primary" />, value: 5, label: 'High Matches', bg: 'bg-primary-50' },
                  { icon: <FileText className="w-4 h-4 text-yellow-500" />, value: 3, label: 'Applied', bg: 'bg-yellow-50' },
                ].map((s, i) => (
                  <div key={i} className={`p-3 ${s.bg} rounded-xl text-center`}>
                    <div className="flex justify-center mb-1">{s.icon}</div>
                    <p className="text-lg font-extrabold text-slate-900 leading-none">{s.value}</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5">
                  <span className="font-bold">Keep going! Apply to more high-match jobs.</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1.5">
                  <div className="h-full bg-success-500 rounded-full" style={{ width: '30%' }} />
                </div>
                <span className="text-[10px] font-bold text-slate-500">3/10</span>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-3 mb-4">
                <GirlIllustration />
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900">Get Personalized Career Guidance</h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Talk to AI Career Coach or connect with industry experts for 1:1 guidance.</p>
                </div>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => navigate('/ai-coach')}
                  className="w-full py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Talk to AI Career Coach
                </button>
                <button
                  onClick={() => navigate('/ai-coach')}
                  className="w-full py-2.5 border-2 border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5" /> Talk to Industry Expert
                </button>
              </div>
            </div>

            <div className="card p-5 bg-gradient-to-br from-secondary-50 to-purple-50/40 border-secondary-100">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-secondary" />
                <h3 className="text-sm font-bold text-slate-900">Boost Your Match & Applications</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: <FileText className="w-4 h-4 text-primary" />, label: 'AI Resume Optimization', cost: '120 Credits' },
                  { icon: <FileEdit className="w-4 h-4 text-secondary" />, label: 'Tailor Resume for Job', cost: '80 Credits' },
                  { icon: <FileText className="w-4 h-4 text-success-600" />, label: 'Generate Cover Letter', cost: '60 Credits' },
                  { icon: <Target className="w-4 h-4 text-blue-500" />, label: 'Deep ATS Analysis', cost: '75 Credits' },
                ].map((a, i) => (
                  <div key={i} className="bg-white border border-border rounded-xl p-3 hover:border-primary-200 cursor-pointer transition-all">
                    <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center mb-2">
                      {a.icon}
                    </div>
                    <p className="text-[10px] font-bold text-slate-800 leading-tight mb-1.5">{a.label}</p>
                    <p className="text-[9px] text-slate-500 font-semibold">{a.cost}</p>
                  </div>
                ))}
              </div>
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
const ChevronDownIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const BotIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="7" width="16" height="12" rx="3" />
    <circle cx="9" cy="13" r="1.5" fill="white" />
    <circle cx="15" cy="13" r="1.5" fill="white" />
    <path d="M12 7V4M10 4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ZapIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);
const BriefcaseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export default SavedJobsPage;
