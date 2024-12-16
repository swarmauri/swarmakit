import React, { useState } from 'react';

interface SectionProps {
  state: 'visible' | 'hidden' | 'expanded' | 'collapsed';
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ state, title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(state === 'collapsed');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section
      className={`section ${state} ${isCollapsed ? 'collapsed' : 'expanded'}`}
      aria-hidden={state === 'hidden'}
    >
      <header onClick={toggleCollapse} aria-expanded={!isCollapsed}>
        <h2>{title}</h2>
      </header>
      <div className={`content ${isCollapsed ? 'hidden' : 'visible'}`}>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Section;