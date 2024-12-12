import React, { useState } from 'react';
import './TextTool.css';

interface TextToolProps {
  active: boolean;
  onAddText: (text: string, options: TextOptions) => void;
}

interface TextOptions {
  fontStyle: string;
  fontSize: number;
  color: string;
  alignment: 'left' | 'center' | 'right';
}

const TextTool: React.FC<TextToolProps> = ({ active, onAddText }) => {
  const [text, setText] = useState<string>('');
  const [fontStyle, setFontStyle] = useState<string>('Arial');
  const [fontSize, setFontSize] = useState<number>(16);
  const [color, setColor] = useState<string>('#000000');
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('left');

  const handleAddText = () => {
    if (active && text) {
      onAddText(text, { fontStyle, fontSize, color, alignment });
    }
  };

  return (
    <div className={`text-tool ${active ? 'active' : ''}`}>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text here" 
        aria-label="Text input"
      />
      <select 
        value={fontStyle} 
        onChange={(e) => setFontStyle(e.target.value)} 
        aria-label="Font style"
      >
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </select>
      <input 
        type="number" 
        value={fontSize} 
        onChange={(e) => setFontSize(Number(e.target.value))} 
        min="10" 
        max="100" 
        aria-label="Font size"
      />
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
        aria-label="Font color"
      />
      <select 
        value={alignment} 
        onChange={(e) => setAlignment(e.target.value as 'left' | 'center' | 'right')} 
        aria-label="Text alignment"
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
      <button onClick={handleAddText} disabled={!active || !text} aria-label="Add text to canvas">
        Add Text
      </button>
    </div>
  );
};

export default TextTool;