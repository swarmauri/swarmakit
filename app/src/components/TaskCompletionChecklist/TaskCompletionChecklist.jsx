import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChecklistItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ status }) => {
    switch (status) {
      case 'checked':
        return '#e0f7fa';
      case 'partially':
        return '#fff3e0';
      case 'unchecked':
        return '#fbe9e7';
      default:
        return '#ffffff';
    }
  }};
  transition: background-color 0.3s;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const TaskCompletionChecklist = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <ChecklistItem key={index} status={task.status}>
          <Checkbox type="checkbox" checked={task.status === 'checked'} readOnly />
          {task.label}
        </ChecklistItem>
      ))}
    </div>
  );
};

TaskCompletionChecklist.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['checked', 'unchecked', 'partially']).isRequired,
    })
  ).isRequired,
};

export default TaskCompletionChecklist;