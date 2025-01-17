import React, { useState } from 'react';

interface MessageInputBoxProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const MessageInputBox: React.FC<MessageInputBoxProps> = ({ placeholder = 'Type a message...', onChange }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      className={`message-input-box ${value ? 'typing' : 'empty'}`}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      aria-label="Message input"
    />
  );
};

export default MessageInputBox;