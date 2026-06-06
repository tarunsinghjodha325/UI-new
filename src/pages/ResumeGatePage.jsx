import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { Upload, FileText, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ResumeUploadIllustration = () => (
  <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
    <defs>
      <linearGradient id="ru1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#EDE9FE" />
        <stop offset="100%" stopColor="#DDD6FE" />
      </linearGradient>
    </defs>
    <ellipse cx="80" cy="125" rx="55" ry="5" fill="#EDE9FE" />
    <rect x="38" y="15" width="70" height="90" rx="6" fill="white" stroke="#A78BFA" strokeWidth="1.5" />
    <circle cx="58" cy="32" r="8" fill="#A78BFA" />
    <rect x="72" y="27" width="28" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="72" y="34" width="20" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="50" width="55" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="56" width="48" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="62" width="50" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="72" width="55" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="78" width="40" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="88" width="55" height="2" rx="1" fill="#E5E7EB" />
    <circle cx="115" cy="92" r="22" fill="url(#ru1)" />
    <circle cx="115" cy="92" r="14" fill="#7C3AED" />
    <path d="M115 86v10M110 92l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M22 30l3 1-2 3-3-1 2-2z" fill="#7C3AED" opacity="0.5" />
    <path d="M140 20l3 1-2 3-3-1 2-2z" fill="#7C3AED" opacity="0.4" />
    <path d="M150 50l3 1-2 3-3-1 2-2z" fill="#7C3AED" opacity="0.6" />
  </svg>
);

const ResumeEditIllustration = () => (
  <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
    <defs>
      <linearGradient id="re1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#DCFCE7" />
        <stop offset="100%" stopColor="#BBF7D0" />
      </linearGradient>
    </defs>
    <ellipse cx="80" cy="125" rx="55" ry="5" fill="#DCFCE7" />
    <rect x="38" y="15" width="70" height="90" rx="6" fill="white" stroke="#16A34A" strokeWidth="1.5" />
    <circle cx="58" cy="32" r="8" fill="#16A34A" />
    <rect x="72" y="27" width="28" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="72" y="34" width="20" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="50" width="55" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="56" width="48" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="62" width="50" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="72" width="55" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="78" width="40" height="2" rx="1" fill="#E5E7EB" />
    <rect x="46" y="88" width="55" height="2" rx="1" fill="#E5E7EB" />
    <circle cx="115" cy="92" r="22" fill="url(#re1)" />
    <rect x="100" y="78" width="30" height="30" rx="5" fill="#16A34A" transform="rotate(20 115 93)" />
    <path d="M110 95l5 5 10-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" transform="rotate(20 115 93)" />
    <path d="M22 30l3 1-2 3-3-1 2-2z" fill="#16A34A" opacity="0.5" />
    <path d="M140 50l3 1-2 3-3-1 2-2z" fill="#16A34A" opacity="0.4" />
  </svg>
);

const SproutIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#DCFCE7" />
    <path d="M16 22v-7M16 15c-3-1-5-3-5-6 0 0 3 0 5 3M16 15c3-1 5-3 5-6 0 0-3 0-5 3" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <ellipse cx="16" cy="23" rx="4" ry="1.5" fill="#16A34A" />
  </svg>
);

const ResumeGatePage = () => {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const { toggleResume, resumeUploaded } = useAppContext();

  const handleUpload = () => fileRef.current?.click();
  const handleFile = (e) => {
    if (!e.target.files?.[0]) return;
    toggleResume(true);
    navigate('/career-growth/onboarding');
  };

  // Guard: don't show this page if user has already uploaded
  if (resumeUploaded) {
    navigate('/career-path');
    return null;
  }

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar variant="careerGrowthOnboarding" />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full overflow-x-hidden">
        <input ref={fileRef} type="file" accept=".pdf,.docx,.doc" className="hidden" onChange={handleFile} />

        {/* Top: breadcrumb + progress + credits */}
        <div className="h-14 lg:h-16 bg-white border-b border-border flex items-center justify-between px-3 sm:px-5 lg:px-8 gap-2">
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-bold text-slate-700">Career Growth Setup</span>
            </div>
            <div className="flex items-center gap-1.5 ml-4">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <div className="w-16 h-0.5 bg-secondary" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-16 h-0.5 bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-border">
              <span className="text-primary text-sm">⚡</span>
              <span className="text-sm font-extrabold">1,000</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border-2 border-white shrink-0">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
          {/* Sprout + heading */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-success-50 flex items-center justify-center">
              <SproutIcon />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Let's understand <span className="text-secondary">where you are today</span>
            </h1>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Upload your resume to get personalized career analysis, skill gap insights, and a tailored growth roadmap.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {/* Card 1: I have a resume */}
            <div className="bg-white border-2 border-secondary-200 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                <StarIcon className="w-3 h-3" /> RECOMMENDED
              </div>
              <div className="flex justify-center mb-4">
                <ResumeUploadIllustration />
              </div>
              <h3 className="text-lg font-bold text-slate-900 text-center mb-2">I have a resume</h3>
              <p className="text-[12px] text-slate-500 text-center mb-5 leading-relaxed">
                Upload your current resume and let AI analyze your experience, skills, and role to create a personalized career roadmap.
              </p>
              <button
                onClick={handleUpload}
                className="w-full py-3 bg-secondary text-white text-sm font-bold rounded-xl hover:bg-secondary-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <Upload className="w-4 h-4" /> Upload Resume
              </button>
              <p className="text-[10px] text-slate-500 text-center font-bold mt-3">PDF, DOCX (Max 5MB)</p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <Shield className="w-3 h-3 text-success-500" />
                <span className="text-[10px] text-slate-500 font-medium">Your data is secure and private</span>
              </div>
            </div>

            {/* Card 2: I don't have a resume */}
            <div className="bg-white border-2 border-success-200 rounded-2xl p-6 hover:border-success-300 transition-all">
              <div className="flex justify-center mb-4">
                <ResumeEditIllustration />
              </div>
              <h3 className="text-lg font-bold text-slate-900 text-center mb-2">I don't have a resume</h3>
              <p className="text-[12px] text-slate-500 text-center mb-5 leading-relaxed">
                No problem! Build a professional resume and get personalized career guidance along the way.
              </p>
              <button
                onClick={() => navigate('/resume-review')}
                className="w-full py-3 border-2 border-success-500 text-success-600 text-sm font-bold rounded-xl hover:bg-success-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText className="w-4 h-4" /> Build My Resume
              </button>
              <p className="text-[10px] text-slate-500 text-center font-medium mt-3">Takes less than 5 minutes</p>
            </div>
          </div>

          {/* Why upload your resume? */}
          <div className="bg-white border border-border rounded-2xl p-5 flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-secondary-50 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-sm font-bold text-slate-900">Why upload your resume?</span>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                'Get accurate career assessment',
                'See skill gaps and opportunities',
                'Receive personalized role & salary insights',
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-success-500 shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" /></svg>
);
const CheckCircleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default ResumeGatePage;
