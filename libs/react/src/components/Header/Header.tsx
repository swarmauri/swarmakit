import React from 'react';

interface HeaderProps {
  state: 'visible' | 'hidden' | 'sticky' | 'collapsed' | 'expanded';
  title: string;
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ state, title, navItems }) => {
  if (state === 'hidden') {
    return null;
  }

  return (
    <header className={`header ${state}`} role="banner">
      <div className="header-title">{title}</div>
      {state !== 'collapsed' && (
        <nav className="header-nav" aria-label="Main Navigation">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;