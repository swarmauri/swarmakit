import React, { useState } from 'react';
import './EmojiReactionPoll.css';

interface EmojiReactionPollProps {
  question: string;
  emojis: string[];
  disabled: boolean;
  showResults: boolean;
  onReact: (emoji: string) => void;
}

const EmojiReactionPoll: React.FC<EmojiReactionPollProps> = ({ question, emojis, disabled, showResults, onReact }) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  const handleEmojiClick = (emoji: string) => {
    if (!disabled) {
      setSelectedEmoji(emoji);
      onReact(emoji);
    }
  };

  return (
    <div className="emoji-reaction-poll">
      <h2 className="poll-question">{question}</h2>
      <div className="emoji-container" role="radiogroup" aria-disabled={disabled}>
        {emojis.map((emoji, index) => (
          <span 
            key={index} 
            className={`emoji ${selectedEmoji === emoji ? 'selected' : ''} ${disabled ? 'disabled' : ''}`} 
            role="radio" 
            aria-checked={selectedEmoji === emoji}
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      {showResults && selectedEmoji && <div className="results">You selected: {selectedEmoji}</div>}
    </div>
  );
};

export default EmojiReactionPoll;