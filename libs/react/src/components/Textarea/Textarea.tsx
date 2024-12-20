import React from 'react';

interface TextareaProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ disabled = false, placeholder = '', value = '', onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <textarea
      className="custom-textarea"
      disabled={disabled}
      aria-disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Textarea;