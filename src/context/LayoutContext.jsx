import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const LayoutContext = createContext(null);
const STORAGE_KEY = 'careervibe_sidebar_collapsed';

export const LayoutProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) === 'true'; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, String(sidebarCollapsed)); } catch {}
  }, [sidebarCollapsed]);

  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-w', sidebarCollapsed ? '68px' : '220px');
  }, [sidebarCollapsed]);

  const open = useCallback(() => setMobileMenuOpen(true), []);
  const close = useCallback(() => setMobileMenuOpen(false), []);
  const toggle = useCallback(() => setMobileMenuOpen((v) => !v), []);
  const toggleSidebar = useCallback(() => setSidebarCollapsed((v) => !v), []);

  return (
    <LayoutContext.Provider value={{ mobileMenuOpen, sidebarCollapsed, open, close, toggle, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error('useLayout must be used within LayoutProvider');
  return ctx;
};
