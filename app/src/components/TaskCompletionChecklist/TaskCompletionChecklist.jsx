import React from 'react';
import PropTypes from 'prop-types';
import './TaskCompletionChecklist.css';

const TaskCompletionChecklist = ({ tasks }) => {
  return (
    <ul className="checklist">
      {tasks.map((task, index) => (
        <li key={index} className={`task ${task.status}`}>
          <input type="checkbox" checked={task.status === 'checked'} readOnly />
          <span>{task.label}</span>
        </li>
      ))}
    </ul>
  );
};

TaskCompletionChecklist.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['checked', 'unchecked', 'partiallyComplete']),
    })
  ).isRequired,
};

TaskCompletionChecklist.defaultProps = {
  tasks: [],
};

export default TaskCompletionChecklist;