import React, { useState } from 'react';
import './DataImportDialog.css';

interface DataImportDialogProps {
  onImport: (file: File) => Promise<void>;
  onClose: () => void;
}

const DataImportDialog: React.FC<DataImportDialogProps> = ({ onImport, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (file) {
      setImporting(true);
      setMessage(null);
      try {
        await onImport(file);
        setMessage('Import successful!');
      } catch (error) {
        setMessage('Import failed. Please check your file and try again.');
      } finally {
        setImporting(false);
      }
    }
  };

  return (
    <div className="data-import-dialog" role="dialog" aria-labelledby="import-dialog-title">
      <div className="dialog-header">
        <h2 id="import-dialog-title">Import Data</h2>
        <button className="close-button" onClick={onClose} aria-label="Close dialog">×</button>
      </div>
      <div className="dialog-body">
        <input type="file" accept=".csv, .xlsx" onChange={handleFileChange} aria-label="Select a file to import" />
        {importing && <div className="progress-indicator">Importing...</div>}
        {message && <div className="import-message">{message}</div>}
      </div>
      <div className="dialog-footer">
        <button onClick={handleImport} disabled={importing || !file} aria-label="Start import">Import</button>
        <button onClick={onClose} aria-label="Cancel import">Cancel</button>
      </div>
    </div>
  );
};

export default DataImportDialog;