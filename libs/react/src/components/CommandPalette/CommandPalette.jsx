import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommandPalette.css';

const CommandPalette = ({ commands, isOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`command-palette ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <ul>
          {commands.map((command, index) => (
            <li
              key={command}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
            >
              {command}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CommandPalette.propTypes = {
  commands: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool,
};

CommandPalette.defaultProps = {
  isOpen: false,
};

export default CommandPalette;