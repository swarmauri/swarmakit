// FileUploader.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FileUploader.css';

const FileUploader = ({ onFileSelect, accept }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="file-input"
      />
      {selectedFile && <p className="file-name">{selectedFile.name}</p>}
    </div>
  );
};

FileUploader.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
  accept: PropTypes.string,
};

FileUploader.defaultProps = {
  accept: '*/*',
};

export default FileUploader;