import React, { useState } from 'react';
import './ImageChoicePoll.css';

interface ImageOption {
  id: number;
  src: string;
  alt: string;
}

interface ImageChoicePollProps {
  question: string;
  options: ImageOption[];
  disabled: boolean;
  showResults: boolean;
  onChoiceChange: (selectedId: number | null) => void;
}

const ImageChoicePoll: React.FC<ImageChoicePollProps> = ({ question, options, disabled, showResults, onChoiceChange }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleChoice = (id: number) => {
    if (!disabled) {
      setSelectedId(id);
      onChoiceChange(id);
    }
  };

  return (
    <div className="image-choice-poll">
      <h2 className="poll-question">{question}</h2>
      <div className="options-container">
        {options.map(option => (
          <button
            key={option.id}
            className={`image-option ${selectedId === option.id ? 'selected' : ''}`}
            onClick={() => handleChoice(option.id)}
            disabled={disabled}
            aria-disabled={disabled}
            aria-pressed={selectedId === option.id}
          >
            <img src={option.src} alt={option.alt} className="option-image" />
          </button>
        ))}
      </div>
      {showResults && selectedId !== null && (
        <div className="results">You selected image #{selectedId}</div>
      )}
    </div>
  );
};

export default ImageChoicePoll;