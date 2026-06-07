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
            <GoogleIcon />
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

const GoogleIcon = () => (
  <svg
    className="w-5 h-5 shrink-0"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 4 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

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
