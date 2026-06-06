import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import {
  CheckCircle2, X, ArrowRight, Sparkles, MessageSquare, Settings as SettingsIcon,
  Award, TrendingUp, BookOpen, Star, ChevronRight, Briefcase, MapPin,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Sparkle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l1.5 8.5L22 12l-8.5 1.5L12 24l-1.5-10.5L2 12l8.5-1.5L12 0z" /></svg>
);

const MatchScoreGauge = ({ score }) => {
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  return (
    <div className="relative w-24 h-24">
      <svg className="w-24 h-24 transform -rotate-90">
        <circle cx="48" cy="48" r={r} fill="transparent" stroke="#E5E7EB" strokeWidth="8" />
        <circle cx="48" cy="48" r={r} fill="transparent" stroke="#16A34A" strokeWidth="8" strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-extrabold text-slate-900 leading-none">{score}%</span>
      </div>
    </div>
  );
};

const SkillBar = ({ name, percent }) => (
  <div className="flex items-center justify-between text-xs gap-2">
    <span className="font-semibold text-slate-700 w-32 truncate">{name}</span>
    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-success-500 rounded-full" style={{ width: `${percent}%` }} />
    </div>
    <span className="text-slate-500 text-[11px] font-bold w-9 text-right">{percent}%</span>
  </div>
);

const JobMatchRow = ({ job, onSave }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
    <div className={`w-10 h-10 ${job.bg} rounded-lg flex items-center justify-center text-white font-extrabold text-sm shrink-0`}>
      {job.logo}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-1.5">
        <h4 className="font-bold text-sm text-slate-900 truncate">{job.title}</h4>
      </div>
      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5 flex-wrap">
        <span className="font-bold text-slate-700">{job.company}</span>
        <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-100" />
        {job.location && (<><span>•</span><span>{job.location}</span></>)}
        {job.type && (<><span>•</span><span>{job.type}</span></>)}
      </div>
      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
        {job.tags.map((t, i) => (
          <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-semibold rounded">{t}</span>
        ))}
        {job.salary && <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-semibold rounded">{job.salary}</span>}
        {job.isNew && <span className="px-2 py-0.5 bg-success-50 text-success-600 text-[10px] font-semibold rounded">New</span>}
      </div>
    </div>
    <button
      onClick={() => navigate('/saved-jobs')}
      className="text-slate-300 hover:text-primary transition-colors shrink-0"
      aria-label="Save job"
    >
      <BookmarkIcon className="w-4 h-4" />
    </button>
  </div>
);

const BookmarkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
);

