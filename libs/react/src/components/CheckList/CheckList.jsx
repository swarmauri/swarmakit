import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Checkbox = styled.input`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const CheckList = ({ items, onToggle }) => {
  return (
    <ListWrapper>
      {items.map((item) => (
        <ListItem key={item.id} disabled={item.disabled}>
          <Checkbox
            type="checkbox"
            checked={item.checked}
            disabled={item.disabled}
            onChange={() => !item.disabled && onToggle(item.id)}
          />
          {item.label}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

CheckList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default CheckList;