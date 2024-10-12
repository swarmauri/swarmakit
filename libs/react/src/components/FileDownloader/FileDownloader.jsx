// FileDownloader.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './FileDownloader.css';

const FileDownloader = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="file-downloader">
      <button onClick={handleDownload} className="download-button">
        Download {fileName}
      </button>
    </div>
  );
};

FileDownloader.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
};

export default FileDownloader;