import React, { useState } from 'react';
import './FieldEditableDataTable.css';

interface TableColumn {
  key: string;
  label: string;
  multiline?: boolean;
}

interface TableRow {
  id: number;
  [key: string]: any;
}

interface FieldEditableDataTableProps {
  columns: TableColumn[];
  data: TableRow[];
  onSave: (id: number, key: string, value: any) => Promise<void>;
}

const FieldEditableDataTable: React.FC<FieldEditableDataTableProps> = ({ columns, data, onSave }) => {
  const [editingCell, setEditingCell] = useState<{ id: number; key: string } | null>(null);
  const [tempValue, setTempValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleCellClick = (id: number, key: string, value: any) => {
    setEditingCell({ id, key });
    setTempValue(value);
  };

  const handleSave = async () => {
    if (editingCell) {
      try {
        await onSave(editingCell.id, editingCell.key, tempValue);
        setEditingCell(null);
        setError(null);
      } catch {
        setError('Failed to save changes.');
      }
    }
  };

  const handleCancel = () => {
    setEditingCell(null);
    setError(null);
  };

  return (
    <table className="field-editable-data-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key} onClick={() => handleCellClick(row.id, column.key, row[column.key])}>
                {editingCell?.id === row.id && editingCell.key === column.key ? (
                  column.multiline ? (
                    <textarea
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      aria-label={`Edit ${column.label}`}
                    />
                  ) : (
                    <input
                      type="text"
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      aria-label={`Edit ${column.label}`}
                    />
                  )
                ) : (
                  row[column.key]
                )}
                {editingCell?.id === row.id && editingCell.key === column.key && (
                  <div className="edit-controls">
                    <button onClick={handleSave} aria-label="Save changes">Save</button>
                    <button onClick={handleCancel} aria-label="Discard changes">Cancel</button>
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {error && <tfoot><tr><td colSpan={columns.length} className="error-message">{error}</td></tr></tfoot>}
    </table>
  );
};

export default FieldEditableDataTable;