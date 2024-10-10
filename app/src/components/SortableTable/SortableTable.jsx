import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SortableTable.css';

const SortableTable = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [filterText, setFilterText] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const filteredData = sortedData.filter(item =>
    columns.some(column => item[column.accessor].toString().toLowerCase().includes(filterText.toLowerCase()))
  );

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="sortable-table-container">
      <input
        type="text"
        placeholder="Filter..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="filter-input"
      />
      <table className="sortable-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} onClick={() => requestSort(column.accessor)}>
                {column.label}
                {sortConfig.key === column.accessor ? (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽') : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr
              key={index}
              className={selectedRow === index ? 'selected-row' : ''}
              onClick={() => setSelectedRow(selectedRow === index ? null : index)}
            >
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SortableTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SortableTable;