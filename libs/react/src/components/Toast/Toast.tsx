import React, { useEffect } from 'react';
import './Toast.css';

interface ToastProps {
  state: 'visible' | 'hidden' | 'dismissed' | 'autoHide';
  message: string;
  duration?: number;
  onDismiss?: () => void;
}

const Toast: React.FC<ToastProps> = ({ state, message, duration = 3000, onDismiss }) => {
  useEffect(() => {
    if (state === 'autoHide' && onDismiss) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [state, duration, onDismiss]);

  return (
    <div className={`toast ${state}`} role="alert" aria-live="assertive">
      {message}
    </div>
  );
};

export default Toast;