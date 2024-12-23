import React, { useState } from 'react';

interface ActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  actions: { label: string; onClick: () => void }[];
}

const ActionSheet: React.FC<ActionSheetProps> = ({ isOpen, onClose, actions }) => {
  return (
    <div className={`action-sheet ${isOpen ? 'open' : 'closed'}`} role="dialog" aria-modal="true">
      <div className="action-sheet-backdrop" onClick={onClose}></div>
      <div className="action-sheet-content">
        <ul className="action-list">
          {actions.map((action, index) => (
            <li key={index} className="action-item">
              <button onClick={action.onClick} className="action-button">
                {action.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActionSheet;