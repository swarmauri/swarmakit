import React from 'react';

interface TaskCompletionCheckListProps {
  items: { label: string; checked: boolean }[];
}

const TaskCompletionCheckList: React.FC<TaskCompletionCheckListProps> = ({ items }) => {
  return (
    <ul className="task-completion-checklist">
      {items.map((item, index) => (
        <li key={index} className={`checklist-item ${item.checked ? 'checked' : 'unchecked'}`} aria-checked={item.checked}>
          <input type="checkbox" checked={item.checked} readOnly />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default TaskCompletionCheckList;