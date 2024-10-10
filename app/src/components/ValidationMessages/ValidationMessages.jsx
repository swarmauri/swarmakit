import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageContainer = styled.div`
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#4caf50';
      case 'error':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      default:
        return '#ccc';
    }
  }};
`;

const ValidationMessages = ({ type, message }) => {
  return <MessageContainer type={type}>{message}</MessageContainer>;
};

ValidationMessages.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']).isRequired,
  message: PropTypes.string.isRequired,
};

export default ValidationMessages;