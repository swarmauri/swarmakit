import React, { useState, useEffect } from 'react';

interface StickyProps {
  content: React.ReactNode;
}

const Sticky: React.FC<StickyProps> = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header
      className={`sticky-header ${isScrolled ? 'scrolled' : ''} ${isExpanded ? 'expanded' : 'collapsed'}`}
      aria-expanded={isExpanded}
    >
      <button onClick={toggleExpand} className="toggle-button" aria-label="Toggle Sticky">
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <div className="sticky-content">
        {content}
      </div>
    </header>
  );
};

export default Sticky;