const CourseCard = ({ course }) => (
  <div className="bg-white border border-border rounded-xl p-4 hover:shadow-card transition-all">
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-9 h-9 ${course.bg} rounded-lg flex items-center justify-center text-white text-[10px] font-extrabold shrink-0`}>
        {course.logoText}
      </div>
      <div className="min-w-0">
        <h4 className="font-bold text-sm text-slate-900 leading-tight line-clamp-2">{course.title}</h4>
        <p className="text-[11px] text-slate-500 mt-0.5">{course.platform}</p>
      </div>
    </div>
    <div className="flex items-center justify-between text-[11px] mt-3">
      <div className="flex items-center gap-1.5">
        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
        <span className="font-bold text-slate-700">{course.rating}</span>
        <span className="text-slate-500">•</span>
        <span className="text-slate-500">{course.duration}</span>
      </div>
      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
        course.impact === 'High' ? 'bg-success-50 text-success-600' : 'bg-primary-50 text-primary'
      }`}>
        {course.impact} Impact
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  const { user, resumeUploaded } = useAppContext();
  const [bannerVisible, setBannerVisible] = useState(resumeUploaded);
  const navigate = useNavigate();

  const stats = {
    resumeMatchScore: 82,
    topSkills: [
      { name: 'Data Analysis', percent: 90 },
      { name: 'Product Strategy', percent: 85 },
      { name: 'SQL', percent: 80 },
      { name: 'Excel', percent: 75 },
      { name: 'Communication', percent: 70 },
    ],
    experience: { years: '5.2 Years', role: 'Business Analyst', company: 'TechNova Solutions' },
    visibility: 'High',
  };

  const aiJobs = [
    { title: 'Business Analyst', company: 'Deloitte', logo: 'D', bg: 'bg-black', location: 'Full-time', tags: ['Full-time', 'Hybrid'], salary: '₹10L – ₹15L PA', isNew: true },
    { title: 'Data Analyst', company: 'Amazon', logo: 'a', bg: 'bg-slate-900', location: 'Full-time', tags: ['Full-time', 'Remote'], salary: '₹9L – ₹13L PA', isNew: true },
    { title: 'Product Analyst', company: 'Swiggy', logo: 'S', bg: 'bg-orange-500', location: 'Full-time', tags: ['Full-time', 'Bangalore'], salary: '₹8L – ₹12L PA', isNew: true },
  ];

  const skillGaps = [
    { name: 'Advanced SQL', impact: 'High' },
    { name: 'Data Modeling', impact: 'High' },
    { name: 'Power BI', impact: 'Medium' },
    { name: 'A/B Testing', impact: 'Medium' },
  ];

  const courses = [
    { title: 'SQL for Data Analysis', platform: 'Coursera', rating: 4.8, duration: '2h', impact: 'High', logoText: 'SQL', bg: 'bg-blue-500' },
    { title: 'Data Visualization with Power BI', platform: 'Udemy', rating: 4.6, duration: '8h', impact: 'High', logoText: 'BI', bg: 'bg-yellow-500' },
    { title: 'Advanced Excel', platform: 'Coursera', rating: 4.7, duration: '10h', impact: 'Medium', logoText: 'X', bg: 'bg-green-600' },
    { title: 'Product Metrics & Analytics', platform: 'Reforge', rating: 4.5, duration: '6h', impact: 'High', logoText: 'R', bg: 'bg-purple-600' },
  ];

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full overflow-x-hidden">
        <TopBar variant="search" />

        <div className="p-4 sm:p-6 max-w-[1400px] mx-auto w-full">
          {/* Greeting + Customize */}
          <div className="flex items-start justify-between mb-5 flex-wrap gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                Good morning, Alex! <span className="text-xl sm:text-2xl">👋</span>
              </h1>
              <p className="text-sm text-slate-500 mt-1">Here's your career overview and next best steps.</p>
            </div>
            <button
              onClick={() => navigate('/settings')}
              className="px-4 py-2 border border-border bg-white text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2"
            >
              <SettingsIcon className="w-4 h-4" /> <span className="hidden sm:inline">Customize Home</span><span className="sm:hidden">Customize</span>
            </button>
          </div>

          {/* Success Banner */}
          {bannerVisible && (
            <div className="bg-success-50 border border-success-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Resume uploaded successfully!</p>
                  <p className="text-xs text-slate-600">We've analyzed your resume and updated your profile insights.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => navigate('/resume-review')}
                  className="px-3 py-1.5 bg-white border border-border text-xs font-bold text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  View Resume Review
                </button>
                <button
                  onClick={() => navigate('/welcome')}
                  className="px-3 py-1.5 bg-secondary-50 text-secondary text-xs font-bold rounded-lg hover:bg-secondary-100 transition-colors"
                >
                  Retake Analysis
                </button>
                <button onClick={() => setBannerVisible(false)} className="p-1.5 text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Resume Match Score */}
            <div className="card p-5 flex flex-col">
              <div className="flex items-start gap-3">
                <MatchScoreGauge score={stats.resumeMatchScore} />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Resume Match Score</p>
                  <p className="text-sm font-bold text-success-600">Strong Profile</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-3">Great job! Your resume is well-optimized.</p>
              <button
                onClick={() => navigate('/resume-review')}
                className="mt-3 px-3 py-2 bg-primary-50 text-primary text-xs font-bold rounded-lg hover:bg-primary-100 transition-colors"
              >
                Improve Further →
              </button>
            </div>

            {/* Top Skills */}
            <div className="card p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center">
                    <Sparkle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-[13px] font-bold text-slate-900">Top Skills</p>
                </div>
                <button
                  onClick={() => navigate('/skills')}
                  className="text-[11px] font-bold text-primary hover:underline"
                >
                  View All
                </button>
              </div>
              <div className="space-y-2">
                {stats.topSkills.map((s, i) => <SkillBar key={i} name={s.name} percent={s.percent} />)}
              </div>
            </div>

            {/* Total Experience */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <p className="text-[13px] font-bold text-slate-900">Total Experience</p>
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{stats.experience.years}</p>
              <p className="text-[11px] text-slate-500 mt-1">Professional Experience</p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Role</p>
                <p className="text-[13px] font-bold text-slate-900 mt-1">{stats.experience.role}</p>
                <p className="text-[11px] text-slate-500">at {stats.experience.company}</p>
              </div>
            </div>

            {/* Profile Visibility */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Award className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <p className="text-[13px] font-bold text-slate-900">Profile Visibility</p>
              </div>
              <p className="text-2xl font-extrabold text-success-600">{stats.visibility}</p>
              <p className="text-[11px] text-slate-500 mt-1">You're visible to recruiters</p>
              <button
                onClick={() => navigate('/profile')}
                className="mt-3 px-3 py-2 bg-primary-50 text-primary text-xs font-bold rounded-lg hover:bg-primary-100 transition-colors w-full"
              >
                Improve Visibility →
              </button>
            </div>
          </div>

          {/* 3-column section */}
          <div className="grid lg:grid-cols-3 gap-5 mb-6">
            {/* AI Job Matches */}
            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-slate-900">AI Job Matches</h2>
                <button
                  onClick={() => navigate('/jobs')}
                  className="text-[11px] font-bold text-primary hover:underline flex items-center gap-0.5"
                >
                  View All Jobs <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="bg-success-50 border border-success-100 rounded-xl p-3 flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-success-500 fill-success-500" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900 leading-none">24</p>
                  <p className="text-[11px] font-bold text-success-600 mt-1">High Match Jobs</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Jobs that match your profile and preferences.</p>
                </div>
              </div>
              <div className="space-y-1">
                {aiJobs.map((j, i) => <JobMatchRow key={i} job={j} />)}
              </div>
              <button
                onClick={() => navigate('/jobs')}
                className="w-full mt-3 py-2 text-[11px] font-bold text-primary hover:bg-primary-50 rounded-lg transition-colors"
              >
                View All Matched Jobs →
              </button>
            </div>

            {/* Career Growth */}
            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-slate-900">Career Growth</h2>
                <button
                  onClick={() => navigate('/career-path')}
                  className="text-[11px] font-bold text-primary hover:underline flex items-center gap-0.5"
                >
                  View Roadmap <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center shrink-0">
                  <TargetIcon className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Next Target Role</p>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5">Senior Business Analyst</h3>
                  <p className="text-sm font-bold text-success-600 mt-2">80% Match</p>
                  <p className="text-[11px] text-slate-500">in 12–18 months</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Skills to Focus</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Advanced SQL', 'Data Visualization', 'Stakeholder Management'].map((s, i) => (
                    <span key={i} className="px-2 py-0.5 bg-secondary-50 text-secondary text-[10px] font-bold rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <button onClick={() => navigate('/career-path')} className="w-full mt-3 py-3 border border-secondary-200 bg-secondary-50/40 text-secondary text-[12px] font-bold rounded-xl hover:bg-secondary-50 transition-colors flex items-center justify-between px-4">
                <span>Your Career Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[10px] text-slate-500 text-center mt-1.5">See your personalized 3-step roadmap</p>
            </div>

            {/* Skill Gap Analysis */}
            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-slate-900">Skill Gap Analysis</h2>
                <button
                  onClick={() => navigate('/skills')}
                  className="text-[11px] font-bold text-primary hover:underline flex items-center gap-0.5"
                >
                  View Full Report <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <SettingsIcon className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900 leading-none">8</p>
                  <p className="text-[11px] font-bold text-primary mt-1">Skills to Improve</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Focus on these skills to grow faster.</p>
                </div>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Top Skill Gaps</p>
              <div className="space-y-2.5 mb-4">
                {skillGaps.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                      <span className="font-semibold text-slate-700">{s.name}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      s.impact === 'High' ? 'bg-success-50 text-success-600' : 'bg-primary-50 text-primary'
                    }`}>
                      {s.impact} Impact
                    </span>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/ai-coach')} className="w-full py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-1.5">
                Start Learning <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Recommended Learning row + AI Coach widget */}
          <div className="grid lg:grid-cols-4 gap-5">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-slate-900">Recommended Learning for You</h2>
                <button
                  onClick={() => navigate('/ai-coach')}
                  className="text-[11px] font-bold text-primary hover:underline flex items-center gap-0.5"
                >
                  View All Courses <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {courses.map((c, i) => <CourseCard key={i} course={c} />)}
              </div>
            </div>

            {/* AI Career Coach widget */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">AI Career Coach</p>
                  <p className="text-[10px] text-slate-500">Ask me anything about your career</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {['What are the best roles for my profile?', 'How can I grow to the next level?', 'What skills should I learn next?'].map((q, i) => (
                  <div key={i} className="px-3 py-2 bg-slate-50 rounded-lg text-[11px] text-slate-600 font-medium">
                    {q}
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/ai-coach')} className="w-full py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" /> Start Chatting <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const TargetIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default Dashboard;
