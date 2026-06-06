import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import { LayoutProvider } from './context/LayoutContext';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import WelcomePage from './pages/WelcomePage';
import CareerPathPage from './pages/CareerPathPage';
import AICoachPage from './pages/AICoachPage';
import AIJobMatchPage from './pages/AIJobMatchPage';
import OnboardingPage from './pages/OnboardingPage';
import ResumeGatePage from './pages/ResumeGatePage';
import FindJobsCreditsPage from './pages/FindJobsCreditsPage';
import SavedJobsPage from './pages/SavedJobsPage';
import './index.css';

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-page">
    <div className="card p-8 text-center max-w-md">
      <h1 className="text-2xl font-extrabold text-slate-900 mb-2">{title}</h1>
      <p className="text-sm text-slate-500">This page is coming soon.</p>
    </div>
  </div>
);

const ProtectedRoute = ({ children, requireResume = false, blockIfResume = false }) => {
  const { isLoggedIn, resumeUploaded } = useAppContext();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (requireResume && !resumeUploaded) return <Navigate to="/career-growth/setup" replace />;
  if (blockIfResume && resumeUploaded) return <Navigate to="/career-path" replace />;
  return children;
};

const RootRedirect = () => <LandingPage />;

const App = () => {
  return (
    <AppProvider>
      <LayoutProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<RootRedirect />} />

          {/* Auth routes */}
          <Route path="/signup" element={<SignupPage mode="signup" />} />
          <Route path="/login" element={<SignupPage mode="login" />} />

          {/* Post-login routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/welcome"
            element={
              <ProtectedRoute>
                <WelcomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <AIJobMatchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/career-path"
            element={
              <ProtectedRoute>
                <CareerPathPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ai-coach"
            element={
              <ProtectedRoute>
                <AICoachPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/career-growth/onboarding"
            element={
              <ProtectedRoute>
                <OnboardingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/career-growth/setup"
            element={
              <ProtectedRoute blockIfResume>
                <ResumeGatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/find-jobs"
            element={
              <ProtectedRoute>
                <FindJobsCreditsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-jobs"
            element={
              <ProtectedRoute>
                <SavedJobsPage />
              </ProtectedRoute>
            }
          />

          {/* Other sidebar links - placeholder pages so nav doesn't 404 */}
          <Route path="/interview-prep" element={<ProtectedRoute><PlaceholderPage title="Interview Prep" /></ProtectedRoute>} />
          <Route path="/skills" element={<ProtectedRoute><PlaceholderPage title="Skill Gap Analyzer" /></ProtectedRoute>} />
          <Route path="/salary" element={<ProtectedRoute><PlaceholderPage title="Salary Insights" /></ProtectedRoute>} />
          <Route path="/applications" element={<ProtectedRoute><PlaceholderPage title="Applications" /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><PlaceholderPage title="Profile" /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><PlaceholderPage title="Settings" /></ProtectedRoute>} />
          <Route path="/resume-review" element={<ProtectedRoute><PlaceholderPage title="Resume Review" /></ProtectedRoute>} />

          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LayoutProvider>
    </AppProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
