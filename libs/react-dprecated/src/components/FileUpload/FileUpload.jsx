import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FileUpload.css';

const FileUpload = ({ multiple, onFilesChange }) => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const fileList = Array.from(event.target.files);
    setFiles(fileList);
    onFilesChange(fileList);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const fileList = Array.from(event.dataTransfer.files);
    setFiles(fileList);
    onFilesChange(fileList);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        multiple={multiple}
        onChange={handleFileChange}
      />
      <div
        className="drag-drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drag & drop files here or click to select
      </div>
      {files.length > 0 && (
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              {file.name}
            </div>
          ))}
        </div>
      )}
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

FileUpload.propTypes = {
  multiple: PropTypes.bool,
  onFilesChange: PropTypes.func,
};

FileUpload.defaultProps = {
  multiple: false,
  onFilesChange: () => {},
};

export default FileUpload;