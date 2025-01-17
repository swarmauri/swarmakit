import React, { useState } from 'react';
import './DataExportButton.css';

interface DataExportButtonProps {
  hasData: boolean;
  onExport: (format: 'csv' | 'excel' | 'pdf') => Promise<void>;
  disabled?: boolean;
}

const DataExportButton: React.FC<DataExportButtonProps> = ({ hasData, onExport, disabled }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (format: 'csv' | 'excel' | 'pdf') => {
    if (isExporting || !hasData || disabled) return;
    setIsExporting(true);
    try {
      await onExport(format);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="data-export-button">
      {['csv', 'excel', 'pdf'].map((format) => (
        <button
          key={format}
          onClick={() => handleExport(format as 'csv' | 'excel' | 'pdf')}
          disabled={isExporting || !hasData || disabled}
        >
          {isExporting ? 'Exporting...' : `Export as ${format.toUpperCase()}`}
        </button>
      ))}
    </div>
  );
};

export default DataExportButton;