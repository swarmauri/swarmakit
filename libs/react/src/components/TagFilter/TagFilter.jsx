import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
  padding: 8px 12px;
  margin: 4px;
  background-color: ${(props) => (props.active ? '#74b9ff' : '#dfe6e9')};
  color: ${(props) => (props.active ? '#fff' : '#2d3436')};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const TagName = styled.span`
  margin-right: 8px;
`;

const RemoveButton = styled.span`
  font-size: 12px;
  color: #d63031;
  cursor: pointer;
`;

const TagFilter = ({ tag, active, onAdd, onRemove }) => {
  return (
    <TagWrapper active={active} onClick={() => (active ? onRemove(tag) : onAdd(tag))}>
      <TagName>{tag.name}</TagName>
      {active && <RemoveButton onClick={(e) => { e.stopPropagation(); onRemove(tag); }}>x</RemoveButton>}
    </TagWrapper>
  );
};

TagFilter.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

TagFilter.defaultProps = {
  active: false,
};

export default TagFilter;