import React from 'react';
import './UndoRedoButtons.css';

interface UndoRedoButtonsProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
}

const UndoRedoButtons: React.FC<UndoRedoButtonsProps> = ({ canUndo, canRedo, onUndo, onRedo }) => {
  return (
    <div className="undo-redo-buttons">
      <button 
        onClick={onUndo} 
        disabled={!canUndo} 
        aria-label="Undo" 
        className={`undo-button ${canUndo ? 'enabled' : 'disabled'}`}
      >
        Undo
      </button>
      <button 
        onClick={onRedo} 
        disabled={!canRedo} 
        aria-label="Redo" 
        className={`redo-button ${canRedo ? 'enabled' : 'disabled'}`}
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedoButtons;