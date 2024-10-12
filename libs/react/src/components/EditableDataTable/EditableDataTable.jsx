// EditableDataTable.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EditableDataTable.css';

const EditableDataTable = ({ columns, initialData }) => {
  const [data, setData] = useState(initialData);

  const handleEdit = (rowIndex, accessor, value) => {
    const updatedData = data.map((row, idx) =>
      idx === rowIndex ? { ...row, [accessor]: value } : row
    );
    setData(updatedData);
  };

  return (
    <table className="editable-data-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.accessor}>
                <input
                  type="text"
                  value={row[column.accessor]}
                  onChange={(e) => handleEdit(rowIndex, column.accessor, e.target.value)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

EditableDataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  initialData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EditableDataTable;