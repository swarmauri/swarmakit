import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContextualNavigation.css';

const ContextualNavigation = ({ items }) => {
  const [isContextVisible, setContextVisible] = useState(false);

  const toggleContext = () => {
    setContextVisible(!isContextVisible);
  };

  return (
    <div className="contextual-navigation">
      <button className="context-trigger" onClick={toggleContext}>
        Toggle Context
      </button>
      {isContextVisible && (
        <ul className="context-menu">
          {items.map((item, index) => (
            <li key={index} className="context-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContextualNavigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContextualNavigation;