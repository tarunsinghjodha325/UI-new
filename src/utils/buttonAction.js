import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useButtonAction = () => {
  const navigate = useNavigate();

  return useCallback((action, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!action) return;
    if (typeof action === 'string') {
      navigate(action);
      return;
    }
    if (typeof action === 'function') {
      action(e);
    }
  }, [navigate]);
};

export const handleAction = (navigate, action, e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (!action) return;
  if (typeof action === 'string') {
    navigate(action);
    return;
  }
  if (typeof action === 'function') {
    action(e);
  }
};
