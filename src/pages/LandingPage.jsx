import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2, Sparkles, ArrowRight, Upload, Search, TrendingUp, FileText, Star, ChevronDown,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const LandingPage = () => {
  const navigate = useNavigate();
  const { login, toggleResume } = useAppContext();
  const fileRef = useRef(null);

  const handleUploadClick = () => {
    fileRef.current?.click();
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // User uploaded resume from landing → goes to Signup, then Dashboard
    toggleResume(true);
    navigate('/signup?upload=true');
  };

  const handleGetStarted = () => {
    toggleResume(false);
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-white">
      <input ref={fileRef} type="file" accept=".pdf,.docx,.doc" className="hidden" onChange={handleFile} />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Career<span className="text-primary">Vibe</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#how" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#" className="hover:text-primary transition-colors">AI Job Match</a>
          <a href="#" className="hover:text-primary transition-colors">Career Growth</a>
          <a href="#" className="hover:text-primary transition-colors">Resume & LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">Resources <ChevronDown className="w-3 h-3" /></a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/login" className="hidden sm:inline text-sm font-semibold text-slate-700 hover:text-primary transition-colors">Log In</Link>
          <button
            onClick={handleGetStarted}
            className="px-4 sm:px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-bold rounded-full hover:bg-primary-600 transition-colors"
          >
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10 pb-12 lg:pb-16 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary rounded-full border border-primary-100 mb-4">
          <Sparkles className="w-3 h-3" />
          <span className="text-[11px] font-bold">AI-Powered Career Platform</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Find the Right <span className="text-success-600">Job.</span>
              <br />
              Build the Right <span className="text-primary">Career.</span>
            </h1>
            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-lg">
              Upload your resume and let AI match you with the best opportunities, guide your career growth, and help you become more competitive.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Perfect job matches as per your resume',
                'AI career guidance and personalized roadmap',
                'Resume & LinkedIn optimization to get hired faster',
                'Skill gap analysis and smart learning recommendations',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-success-600 shrink-0" />
                  <span className="text-sm text-slate-700">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={handleUploadClick}
                className="px-6 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-600 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                <Upload className="w-4 h-4" /> Upload Your Resume
              </button>
              <button
                onClick={handleGetStarted}
                className="px-6 py-3.5 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-primary transition-all flex flex-col items-center leading-tight"
              >
                <span className="flex items-center gap-2">Explore Career Paths <ArrowRight className="w-4 h-4" /></span>
                <span className="text-[10px] text-slate-500 font-medium mt-0.5">Not sure what to do next?</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/72?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-xs text-slate-700 font-semibold mt-0.5">Loved by 50,000+ professionals</p>
                <p className="text-[10px] text-slate-500">who boosted their careers with CareerVibe</p>
              </div>
            </div>
          </div>

          {/* Right preview card */}
          <div className="relative">
            <div className="bg-white border border-border rounded-2xl p-5 shadow-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Match for You</span>
                <span className="text-[10px] font-bold text-success-600 bg-success-50 px-2 py-0.5 rounded">94% Match</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Senior Product Manager</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Stripe • Bangalore, India • Full-time</p>
                  <p className="text-xs text-slate-500 mt-0.5">₹25L – ₹45L PA</p>
                </div>
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="32" fill="transparent" stroke="#E5E7EB" strokeWidth="6" />
                    <circle cx="40" cy="40" r="32" fill="transparent" stroke="#16A34A" strokeWidth="6" strokeDasharray="201" strokeDashoffset="12" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-extrabold text-success-600">94%</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase">Match Score</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-[11px] font-bold text-slate-700 mb-1.5">Why it's a great match</div>
                {['Strong in Product Strategy', 'Experience in SaaS', 'Leadership & Team Management'].map((m, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success-500" />
                    {m}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/jobs')}
                className="text-[11px] font-bold text-primary hover:underline"
              >
                View Job Details →
              </button>
            </div>

            {/* Missing skills card */}
            <div className="bg-white border border-border rounded-2xl p-4 shadow-card absolute -bottom-6 -left-6 w-56 z-10">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Missing Skills</div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['Data Analytics', 'A/B Testing', 'SQL'].map(s => (
                  <span key={s} className="px-2 py-0.5 bg-primary-50 text-primary text-[10px] font-bold rounded">{s}</span>
                ))}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Profile Strength</div>
              <div className="flex items-center justify-between">
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90">
                    <circle cx="24" cy="24" r="20" fill="transparent" stroke="#E5E7EB" strokeWidth="4" />
                    <circle cx="24" cy="24" r="20" fill="transparent" stroke="#16A34A" strokeWidth="4" strokeDasharray="125" strokeDashoffset="35" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-success-600">72%</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Good</div>
                  <button
                  onClick={() => navigate('/resume-review')}
                  className="text-[10px] font-bold text-primary hover:underline"
                >
                  Improve Now →
                </button>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-primary font-bold hover:underline cursor-pointer">See How to Improve →</div>
            </div>

            {/* Career Growth Tip */}
            <div className="bg-white border border-border rounded-2xl p-4 shadow-card absolute -bottom-4 right-4 w-64 z-10">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-slate-900">Career Growth Tip</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-relaxed">Product Management roles in your profile are in high demand. Consider strengthening your data skills.</p>
            </div>

            {/* Stats row */}
            <div className="absolute -bottom-12 left-12 flex gap-2">
              {[
                { v: 28, l: 'Matched Jobs', c: 'text-primary' },
                { v: 7, l: 'Applications', c: 'text-primary' },
                { v: 3, l: 'Interviews', c: 'text-primary' },
                { v: 12, l: 'Saved Jobs', c: 'text-primary' },
              ].map(s => (
                <div key={s.l} className="bg-white border border-border rounded-xl px-3 py-2 text-center min-w-[70px] shadow-card">
                  <div className={`text-base font-extrabold ${s.c}`}>{s.v}</div>
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How CareerVibe Works */}
      <section id="how" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">SIMPLE STEPS, POWERFUL RESULTS</div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">How CareerVibe Works</h2>
          <p className="text-sm text-slate-500 mb-12">Our AI engine analyzes your background and goals to create a seamless path to your dream career.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {[
              { step: '1', title: 'Upload Your Resume', desc: 'Upload your resume or import from LinkedIn to get started.' },
              { step: '2', title: 'AI Finds Your Best Matches', desc: 'Our AI analyzes your skills and matches you with perfect jobs.' },
              { step: '3', title: 'Get Insights & Grow', desc: 'See match score, skill gaps and career growth recommendations.' },
              { step: '4', title: 'Apply & Get Hired', desc: 'Optimize your profile, apply with confidence and land interviews.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white border border-border flex items-center justify-center shadow-card">
                  {i === 0 && <Upload className="w-7 h-7 text-primary" />}
                  {i === 1 && <Search className="w-7 h-7 text-primary" />}
                  {i === 2 && <TrendingUp className="w-7 h-7 text-primary" />}
                  {i === 3 && <FileText className="w-7 h-7 text-primary" />}
                </div>
                <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[180px] mx-auto">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px border-t border-dashed border-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Choose Your Path, We'll Guide You</h2>
            <p className="text-sm text-slate-500">Whether you know what you want or need help deciding, we've got you covered.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Find Perfect Job Matches */}
            <div className="bg-white border border-border rounded-2xl p-6 hover:border-primary-200 transition-all">
              <div className="relative w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary" />
                <span className="absolute -top-1 -right-1 bg-success-50 text-success-600 text-[9px] font-bold px-1.5 py-0.5 rounded">Most Popular</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Find Perfect Job Matches</h3>
              <p className="text-xs text-slate-500 mb-5 leading-relaxed">Get AI-matched jobs based on your resume, skills and career goals.</p>
              <ul className="space-y-2 mb-6">
                {['High match score jobs', 'Personalized job recommendations', 'Real-time job updates'].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <button onClick={handleGetStarted} className="w-full py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-1.5">
                Find Matches Now <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Get Career Guidance */}
            <div className="bg-white border border-border rounded-2xl p-6 hover:border-secondary-200 transition-all">
              <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-5">
                <Compass className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Get Career Guidance</h3>
              <p className="text-xs text-slate-500 mb-5 leading-relaxed">Not sure what career suits you? Our AI Career Coach can help.</p>
              <ul className="space-y-2 mb-6">
                {['Discover best career paths', 'Skill gap and learning roadmap', 'Career change guidance'].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <button onClick={handleGetStarted} className="w-full py-2.5 bg-secondary text-white text-sm font-bold rounded-xl hover:bg-secondary-700 transition-colors flex items-center justify-center gap-1.5">
                Explore Career Paths <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Build Winning Profile */}
            <div className="bg-white border border-border rounded-2xl p-6 hover:border-success-200 transition-all">
              <div className="w-14 h-14 bg-success-50 rounded-xl flex items-center justify-center mb-5">
                <FileText className="w-7 h-7 text-success-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Build Winning Profile</h3>
              <p className="text-xs text-slate-500 mb-5 leading-relaxed">Optimize your resume and LinkedIn to stand out to recruiters.</p>
              <ul className="space-y-2 mb-6">
                {['ATS-friendly resume review', 'LinkedIn profile optimization', 'Increase interview chances'].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <button onClick={handleGetStarted} className="w-full py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-1.5">
                Optimize Profile <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Target = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const Compass = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export default LandingPage;
