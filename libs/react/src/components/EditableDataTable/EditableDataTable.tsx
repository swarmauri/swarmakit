import React, { useState } from 'react';
import './EditableDataTable.css';

interface Column {
  key: string;
  header: string;
  inputType: 'text' | 'textarea';
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface EditableDataTableProps {
  data: Record<string, any>[];
  columns: Column[];
  onRowSave: (rowIndex: number, updatedRow: Record<string, any>) => void;
  onRowDelete: (rowIndex: number) => void;
  onAddRow: () => void;
}

const EditableDataTable: React.FC<EditableDataTableProps> = ({ data, columns, onRowSave, onRowDelete, onAddRow }) => {
  const [editingRowIndex, setEditingRowIndex] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<Record<string, any> | null>(null);

  const handleEditClick = (index: number) => {
    setEditingRowIndex(index);
    setEditedData({ ...data[index] });
  };

  const handleSaveClick = (index: number) => {
    if (editedData) {
      onRowSave(index, editedData);
      setEditingRowIndex(null);
    }
  };

  const handleCancelClick = () => {
    setEditingRowIndex(null);
    setEditedData(null);
  };

  const handleInputChange = (key: string, value: string) => {
    if (editedData) {
      setEditedData({
        ...editedData,
        [key]: value,
      });
    }
  };

  return (
    <div className="editable-data-table">
      <button onClick={onAddRow} className="add-row-button">Add Row</button>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} style={{ width: column.width, textAlign: column.align }}>
                {column.header}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={editingRowIndex === index ? 'editing' : ''}>
              {columns.map((column) => (
                <td key={column.key} style={{ textAlign: column.align }}>
                  {editingRowIndex === index ? (
                    column.inputType === 'text' ? (
                      <input
                        type="text"
                        value={editedData ? editedData[column.key] : row[column.key]}
                        onChange={(e) => handleInputChange(column.key, e.target.value)}
                      />
                    ) : (
                      <textarea
                        value={editedData ? editedData[column.key] : row[column.key]}
                        onChange={(e) => handleInputChange(column.key, e.target.value)}
                      />
                    )
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
              <td className="row-actions">
                {editingRowIndex === index ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                    <button onClick={() => onRowDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableDataTable;