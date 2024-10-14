import React from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${({ isDragging }) => (isDragging ? '#e0f7fa' : '#f5f5f5')};
  border: 1px solid #ddd;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;

const SortableList = ({ items, onSort, disabled }) => {
  const moveItem = (dragIndex, hoverIndex) => {
    const updatedItems = [...items];
    const [removed] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, removed);
    onSort(updatedItems);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <DraggableListItem
          key={item.id}
          index={index}
          id={item.id}
          text={item.text}
          moveItem={moveItem}
          isDisabled={disabled}
        />
      ))}
    </ListContainer>
  );
};

const DraggableListItem = ({ id, text, index, moveItem, isDisabled }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: 'LIST_ITEM',
    hover(item) {
      if (!ref.current || isDisabled) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'LIST_ITEM',
    item: { type: 'LIST_ITEM', id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isDisabled,
  });

  drag(drop(ref));

  return (
    <ListItem ref={ref} isDragging={isDragging} isDisabled={isDisabled}>
      {text}
    </ListItem>
  );
};

SortableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSort: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

SortableList.defaultProps = {
  disabled: false,
};

export default SortableList;