import React from 'react';
import PropTypes from 'prop-types';
import './Snackbar.css';

const Snackbar = ({ message, actionLabel, onAction, onClose, duration }) => {
  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className="snackbar">
      <span className="snackbar-message">{message}</span>
      {actionLabel && (
        <button className="snackbar-action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      <button className="snackbar-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

Snackbar.defaultProps = {
  actionLabel: '',
  onAction: () => {},
  duration: 5000, // Default duration of 5 seconds
};

export default Snackbar;