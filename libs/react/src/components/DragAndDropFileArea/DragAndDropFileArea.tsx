import React, { useState, DragEvent } from 'react';

interface DragAndDropFileAreaProps {
  disabled?: boolean;
  onFilesAdded: (files: FileList) => void;
}

const DragAndDropFileArea: React.FC<DragAndDropFileAreaProps> = ({ disabled = false, onFilesAdded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (disabled) return;

    const files = event.dataTransfer.files;
    if (validateFiles(files)) {
      onFilesAdded(files);
    } else {
      setError('Invalid file type');
    }
  };

  const validateFiles = (files: FileList): boolean => {
    // Add file type validation logic here
    return true;
  };

  return (
    <div
      className={`drag-and-drop-file-area ${isDragging ? 'dragging' : ''} ${disabled ? 'disabled' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      aria-disabled={disabled}
    >
      <input
        type="file"
        multiple
        disabled={disabled}
        onChange={(e) => onFilesAdded(e.target.files!)}
        aria-label="File Upload Input"
      />
      {error && <span className="error-message">{error}</span>}
      <span>Drag files here or click to upload</span>
    </div>
  );
};

export default DragAndDropFileArea;