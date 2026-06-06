import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import {
  Edit2, TrendingUp, ArrowRight, MapPin, Briefcase, DollarSign, BarChart3,
  Building2, Sparkles, CheckCircle2, ChevronRight, FileText, Target, Search, User,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const TargetIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MatchCircle = ({ score, size = 60 }) => {
  const r = (size - 6) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="transparent" stroke="#E5E7EB" strokeWidth="4" />
        <circle
          cx={size/2} cy={size/2} r={r}
          fill="transparent" stroke="#16A34A" strokeWidth="4"
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-base font-extrabold text-success-600 leading-none">{score}%</span>
      </div>
    </div>
  );
};

const SkillBar = ({ skill }) => {
  const percent = (skill.val / 5) * 100;
  return (
    <div>
      <div className="flex justify-between text-[11px] font-bold mb-1">
        <span className={skill.done ? 'text-success-600' : 'text-slate-700'}>{skill.name}</span>
        <span className="text-slate-400">{skill.val}/5</span>
      </div>
      <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${skill.done ? 'bg-success-500' : 'bg-primary'}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};

const CareerPathPage = () => {
  const navigate = useNavigate();
  const { targetRole, updateTargetRole, getTargetRoleData } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [tempRole, setTempRole] = useState(targetRole);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dataKey, setDataKey] = useState(0);

  useEffect(() => {
    setTempRole(targetRole);
  }, [targetRole]);

  const data = getTargetRoleData();

  const handleSave = () => {
    setIsAnalyzing(true);
    setIsEditing(false);
    setTimeout(() => {
      updateTargetRole(tempRole);
      setDataKey((k) => k + 1);
      setIsAnalyzing(false);
    }, 1500);
  };

  const roadmapSteps = [
    { role: data.current, status: 'current', match: 100 },
    { role: data.next, status: 'next', match: data.nextMatch },
    { role: data.future, status: 'future', match: data.futureMatch },
    { role: targetRole, status: 'target', match: data.targetMatch },
  ];

  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar variant="careerPath" />
      <main className="flex-1 lg:ml-[var(--sidebar-w,220px)] min-w-0 max-w-full overflow-x-hidden">
        <TopBar variant="creditOnly" />

        <div className="p-4 sm:p-6 max-w-[1500px] mx-auto">
          <div className="flex items-start justify-between mb-5 flex-wrap gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Career Path</h1>
              <p className="text-sm text-slate-500 mt-0.5">Explore personalized career transitions, skill gaps, and growth opportunities.</p>
            </div>
            <button
              onClick={() => navigate('/saved-jobs')}
              className="px-4 py-2 bg-white border border-border text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <BookmarkIcon className="w-3.5 h-3.5" /> Saved Paths
            </button>
          </div>

          {/* Target Role Card */}
          <div className="card p-5 mb-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                <TargetIcon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Target Role</p>
                {isEditing ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={tempRole}
                      onChange={(e) => setTempRole(e.target.value)}
                      className="flex-1 px-3 py-1.5 border border-primary rounded-lg text-base font-extrabold focus:outline-none focus:ring-2 focus:ring-primary/20"
                      autoFocus
                    />
                    <button onClick={handleSave} className="px-4 py-1.5 bg-primary text-white rounded-lg font-bold text-xs">Save</button>
                    <button onClick={() => { setIsEditing(false); setTempRole(targetRole); }} className="px-3 py-1.5 border border-border rounded-lg text-xs font-bold text-slate-600">Cancel</button>
                  </div>
                ) : (
                  <h2 className="text-lg font-extrabold text-slate-900">{targetRole}</h2>
                )}
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <span className="text-[11px] font-bold text-success-600">High Growth</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[11px] font-bold text-primary">In-Demand</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[11px] font-bold text-slate-500">Great Match</span>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:pl-5 lg:border-l border-border shrink-0">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Overall Match</p>
                  <p className="text-sm font-bold text-success-600">Strong Potential</p>
                  <p className="text-[10px] text-slate-500">You're well on your way!</p>
                </div>
                <MatchCircle score={data.overall} size={60} />
              </div>
              <button onClick={() => setIsEditing(true)} className="lg:ml-2 px-3 py-1.5 border border-border text-slate-600 text-[11px] font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1">
                <Edit2 className="w-3 h-3" /> Edit
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="h-64 flex flex-col items-center justify-center bg-white rounded-2xl border border-border"
              >
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
                <p className="font-bold text-slate-700">Re-analyzing career path matches...</p>
                <p className="text-xs text-slate-500 mt-1">This will just take a moment</p>
              </motion.div>
            ) : (
              <motion.div
                key={`data-${dataKey}`}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              >
                {/* Progression Flow */}
                <div className="card p-6 mb-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h2 className="text-base font-bold text-slate-900">Your Career Path Progression</h2>
                      <p className="text-[12px] text-slate-500 mt-0.5">See how you can grow from your current role to your target role.</p>
                    </div>
                  </div>

                  <div className="flex items-stretch gap-3 mb-5">
                    {roadmapSteps.map((step, i) => (
                      <React.Fragment key={`${dataKey}-${i}`}>
                        <div className={`flex-1 p-3 rounded-xl border-2 ${
                          step.status === 'current'
                            ? 'border-primary bg-primary-50/40'
                            : 'border-slate-100 bg-white'
                        }`}>
                          <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                            step.status === 'current' ? 'text-primary' : 'text-slate-400'
                          }`}>
                            {step.status === 'current' ? 'Current Role' :
                             step.status === 'next' ? 'Next Step' :
                             step.status === 'future' ? 'Future Step' : 'Target Role'}
                          </p>
                          <p className="text-[12px] font-extrabold text-slate-900 leading-tight mb-2">{step.role}</p>
                          {step.status === 'current' ? (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-primary">
                              <PinIcon className="w-3 h-3" /> You are here
                            </div>
                          ) : (
                            <div>
                              <p className="text-[10px] font-bold text-slate-500 mb-1">{step.match}% Match</p>
                              <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${step.match}%` }} />
                              </div>
                            </div>
                          )}
                        </div>
                        {i < roadmapSteps.length - 1 && (
                          <div className="flex items-center text-slate-300">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 font-bold">
                      <TrendingUp className="w-3.5 h-3.5 text-success-500" />
                      Average Time to Reach Target Role: <span className="text-primary">18–24 Months</span>
                    </div>
                    <button
                      onClick={() => navigate('/ai-coach')}
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      View Similar Journeys <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 3-column section + right role insights */}
                <div className="grid lg:grid-cols-4 gap-5 mb-5">
                  <div className="lg:col-span-3 grid md:grid-cols-3 gap-5">
                    {/* Skill Gap */}
                    <div className="card p-5">
                      <h3 className="text-sm font-bold text-slate-900 mb-1">Skill Gap Analysis</h3>
                      <p className="text-[10px] text-slate-500 mb-4">You have <span className="text-primary font-bold">11/15</span> key skills for this role.</p>
                      <div className="space-y-3.5">
                        {data.skills.map((s, i) => <SkillBar key={`${dataKey}-${i}`} skill={s} />)}
                      </div>
                      <button
                        onClick={() => navigate('/skills')}
                        className="w-full mt-5 py-2.5 border border-border text-slate-600 text-[11px] font-bold rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        View Full Skill Gap Report →
                      </button>
                    </div>

                    {/* Learning Roadmap */}
                    <div className="card p-5">
                      <h3 className="text-sm font-bold text-slate-900 mb-1">Recommended Learning Roadmap</h3>
                      <p className="text-[10px] text-slate-500 mb-4">Personalized courses to close your skill gaps.</p>
                      <div className="space-y-4">
                        {data.courses.map((c, i) => (
                          <div key={`${dataKey}-${i}`} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-extrabold shrink-0">
                              {c.id}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[12px] font-bold text-slate-900 leading-tight">{c.title}</p>
                              <p className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                                {c.platform} • <span className="text-yellow-500">★</span> {c.rating}
                              </p>
                              <span className={`inline-block mt-1.5 px-1.5 py-0.5 rounded text-[9px] font-bold ${
                                c.impact === 'High' ? 'bg-success-50 text-success-600' : 'bg-primary-50 text-primary'
                              }`}>
                                {c.impact} Impact
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => navigate('/ai-coach')}
                        className="w-full mt-5 py-2.5 border border-border text-slate-600 text-[11px] font-bold rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        View Full Roadmap →
                      </button>
                    </div>

                    {/* Next Best Actions */}
                    <div className="card p-5">
                      <h3 className="text-sm font-bold text-slate-900 mb-1">Next Best Actions</h3>
                      <p className="text-[10px] text-slate-500 mb-4">Take these steps to accelerate your journey.</p>
                      <div className="space-y-1">
                        {[
                          { icon: <FileText className="w-4 h-4" />, title: 'Optimize Your Resume', desc: 'Highlight relevant skills for target role' },
                          { icon: <BookIcon className="w-4 h-4" />, title: 'Build Relevant Skills', desc: 'Start 2 recommended courses' },
                          { icon: <Search className="w-4 h-4" />, title: 'Apply to Matching Jobs', desc: '12 new job matches found' },
                          { icon: <User className="w-4 h-4" />, title: 'Connect with Mentors', desc: 'Get guidance from industry experts' },
                        ].map((a, i) => (
                          <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                              {a.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[12px] font-bold text-slate-800">{a.title}</p>
                              <p className="text-[10px] text-slate-500 leading-tight">{a.desc}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary shrink-0 mt-1.5" />
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => navigate('/ai-coach')}
                        className="w-full mt-3 py-2.5 border border-border text-slate-600 text-[11px] font-bold rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        See All Actions →
                      </button>
                    </div>
                  </div>

                  {/* Role Insights */}
                  <div className="space-y-5">
                    <div className="card p-5">
                      <h3 className="text-sm font-bold text-slate-900 mb-4">Role Insights</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-success-50 rounded-lg flex items-center justify-center">
                              <DollarSign className="w-4 h-4 text-success-600" />
                            </div>
                            <span className="text-[12px] font-semibold text-slate-700">Average Salary</span>
                          </div>
                          <span className="text-xs font-extrabold text-slate-900">{data.insights.salary}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-success-50 rounded-lg flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-success-600" />
                            </div>
                            <span className="text-[12px] font-semibold text-slate-700">Demand</span>
                          </div>
                          <span className="text-xs font-extrabold text-success-600">{data.insights.demand}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                              <BarChart3 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-[12px] font-semibold text-slate-700">Job Growth</span>
                          </div>
                          <span className="text-xs font-extrabold text-primary">{data.insights.growth} <span className="text-slate-400 font-medium">(Next 5 years)</span></span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-blue-500" />
                            </div>
                            <span className="text-[12px] font-semibold text-slate-700">Top Locations</span>
                          </div>
                          <span className="text-xs font-extrabold text-slate-900 text-right max-w-[140px]">{data.insights.locations}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-secondary-50 rounded-lg flex items-center justify-center">
                              <Building2 className="w-4 h-4 text-secondary" />
                            </div>
                            <span className="text-[12px] font-semibold text-slate-700">Top Industries</span>
                          </div>
                          <span className="text-xs font-extrabold text-slate-900 text-right max-w-[140px]">{data.insights.industries}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate('/salary')}
                        className="w-full mt-5 py-2.5 border border-border text-slate-600 text-[11px] font-bold rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        View Full Market Insights →
                      </button>
                    </div>
                  </div>
                </div>

                {/* CTA banner */}
                <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900">Ready to accelerate your career?</h3>
                      <p className="text-[12px] text-slate-600">Get personalized coaching, interview prep, and insider insights.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/ai-coach')}
                    className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-600 transition-colors flex items-center gap-1.5"
                  >
                    Start AI Career Coaching <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

const BookmarkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
);
const PinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
);
const BookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export default CareerPathPage;
