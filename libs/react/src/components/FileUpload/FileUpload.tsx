import React, { useState } from 'react';

interface FileUploadProps {
  multiple?: boolean;
  onFilesUploaded: (files: FileList) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ multiple = false, onFilesUploaded }) => {
  const [uploadProgress, setUploadProgress] = useState<number[]>([]);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setUploadProgress(new Array(files.length).fill(0));
      onFilesUploaded(files);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    if (files) {
      setUploadProgress(new Array(files.length).fill(0));
      onFilesUploaded(files);
    }
  };

  return (
    <div
      className={`file-upload ${dragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple={multiple}
        onChange={handleFilesChange}
        aria-label={multiple ? "Upload Multiple Files" : "Upload Single File"}
      />
      <div className="progress-bar">
        {uploadProgress.map((progress, index) => (
          <div key={index} className="progress" style={{ width: `${progress}%` }}></div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;