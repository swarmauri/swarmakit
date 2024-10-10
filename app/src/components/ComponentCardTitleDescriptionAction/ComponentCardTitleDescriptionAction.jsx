import React from 'react';
import PropTypes from 'prop-types';
import './ComponentCardTitleDescriptionAction.css';

const ComponentCardTitleDescriptionAction = ({ title, description, actionLabel, onActionClick }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <button className="card-action" onClick={onActionClick}>
        {actionLabel}
      </button>
    </div>
  );
};

ComponentCardTitleDescriptionAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actionLabel: PropTypes.string.isRequired,
  onActionClick: PropTypes.func.isRequired,
};

export default ComponentCardTitleDescriptionAction;