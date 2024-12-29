import React from 'react';
import { Meta, Story } from '@storybook/react';
import TaskCompletionCheckList from './TaskCompletionCheckList';

export default {
  title: 'component/Indicators/TaskCompletionCheckList',
  component: TaskCompletionCheckList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TaskCompletionCheckListProps> = (args) => <TaskCompletionCheckList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Task 1', checked: false },
    { label: 'Task 2', checked: false },
    { label: 'Task 3', checked: false },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  items: [
    { label: 'Task 1', checked: true },
    { label: 'Task 2', checked: true },
    { label: 'Task 3', checked: true },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  items: [
    { label: 'Task 1', checked: false },
    { label: 'Task 2', checked: false },
    { label: 'Task 3', checked: false },
  ],
};

export const PartiallyComplete = Template.bind({});
PartiallyComplete.args = {
  items: [
    { label: 'Task 1', checked: true },
    { label: 'Task 2', checked: false },
    { label: 'Task 3', checked: true },
  ],
};