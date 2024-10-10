import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ListContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  background-color: ${props => (props.isDragging ? '#f4f7f9' : '#fff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItemText = styled.span`
  flex-grow: 1;
`;

const SortableList = ({ items, isDisabled }) => {
  const [listItems, setListItems] = useState(items);

  const onDragEnd = result => {
    if (!result.destination) return;
    const reorderedItems = Array.from(listItems);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setListItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" isDropDisabled={isDisabled}>
        {(provided) => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            {listItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={isDisabled}>
                {(provided, snapshot) => (
                  <ListItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                  >
                    <ListItemText>{item.content}</ListItemText>
                  </ListItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

SortableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDisabled: PropTypes.bool,
};

SortableList.defaultProps = {
  isDisabled: false,
};

export default SortableList;