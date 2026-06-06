import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import {
  GraduationCap, Briefcase, User, RefreshCcw, Target, TrendingUp, ChevronRight, CheckCircle2, Sparkles,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const MountainIllustration = () => (
  <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
    <defs>
      <linearGradient id="mt1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EDE9FE" />
        <stop offset="100%" stopColor="#DDD6FE" />
      </linearGradient>
    </defs>
    <path d="M20 130 L80 50 L120 90 L160 40 L190 130 Z" fill="url(#mt1)" />
    <path d="M20 130 L60 80 L100 110 L140 70 L190 130 Z" fill="#A78BFA" opacity="0.3" />
    <path d="M30 130 Q60 115 90 130 T160 130" stroke="#7C3AED" strokeWidth="1" strokeDasharray="2 3" fill="none" />
    <circle cx="155" cy="40" r="3" fill="#7C3AED" />
    <path d="M155 40l-3-15h6l-3 15z" fill="#7C3AED" />
    <rect x="152" y="35" width="6" height="2" fill="white" />
    <path d="M40 30l3 1-2 3-3-1 2-2z" fill="#F97316" opacity="0.6" />
    <path d="M180 80l3 1-2 3-3-1 2-2z" fill="#F97316" opacity="0.5" />
  </svg>
);

const GrowthChartIllustration = () => (
  <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
    <defs>
      <linearGradient id="gc1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0 80 Q40 70 60 60 T120 40 T200 10 L200 100 L0 100 Z" fill="url(#gc1)" />
    <path d="M0 80 Q40 70 60 60 T120 40 T200 10" stroke="#7C3AED" strokeWidth="2" fill="none" />
    <rect x="10" y="70" width="8" height="20" fill="#7C3AED" />
    <rect x="25" y="60" width="8" height="30" fill="#A78BFA" />
    <rect x="40" y="50" width="8" height="40" fill="#7C3AED" />
    <rect x="55" y="40" width="8" height="50" fill="#A78BFA" />
    <path d="M180 10l5 3-3 5-5-3 3-3z" fill="#7C3AED" />
  </svg>
);

const SituationIcon = ({ type }) => {
  const props = { className: 'w-6 h-6' };
  switch (type) {
    case 'student': return <GraduationCap {...props} />;
    case 'starting': return <User {...props} />;
    case 'experienced': return <Briefcase {...props} />;
    case 'changing': return <RefreshCcw {...props} />;
    case 'advancement': return <Target {...props} />;
    default: return null;
  }
};

const PathIcon = ({ type }) => {
  switch (type) {
    case 'product': return <Briefcase className="w-5 h-5 text-primary" />;
    case 'data': return <TrendingUp className="w-5 h-5 text-success-600" />;
    case 'design': return <Sparkles className="w-5 h-5 text-primary" />;
    case 'software': return <span className="text-secondary font-bold text-base">{ '</>' }</span>;
    default: return null;
  }
};

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { user, toggleResume, updateTargetRole } = useAppContext();
  const [selected, setSelected] = useState(2);

  const situations = [
    { type: 'student', label: "I'm a student", desc: 'Exploring career options' },
    { type: 'starting', label: "I'm starting my career", desc: '0-2 years of experience' },
    { type: 'experienced', label: "I'm an experienced professional", desc: '2+ years of experience' },
    { type: 'changing', label: "I'm changing careers", desc: 'Switching to a new field' },
    { type: 'advancement', label: "I'm aiming for advancement", desc: 'Looking for growth & promotions' },
  ];

  const paths = [
    { type: 'product', title: 'Product Management', desc: 'Great for problem solvers', salary: '$120k – $180k' },
    { type: 'data', title: 'Data & Analytics', desc: 'Great for analytical minds', salary: '$110k – $160k' },
    { type: 'design', title: 'UX / UI Design', desc: 'Great for creative thinkers', salary: '$90k – $130k' },
    { type: 'software', title: 'Software Development', desc: 'Great for builders', salary: '$100k – $150k' },
  ];

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar variant="careerGrowthOnboarding" />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full overflow-x-hidden">
        <TopBar variant="searchSkill" />

        <div className="p-4 sm:p-6 max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <div className="mb-6 mt-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                Great choice, {user.name.split(' ')[0]}! 🚀
              </h1>
              <p className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">Let's build your ideal career path.</p>
              <p className="text-sm text-slate-500 mt-2">Answer a few questions and we'll create a personalized roadmap for you.</p>
            </div>

            {/* 3-step progress */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
              {[
                { n: 1, label: 'Tell us about yourself', active: true },
                { n: 2, label: 'Your goals', active: false },
                { n: 3, label: 'Get your roadmap', active: false },
              ].map((s, i) => (
                <React.Fragment key={s.n}>
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 ${
                      s.active ? 'bg-secondary text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {s.n}
                    </div>
                    <span className={`text-xs sm:text-sm font-bold hidden md:inline ${s.active ? 'text-slate-900' : 'text-slate-500'}`}>{s.label}</span>
                  </div>
                  {i < 2 && <div className="w-8 sm:w-16 h-px bg-slate-200" />}
                </React.Fragment>
              ))}
            </div>

            <div className="card p-6 mb-5">
              <h3 className="text-base font-bold text-slate-900 mb-1">What's your current situation?</h3>
              <p className="text-xs text-slate-500 mb-5">This helps us personalize your career guidance.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
                {situations.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`relative p-4 rounded-2xl border-2 transition-all text-center ${
                      selected === i
                        ? 'border-secondary bg-secondary-50/40'
                        : 'border-border bg-white hover:border-slate-300'
                    }`}
                  >
                    {selected === i && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-2 ${
                      selected === i ? 'bg-secondary-100 text-secondary' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <SituationIcon type={s.type} />
                    </div>
                    <p className="text-[12px] font-bold text-slate-900 leading-tight mb-1">{s.label}</p>
                    <p className="text-[10px] text-slate-500 leading-tight">{s.desc}</p>
                  </button>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => navigate('/career-path')}
                  className="px-8 py-3 bg-secondary text-white text-sm font-bold rounded-xl hover:bg-secondary-700 transition-colors flex items-center gap-1.5"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Popular Career Paths</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Explore paths tailored to your interests and the market.</p>
                </div>
                <button
                  onClick={() => navigate('/career-path')}
                  className="text-[11px] font-bold text-primary hover:underline flex items-center gap-0.5"
                >
                  Explore all paths <ArrowRightIcon className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {paths.map((p, i) => (
                  <div
                    key={i}
                    onClick={() => { updateTargetRole(p.title); navigate('/career-path'); }}
                    className="bg-white border border-border rounded-2xl p-4 hover:border-primary-200 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-9 h-9 bg-slate-50 rounded-lg flex items-center justify-center">
                        <PathIcon type={p.type} />
                      </div>
                      <span className="text-[10px] font-bold text-success-600 bg-success-50 px-2 py-0.5 rounded">High growth</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h4>
                    <p className="text-[10px] text-slate-500 mb-0.5">{p.desc}</p>
                    <p className="text-[10px] text-slate-500">Avg. Salary: {p.salary}</p>
                    <div className="flex justify-end mt-2">
                      <div className="w-7 h-7 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                        <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Not sure what to choose?</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Take a quick assessment and let AI suggest the best career paths for you.</p>
              </div>
              <button
                onClick={() => navigate('/ai-coach')}
                className="px-4 py-2.5 border-2 border-secondary text-secondary text-xs font-bold rounded-xl hover:bg-secondary-50 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" /> Take Career Assessment
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="w-80 shrink-0 space-y-4">
            <div className="card p-5">
              <h3 className="text-base font-bold text-slate-900 mb-4">Why plan your career?</h3>
              <ul className="space-y-2.5 mb-4">
                {['Get personalized career roadmap', 'Discover in-demand skills', 'Explore high-growth roles', 'Stay ahead with future insights', 'Achieve your goals faster'].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-2">
                <GrowthChartIllustration />
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900">Top In-Demand Roles</h3>
                <button
                  onClick={() => navigate('/jobs')}
                  className="text-[10px] font-bold text-primary hover:underline"
                >
                  View all
                </button>
              </div>
              <ul className="space-y-2.5">
                {[
                  { name: 'Product Manager', salary: '$120k – $180k', color: 'bg-primary' },
                  { name: 'Data Scientist', salary: '$110k – $160k', color: 'bg-blue-500' },
                  { name: 'UX Designer', salary: '$90k – $130k', color: 'bg-purple-500' },
                  { name: 'Software Engineer', salary: '$100k – $150k', color: 'bg-secondary' },
                  { name: 'Growth Manager', salary: '$90k – $140k', color: 'bg-success-500' },
                ].map((r, i) => (
                  <li key={i} className="flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 ${r.color} rounded-lg flex items-center justify-center text-white text-[10px] font-bold`}>
                        {r.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-slate-700">{r.name}</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">{r.salary}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">AI Career Coach</p>
                  <p className="text-[10px] text-slate-500">Ask me anything about your career</p>
                </div>
              </div>
              <div className="space-y-1.5 mb-3">
                {['Which career is right for me?', 'How can I switch my career?', 'What skills should I learn?'].map((q, i) => (
                  <div key={i} className="px-2.5 py-1.5 bg-slate-50 rounded-md text-[10px] text-slate-600 font-medium">
                    {q}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/ai-coach')}
                className="w-full py-2 bg-secondary-50 text-secondary text-xs font-bold rounded-xl hover:bg-secondary-100 transition-colors flex items-center justify-center gap-1.5"
              >
                Start Chatting →
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

export default OnboardingPage;
