import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'white')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const ListItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: white;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Scrollablelist = ({ items, disabled }) => {
  return (
    <ScrollContainer disabled={disabled}>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ScrollContainer>
  );
};

Scrollablelist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
};

Scrollablelist.defaultProps = {
  disabled: false,
};

export default Scrollablelist;