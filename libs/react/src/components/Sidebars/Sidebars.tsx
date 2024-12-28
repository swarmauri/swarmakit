import React, { useState } from 'react';

interface SidebarProps {
  content: React.ReactNode;
}

const Sidebars: React.FC<SidebarProps> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}
      aria-expanded={isExpanded}
    >
      <button onClick={toggleSidebar} className="toggle-button" aria-label="Toggle Sidebar">
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <div className="sidebar-content">
        {content}
      </div>
    </aside>
  );
};

export default Sidebars;