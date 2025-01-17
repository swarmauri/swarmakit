import React, { useEffect, useState } from 'react';
import './DataSummary.css';

interface DataSummaryProps {
  data: number[];
  calculateSummary: (data: number[]) => { total: number; average: number; count: number };
}

const DataSummary: React.FC<DataSummaryProps> = ({ data, calculateSummary }) => {
  const [summary, setSummary] = useState<{ total: number; average: number; count: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const result = calculateSummary(data);
      setSummary(result);
      setError(null);
    } catch (e) {
      setError('Unable to calculate summary');
      setSummary(null);
    }
  }, [data, calculateSummary]);

  return (
    <div className="data-summary">
      {error ? (
        <p className="error-message" role="alert">{error}</p>
      ) : summary ? (
        <div className="summary-details">
          <div>Total: {summary.total}</div>
          <div>Average: {summary.average}</div>
          <div>Count: {summary.count}</div>
        </div>
      ) : (
        <p>Calculating...</p>
      )}
    </div>
  );
};

export default DataSummary;