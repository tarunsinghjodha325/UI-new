import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { Upload, Compass, FileText, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const FindMatchIllustration = () => (
  <svg width="160" height="115" viewBox="0 0 180 130" fill="none" className="w-full max-w-[160px] h-auto">
    <defs>
      <linearGradient id="fm1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFEDD5" />
        <stop offset="100%" stopColor="#FED7AA" />
      </linearGradient>
    </defs>
    <ellipse cx="90" cy="115" rx="60" ry="6" fill="#FFEDD5" />
    <rect x="40" y="25" width="80" height="100" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
    <rect x="40" y="25" width="80" height="18" rx="6" fill="#F97316" />
    <rect x="48" y="55" width="40" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="63" width="50" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="71" width="35" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="83" width="44" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="91" width="30" height="3" rx="1.5" fill="#E5E7EB" />
    <circle cx="135" cy="80" r="32" fill="url(#fm1)" />
    <circle cx="135" cy="80" r="14" fill="#F97316" />
    <path d="M129 80l4 4 8-8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M155 60l8 5 12-2-8 6 5 12-10-5-10 5 5-12-8-6 6-3z" fill="#F97316" opacity="0.6" />
    <path d="M22 50l4 2 4-3-2 5 4 4-5 1-1 5-3-4-5-1 4-4-2-5 2 0z" fill="#F97316" opacity="0.4" />
  </svg>
);

const CompassIllustration = () => (
  <svg width="160" height="115" viewBox="0 0 180 130" fill="none" className="w-full max-w-[160px] h-auto">
    <defs>
      <linearGradient id="cp1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EDE9FE" />
        <stop offset="100%" stopColor="#DDD6FE" />
      </linearGradient>
    </defs>
    <ellipse cx="90" cy="115" rx="60" ry="6" fill="#EDE9FE" />
    <circle cx="90" cy="65" r="45" fill="url(#cp1)" />
    <circle cx="90" cy="65" r="35" fill="white" stroke="#7C3AED" strokeWidth="1.5" opacity="0.3" />
    <path d="M90 40l-10 25 10 5 10-5z" fill="#7C3AED" />
    <path d="M90 90l-10-25 10-5 10 5z" fill="#A78BFA" />
    <circle cx="90" cy="65" r="3" fill="#7C3AED" />
    <path d="M30 95 Q60 75 90 95 T150 95" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
    <path d="M155 50l6 3-3 6-6-3 3-3z" fill="#7C3AED" opacity="0.5" />
    <path d="M22 80l3 2-2 3-3-2 2-2z" fill="#7C3AED" opacity="0.4" />
  </svg>
);

const ResumeIllustration = () => (
  <svg width="160" height="115" viewBox="0 0 180 130" fill="none" className="w-full max-w-[160px] h-auto">
    <defs>
      <linearGradient id="rs1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#DCFCE7" />
        <stop offset="100%" stopColor="#BBF7D0" />
      </linearGradient>
    </defs>
    <ellipse cx="90" cy="115" rx="60" ry="6" fill="#DCFCE7" />
    <rect x="40" y="20" width="80" height="100" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
    <circle cx="58" cy="40" r="8" fill="#16A34A" />
    <rect x="72" y="35" width="38" height="4" rx="2" fill="#E5E7EB" />
    <rect x="72" y="42" width="28" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="60" width="60" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="68" width="50" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="76" width="55" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="88" width="60" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="48" y="96" width="40" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="120" y="65" width="35" height="35" rx="6" fill="url(#rs1)" transform="rotate(20 137 82)" />
    <rect x="125" y="65" width="20" height="3" rx="1.5" fill="#16A34A" transform="rotate(20 135 66)" />
    <rect x="125" y="72" width="16" height="3" rx="1.5" fill="#16A34A" transform="rotate(20 133 73)" />
    <path d="M130 95l8 8 14-14" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 50l3 2-2 3-3-2 2-2z" fill="#16A34A" opacity="0.5" />
    <path d="M155 30l5 3-3 5-5-3 3-3z" fill="#16A34A" opacity="0.4" />
  </svg>
);

const WelcomePage = () => {
  const navigate = useNavigate();
  const { user, toggleResume, resumeUploaded } = useAppContext();
  const fileRef = useRef(null);

  const onFindJobs = () => {
    fileRef.current?.click();
  };

  const onFile = (e) => {
    if (!e.target.files?.[0]) return;
    toggleResume(true);
    navigate('/jobs');
  };

  const onGrowCareer = () => {
    if (resumeUploaded) navigate('/career-path');
    else navigate('/career-growth/setup');
  };

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full overflow-x-hidden">
        <TopBar variant="search" />
        <input ref={fileRef} type="file" accept=".pdf,.docx,.doc" className="hidden" onChange={onFile} />

        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-10 max-w-6xl mx-auto w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-primary-600 font-bold text-sm mb-3">
              <Sparkles className="w-4 h-4" /> Welcome to CareerVibe, {user.name.split(' ')[0]}! <span className="text-xl">👋</span>
            </div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 leading-tight break-words">What would you like help with today?</h1>
            <p className="text-slate-500 text-sm sm:text-base">Choose your goal and we'll personalize your experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 min-w-0">
            {/* Card 1: Find Matching Jobs */}
            <div className="bg-white border border-border rounded-2xl p-5 sm:p-6 hover:shadow-card transition-all relative">
              <span className="absolute top-3 right-3 px-2 py-0.5 bg-primary-50 text-primary text-[9px] font-bold rounded-full">Most Popular</span>
              <div className="flex justify-center mb-4 overflow-hidden">
                <FindMatchIllustration />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Find Matching Jobs</h3>
              <p className="text-xs text-slate-500 text-center mb-5 leading-relaxed">Upload your resume and get AI-matched jobs that fit your skills and experience.</p>
              <ul className="space-y-2 mb-5">
                {['Get highly relevant job matches', 'See match scores and insights', 'Apply directly to top opportunities'].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={onFindJobs}
                className="w-full py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-1.5"
              >
                <Upload className="w-4 h-4" /> Upload Resume
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2 font-medium">PDF, DOCX (Max 5MB)</p>
            </div>

            {/* Card 2: Grow My Career */}
            <div className="bg-white border border-border rounded-2xl p-5 sm:p-6 hover:shadow-card transition-all">
              <div className="flex justify-center mb-4 overflow-hidden">
                <CompassIllustration />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Grow My Career</h3>
              <p className="text-xs text-slate-500 text-center mb-5 leading-relaxed">Get personalized career guidance, explore paths, and build in-demand skills.</p>
              <ul className="space-y-2 mb-5">
                {['Discover the right career path', 'Get AI-powered career guidance', 'Receive a personalized roadmap'].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={onGrowCareer}
                className="w-full py-3 border-2 border-secondary text-secondary text-sm font-bold rounded-xl hover:bg-secondary-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <Compass className="w-4 h-4" /> Explore Career Paths
              </button>
            </div>

            {/* Card 3: Build My Resume */}
            <div className="bg-white border border-border rounded-2xl p-5 sm:p-6 hover:shadow-card transition-all">
              <div className="flex justify-center mb-4 overflow-hidden">
                <ResumeIllustration />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Build My Resume</h3>
              <p className="text-xs text-slate-500 text-center mb-5 leading-relaxed">Create or optimize your resume to stand out and get more interview calls.</p>
              <ul className="space-y-2 mb-5">
                {['AI resume builder from scratch', 'ATS-friendly resume templates', 'Optimize for better shortlisting'].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-success-600 shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/resume-review')}
                className="w-full py-3 bg-success-600 text-white text-sm font-bold rounded-xl hover:bg-success-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText className="w-4 h-4" /> Start Resume Builder
              </button>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-8 mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Real People. Real Results. <span className="text-primary">Powered by AI.</span>
              </h2>
              <p className="text-sm text-slate-500">See how CareerVibe helped professionals land their dream jobs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 min-w-0">
              {[
                {
                  name: 'Rohit Sharma',
                  role: 'Software Engineer at Google',
                  avatar: 'https://i.pravatar.cc/96?img=12',
                  quote: 'CareerVibe\'s AI Job Match found roles I would have never applied to on my own. I went from scattered applications to 3x more interview calls.',
                  rating: 5,
                  chips: ['3x more interview calls', 'AI Match 92%'],
                  accent: 'orange',
                },
                {
                  name: 'Neha Patel',
                  role: 'Product Designer at Figma',
                  avatar: 'https://i.pravatar.cc/96?img=47',
                  quote: 'The Career Path feature showed me exactly which skills I needed to move from junior to senior designer. I landed my dream role in 4 months.',
                  rating: 5,
                  chips: ['Promoted in 4 months', 'Skill gap cleared'],
                  accent: 'violet',
                },
                {
                  name: 'Arjun Mehta',
                  role: 'Data Analyst at Microsoft',
                  avatar: 'https://i.pravatar.cc/96?img=33',
                  quote: 'The AI Career Coach acted like a personal mentor. Resume tips, interview prep, salary advice — all in one place. Worth every credit.',
                  rating: 5,
                  chips: ['Salary +35%', 'Coach sessions 12'],
                  accent: 'green',
                },
              ].map((t, i) => {
                const chipColors = {
                  orange: 'bg-primary-50 text-primary-700 border-primary-100',
                  violet: 'bg-secondary-50 text-secondary-700 border-secondary-100',
                  green: 'bg-success-50 text-success-700 border-success-100',
                };
                return (
                  <div
                    key={i}
                    className="bg-white border border-border rounded-2xl p-5 hover:shadow-card transition-all flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-slate-900 truncate">{t.name}</p>
                        <p className="text-[11px] text-slate-500 truncate">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <span key={idx} className="text-yellow-500 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-[13px] text-slate-700 leading-relaxed mb-4 flex-1">"{t.quote}"</p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.chips.map((chip, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-[10px] font-bold rounded-full border ${chipColors[t.accent]}`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Safe & Secure bar */}
          <div className="bg-white border border-border rounded-2xl p-4 flex items-center justify-center gap-3 mb-4 max-w-md mx-auto">
            <div className="w-8 h-8 bg-success-50 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-success-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">100% Safe & Secure</p>
              <p className="text-[10px] text-slate-500">Your data is encrypted and never shared with anyone.</p>
            </div>
          </div>

          {/* Ratings row */}
          <div className="bg-white border border-border rounded-2xl p-5 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/72?img=${i + 20}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-500 text-sm">★</span>)}
                </div>
                <p className="text-[13px] font-bold text-slate-900 mt-0.5">Trusted by 50,000+ professionals</p>
                <p className="text-[10px] text-slate-500">who are building better careers with CareerVibe</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 text-base">G<span className="text-primary">oo</span>gle</span>
                <div>
                  <div className="text-[10px] font-bold text-slate-900">4.8/5</div>
                  <div className="text-yellow-500 text-[9px]">★★★★★</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 text-sm">Capterra</span>
                <div>
                  <div className="text-[10px] font-bold text-slate-900">4.7/5</div>
                  <div className="text-yellow-500 text-[9px]">★★★★★</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-red-500 text-sm">G2</span>
                <div>
                  <div className="text-[10px] font-bold text-slate-900">4.8/5</div>
                  <div className="text-yellow-500 text-[9px]">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
