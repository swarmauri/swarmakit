import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Contextuallist.css';

const ContextualList = ({ items, onAction }) => {
  const [dismissed, setDismissed] = useState(false);

  const handleAction = (item) => {
    onAction(item);
    setDismissed(true);
  };

  return (
    <ul className={`contextual-list ${dismissed ? 'dismissed' : ''}`}>
      {items.map((item, index) => (
        <li key={index} className="list-item">
          <span>{item.label}</span>
          <button onClick={() => handleAction(item)} className="action-button">
            {item.actionLabel}
          </button>
        </li>
      ))}
    </ul>
  );
};

ContextualList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      actionLabel: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAction: PropTypes.func.isRequired,
};

export default ContextualList;