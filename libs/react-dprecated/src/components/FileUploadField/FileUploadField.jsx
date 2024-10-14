import React from 'react';
import PropTypes from 'prop-types';
import './FileUploadField.css';

const FileUploadField = ({ onFileSelect, accept, multiple, disabled }) => {
  const handleFileChange = (event) => {
    onFileSelect(event.target.files);
  };

  return (
    <input
      type="file"
      className="file-upload-field"
      onChange={handleFileChange}
      accept={accept}
      multiple={multiple}
      disabled={disabled}
    />
  );
};

FileUploadField.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
};

FileUploadField.defaultProps = {
  accept: '',
  multiple: false,
  disabled: false,
};

export default FileUploadField;