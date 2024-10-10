import React from 'react';
import TaskCompletionChecklist from './TaskCompletionChecklist';

export default {
  title: 'Indicators/TaskCompletionChecklist',
  component: TaskCompletionChecklist,
};

const Template = (args) => <TaskCompletionChecklist {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { label: 'Task 1', status: 'unchecked' },
    { label: 'Task 2', status: 'partially' },
    { label: 'Task 3', status: 'checked' },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  tasks: [
    { label: 'Task 1', status: 'checked' },
    { label: 'Task 2', status: 'checked' },
    { label: 'Task 3', status: 'checked' },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  tasks: [
    { label: 'Task 1', status: 'unchecked' },
    { label: 'Task 2', status: 'unchecked' },
    { label: 'Task 3', status: 'unchecked' },
  ],
};

export const PartiallyComplete = Template.bind({});
PartiallyComplete.args = {
  tasks: [
    { label: 'Task 1', status: 'partially' },
    { label: 'Task 2', status: 'unchecked' },
    { label: 'Task 3', status: 'checked' },
  ],
};