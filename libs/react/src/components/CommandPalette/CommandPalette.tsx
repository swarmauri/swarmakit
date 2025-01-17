import React, { useState } from 'react';

interface CommandPaletteProps {
  commands: string[];
  onSelect: (command: string) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ commands, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (index: number) => {
    if (index >= 0 && index < commands.length) {
      onSelect(commands[index]);
      setActiveIndex(index);
      setIsOpen(false);
    }
  };

  return (
    <div className={`command-palette ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={handleToggle} aria-expanded={isOpen} aria-controls="command-list">
        {isOpen ? 'Close Palette' : 'Open Palette'}
      </button>
      <ul id="command-list" role="listbox" className="command-list">
        {isOpen &&
          commands.map((command, index) => (
            <li
              key={command}
              role="option"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleSelect(index)}
            >
              {command}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CommandPalette;