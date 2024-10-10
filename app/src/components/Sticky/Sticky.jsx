import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Sticky.css';

const Sticky = ({ content }) => {
  const [isSticky, setSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky ${isSticky ? 'scrolled' : ''} ${expanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={toggleExpand} className="expand-button">
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      <div className="sticky-content">{content}</div>
    </div>
  );
};

Sticky.propTypes = {
  content: PropTypes.node.isRequired,
};

export default Sticky;