import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SummaryWrapper = styled.div`
  border: 1px solid #dcdde1;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SummaryHeader = styled.h2`
  margin: 0 0 16px 0;
  font-size: 24px;
  color: #2d3436;
`;

const SummaryContent = styled.div`
  font-size: 16px;
  color: #636e72;
`;

const LoadingMessage = styled.div`
  font-size: 16px;
  color: #0984e3;
`;

const DataSummary = ({ title, content, loading }) => {
  return (
    <SummaryWrapper>
      <SummaryHeader>{title}</SummaryHeader>
      {loading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : content ? (
        <SummaryContent>{content}</SummaryContent>
      ) : (
        <SummaryContent>No data available.</SummaryContent>
      )}
    </SummaryWrapper>
  );
};

DataSummary.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  loading: PropTypes.bool,
};

DataSummary.defaultProps = {
  content: '',
  loading: false,
};

export default DataSummary;