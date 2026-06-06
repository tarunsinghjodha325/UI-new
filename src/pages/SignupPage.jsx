import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Sparkles, User, Mail, Lock, Eye, EyeOff, ArrowRight, Star, Search, Compass, FileText, Sun, Moon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const SignupPage = ({ mode = 'signup' }) => {
  const [searchParams] = useSearchParams();
  const isUploadFlow = searchParams.get('upload') === 'true';
  const isLoginMode = mode === 'login';

  const navigate = useNavigate();
  const { login, toggleResume, resumeUploaded } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUploadFlow) {
      toggleResume(true);
      login(true);
      navigate('/dashboard');
    } else {
      toggleResume(false);
      login(false);
      navigate('/welcome');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — dark brown hero */}
      <div className="hidden lg:flex w-[45%] bg-hero relative overflow-hidden flex-col p-12 text-white">
        <div className="relative z-10 flex-1 flex flex-col">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Career<span className="text-primary">Vibe</span></span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full border border-white/15 mb-6 self-start">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[11px] font-bold">AI Career Growth Platform</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold mb-5 leading-[1.1]">
            Find the Right <span className="text-primary">Job.</span>
            <br />
            Build the Right <span className="text-primary">Career.</span>
          </h1>

          <p className="text-sm text-white/70 mb-10 leading-relaxed max-w-md">
            Upload your resume and let AI guide you with perfect job matches, career insights and growth opportunities — all in one place.
          </p>

          <div className="space-y-4 max-w-md">
            {[
              { icon: Search, color: 'text-primary', bg: 'bg-primary/20', title: 'AI Job Match', desc: 'Get highly relevant job matches from company career pages and trusted job portals.' },
              { icon: Compass, color: 'text-secondary-300', bg: 'bg-secondary/20', title: 'Career Growth Guidance', desc: 'Not sure what\'s next? Get personalized AI career advice and roadmap.' },
              { icon: FileText, color: 'text-success-500', bg: 'bg-success-500/15', title: 'Resume & LinkedIn Optimization', desc: 'Improve your resume and profile to stand out and get more interviews.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-white/[0.04] border border-white/10 rounded-xl p-4">
                <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-0.5 text-white">{item.title}</h4>
                  <p className="text-xs text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 pt-8 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-hero bg-slate-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/72?img=${i + 5}`} alt="User" />
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-xs text-white font-semibold mt-0.5">Trusted by 50,000+ professionals</p>
            <p className="text-[11px] text-white/60">to grow their careers with confidence.</p>
          </div>
        </div>

        {/* Decorative blurred orbs */}
        <div className="absolute top-[-15%] right-[-15%] w-[450px] h-[450px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[100px]" />
        {/* Subtle star sparkles */}
        <div className="absolute top-[40%] right-[10%] text-primary/40 text-3xl">✦</div>
        <div className="absolute top-[55%] right-[20%] text-primary/30 text-2xl">✦</div>
      </div>

      {/* Right Panel — form */}
      <div className="flex-1 bg-white p-8 lg:p-16 flex flex-col">
        <div className="flex justify-end mb-6">
          <button className="p-2.5 border border-border rounded-xl hover:bg-slate-50 transition-colors">
            <Sun className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
            {isLoginMode ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-sm text-slate-500 mb-8">
            {isLoginMode ? 'Continue your career journey.' : 'Start your journey to a better career.'}
          </p>

          <button type="button" className="w-full py-3 border border-border rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors mb-5 font-semibold text-slate-700 text-sm">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg" alt="Google" className="w-4 h-4" />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6 text-slate-400">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[10px] font-bold uppercase tracking-wider">OR</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginMode && (
              <FormField
                label="Full Name"
                icon={User}
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
            )}

            <FormField
              label="Email Address"
              icon={Mail}
              type="email"
              placeholder="name@company.com"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />

            <div className={isLoginMode ? '' : 'grid grid-cols-2 gap-3'}>
              <FormField
                label="Password"
                icon={Lock}
                type={showPassword ? 'text' : 'password'}
                placeholder="Min. 6 characters"
                value={form.password}
                onChange={(v) => setForm({ ...form, password: v })}
                rightSlot={
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-slate-600">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
              />

              {!isLoginMode && (
                <FormField
                  label="Confirm Password"
                  icon={Lock}
                  type="password"
                  placeholder="••••••••"
                  value={form.confirm}
                  onChange={(v) => setForm({ ...form, confirm: v })}
                />
              )}
            </div>

            {isLoginMode && (
              <div className="text-right -mt-1">
                <button type="button" className="text-xs font-bold text-primary hover:underline">
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary/15 flex items-center justify-center gap-2 mt-2"
            >
              {isLoginMode ? 'Sign In' : 'Get Started Free'} <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {!isLoginMode && (
            <p className="text-xs text-slate-400 text-center mt-5 flex items-center justify-center gap-1.5">
              <span className="text-base">🛡</span> No credit card required
            </p>
          )}

          <p className="text-sm text-slate-500 text-center mt-5">
            {isLoginMode ? (
              <>
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const FormField = ({ label, icon: Icon, type = 'text', placeholder, value, onChange, rightSlot }) => (
  <div>
    <label className="block text-[11px] font-bold text-slate-500 mb-1.5">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} ${rightSlot ? 'pr-10' : 'pr-4'} py-2.5 bg-slate-50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all`}
      />
      {rightSlot && <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{rightSlot}</div>}
    </div>
  </div>
);

export default SignupPage;
