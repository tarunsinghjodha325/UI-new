import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import {
  Sparkles, Send, History, ChevronRight,
  Briefcase, FileText, DollarSign, GraduationCap, Award, Lightbulb, User, MessageSquare,
  TrendingUp, Search,
} from 'lucide-react';

const RobotAvatar = () => (
  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="14" rx="3" fill="white" />
      <circle cx="9" cy="13" r="2" fill="#F97316" />
      <circle cx="15" cy="13" r="2" fill="#F97316" />
      <path d="M12 6V3" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="2" r="1.5" fill="white" />
      <rect x="9" y="17" width="6" height="1" rx="0.5" fill="#F97316" />
    </svg>
  </div>
);

const ExpertIllustration = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#FED7AA" />
    <circle cx="40" cy="30" r="11" fill="#FCD7B6" />
    <path d="M22 60 Q40 50 58 60 L58 80 L22 80 Z" fill="#16A34A" />
    <circle cx="35" cy="29" r="1.5" fill="#1F2937" />
    <circle cx="45" cy="29" r="1.5" fill="#1F2937" />
    <path d="M37 33 Q40 35 43 33" stroke="#1F2937" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M44 23 Q48 19 53 24" stroke="#1F2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <ellipse cx="40" cy="35" rx="6" ry="3" fill="#1F2937" opacity="0.1" />
  </svg>
);

