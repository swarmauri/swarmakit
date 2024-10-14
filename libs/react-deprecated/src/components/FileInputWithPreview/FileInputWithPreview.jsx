import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FileInputWithPreview.css';

const FileInputWithPreview = ({ onFileChange, disabled, error }) => {
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && !disabled) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
        onFileChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`file-input-with-preview ${disabled ? 'disabled' : ''}`}>
      <input
        type="file"
        onChange={handleFileChange}
        disabled={disabled}
      />
      {filePreview && <img src={filePreview} alt="Preview" className="preview" />}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

FileInputWithPreview.propTypes = {
  onFileChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

FileInputWithPreview.defaultProps = {
  onFileChange: () => {},
  disabled: false,
  error: '',
};

export default FileInputWithPreview;