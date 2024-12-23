import React, { useState } from 'react';
import './OpenEndedPoll.css';

interface OpenEndedPollProps {
  question: string;
  resultsVisible: boolean;
  disabled: boolean;
  onSubmit: (response: string) => void;
}

const OpenEndedPoll: React.FC<OpenEndedPollProps> = ({ question, resultsVisible, disabled, onSubmit }) => {
  const [response, setResponse] = useState<string>('');

  const handleSubmit = () => {
    if (response.trim() && !disabled) {
      onSubmit(response);
      setResponse('');
    }
  };

  return (
    <div className="open-ended-poll">
      <h2 className="poll-question">{question}</h2>
      <textarea
        className="response-input"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        disabled={disabled || resultsVisible}
        aria-disabled={disabled || resultsVisible}
        aria-label="Open-ended response input"
      />
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={disabled || resultsVisible}
        aria-disabled={disabled || resultsVisible}
      >
        Submit
      </button>
    </div>
  );
};

export default OpenEndedPoll;