const AICoachPage = () => {
  const navigate = useNavigate();
  const popularTopics = [
    { icon: <TrendingUp className="w-4 h-4 text-primary" />, label: 'Career Change Guidance' },
    { icon: <FileText className="w-4 h-4 text-primary" />, label: 'Resume & Profile Advice' },
    { icon: <Briefcase className="w-4 h-4 text-primary" />, label: 'Interview Preparation' },
    { icon: <DollarSign className="w-4 h-4 text-primary" />, label: 'Salary & Negotiation' },
    { icon: <Award className="w-4 h-4 text-primary" />, label: 'Skill Development' },
  ];

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar variant="aiCoach" />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full flex flex-col h-screen overflow-hidden">
        <TopBar variant="tabs" />

        <div className="flex-1 flex overflow-hidden">
          {/* Main chat area */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between gap-2 shrink-0 flex-wrap">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-lg sm:text-xl font-extrabold text-slate-900">AI Career Coach</h1>
                  <span className="px-1.5 py-0.5 bg-success-50 text-success-600 text-[10px] font-bold rounded">Free</span>
                </div>
                <p className="text-xs text-slate-500">Your personal AI coach to guide your career, skills, and growth.</p>
              </div>
              <button
                onClick={() => navigate('/ai-coach')}
                className="px-3 py-1.5 border border-border text-slate-600 text-[11px] font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <History className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Conversation History</span><span className="sm:hidden">History</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6 bg-slate-50/30">
              {/* AI Message 1 */}
              <div className="flex gap-3 max-w-2xl">
                <RobotAvatar />
                <div>
                  <div className="text-sm font-extrabold text-slate-900 mb-1.5">Hi Alex! <span>👋</span></div>
                  <p className="text-[13px] text-slate-700 leading-relaxed mb-3">
                    I'm your AI Career Coach. Ask me anything about your career and I'll help you make smarter decisions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Explore Career Paths', 'Improve My Skills', 'Interview Preparation', 'Resume Advice', 'Salary Insights'].map(t => (
                      <button key={t} className="px-3 py-1.5 bg-white border border-border text-slate-600 text-[11px] font-semibold rounded-full hover:border-primary hover:text-primary transition-colors">
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-md">
                  <div className="bg-primary-50 border border-primary-100 rounded-2xl px-4 py-3 text-[13px] text-slate-900 leading-relaxed inline-block">
                    What are the best next career moves for me based on my background?
                  </div>
                  <p className="text-[10px] text-slate-400 text-right mt-1 font-medium">10:24 AM ✓✓</p>
                </div>
              </div>

              {/* AI Response with cards */}
              <div className="flex gap-3 max-w-3xl">
                <RobotAvatar />
                <div className="flex-1">
                  <p className="text-[13px] text-slate-700 leading-relaxed mb-3">
                    Based on your experience in Customer Experience, Operations, and Team Management, here are the top career paths you can explore:
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { icon: <Award className="w-4 h-4" />, color: 'bg-primary-50 text-primary', title: 'Customer Experience Manager', meta: 'High demand • Great match • Est. $70K - $95K' },
                      { icon: <Briefcase className="w-4 h-4" />, color: 'bg-success-50 text-success-600', title: 'Operations Manager', meta: 'High demand • Strong match • Est. $65K - $90K' },
                      { icon: <Briefcase className="w-4 h-4" />, color: 'bg-secondary-50 text-secondary', title: 'Project Manager', meta: 'High demand • Good match • Est. $75K - $105K' },
                    ].map((c, i) => (
                      <div key={i} className="bg-white border border-border rounded-xl p-3 flex items-center gap-3 hover:border-primary transition-colors cursor-pointer group">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${c.color}`}>
                          {c.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-extrabold text-slate-900">{c.title}</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">{c.meta}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[12px] text-slate-600 mt-4 font-medium">Would you like me to create a detailed roadmap for any of these roles?</p>
                  <p className="text-[10px] text-slate-400 mt-1">10:24 AM</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Show roadmap for CX Manager', 'How to transition to Ops Manager?', 'Skills I should build', 'More options'].map(t => (
                      <button key={t} className="px-3 py-1.5 border border-success-200 text-success-600 text-[11px] font-bold rounded-full hover:bg-success-50 transition-colors flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" /> {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="p-5 bg-white border-t border-border shrink-0">
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Ask anything about your career..."
                  className="w-full pl-4 pr-14 py-3.5 bg-slate-50 border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <FileText className="w-3 h-3" />, label: 'Improve my resume' },
                  { icon: <DollarSign className="w-3 h-3" />, label: 'Salary negotiation' },
                  { icon: <MessageSquare className="w-3 h-3" />, label: 'Interview tips' },
                  { icon: <TrendingUp className="w-3 h-3" />, label: 'Career change' },
                  { icon: <Award className="w-3 h-3" />, label: 'Skill advice' },
                ].map(t => (
                  <button key={t.label} className="px-2.5 py-1.5 bg-slate-50 border border-border text-slate-600 text-[10px] font-semibold rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5">
                    <span className="text-slate-400">{t.icon}</span> {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="hidden lg:block w-80 bg-slate-50/50 p-5 overflow-y-auto shrink-0 space-y-4 border-l border-border">
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-sm font-bold text-slate-900">AI Coaching Usage</h3>
                <InfoIcon className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E7EB" strokeWidth="10" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#16A34A" strokeWidth="10" strokeDasharray="251" strokeDashoffset="176" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sm font-extrabold text-slate-900">3 / 10</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Free Questions Used</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mb-3">You have 7 questions left today.</p>
              <span className="inline-block px-2 py-0.5 bg-success-50 text-success-600 text-[10px] font-bold rounded">Resets in 14h 32m</span>
            </div>

            <div className="card p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Popular Topics</h3>
              <div className="space-y-1">
                {popularTopics.map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2.5">
                      <span className="text-primary">{t.icon}</span>
                      <span className="text-[12px] font-semibold text-slate-700">{t.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary" />
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Get Expert Guidance</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-3">Talk to real industry experts for personalized career advice.</p>
                <button
                  onClick={() => navigate('/ai-coach')}
                  className="px-3 py-2 bg-primary-50 text-primary text-[11px] font-bold rounded-lg hover:bg-primary-100 transition-colors flex items-center gap-1.5"
                >
                  Talk to Industry Expert <ArrowRightIcon className="w-3 h-3" />
                </button>
                </div>
                <ExpertIllustration />
              </div>
            </div>

            <div className="card p-5 bg-primary-50/50 border-primary-100">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-primary">Pro Tip</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Be specific with your questions to get the most accurate and helpful advice from AI.
              </p>
            </div>
          </div>
        </div>
        <p className="hidden lg:block text-center text-[11px] text-slate-400 py-3">
          AI responses may not always be accurate. Please verify important information.
        </p>
      </main>
    </div>
  );
};

const InfoIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
const ArrowRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default AICoachPage;
