import React, { useState, useRef, useEffect } from 'react';

interface ContextMenuProps {
  options: { label: string; onClick: () => void }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ options }) => {
  const [visible, setVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setVisible(true);
  };

  return (
    <div onContextMenu={handleContextMenu} role="button" aria-haspopup="true" aria-expanded={visible}>
      <div className={`context-menu ${visible ? 'visible' : ''}`} ref={menuRef}>
        <ul className="menu-options">
          {options.map((option, index) => (
            <li key={index} className="menu-option">
              <button onClick={option.onClick} className="option-button">
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContextMenu;