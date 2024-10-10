import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${(props) => (props.isDragging ? '#f0f0f0' : '#fff')};
  border: 1px solid #ddd;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'move')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Sortablelist = ({ items, onSort, disabled }) => {
  const moveItem = (dragIndex, hoverIndex) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    onSort(updatedItems);
  };

  return (
    <List>
      {items.map((item, index) => (
        <DraggableListItem
          key={item.id}
          index={index}
          item={item}
          moveItem={moveItem}
          isDisabled={disabled}
        />
      ))}
    </List>
  );
};

const DraggableListItem = ({ item, index, moveItem, isDisabled }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: 'listItem',
    hover: (draggedItem) => {
      if (!ref.current || draggedItem.index === index || isDisabled) return;
      moveItem(draggedItem.index, index);
      draggedItem.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'listItem',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <ListItem ref={ref} isDragging={isDragging} disabled={isDisabled}>
      {item.content}
    </ListItem>
  );
};

Sortablelist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSort: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Sortablelist.defaultProps = {
  disabled: false,
};

export default Sortablelist;