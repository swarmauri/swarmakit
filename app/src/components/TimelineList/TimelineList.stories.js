import React from 'react';
import TimelineList from './TimelineList';

export default {
  title: 'Lists/TimelineList',
  component: TimelineList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <TimelineList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, label: 'Step 1', isActive: false, isCompleted: false },
    { id: 2, label: 'Step 2', isActive: false, isCompleted: false },
    { id: 3, label: 'Step 3', isActive: false, isCompleted: false },
  ],
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { id: 1, label: 'Step 1', isActive: true, isCompleted: false },
    { id: 2, label: 'Step 2', isActive: false, isCompleted: false },
    { id: 3, label: 'Step 3', isActive: false, isCompleted: false },
  ],
};

export const Completed = Template.bind({});
Completed.args = {
  items: [
    { id: 1, label: 'Step 1', isActive: false, isCompleted: true },
    { id: 2, label: 'Step 2', isActive: false, isCompleted: true },
    { id: 3, label: 'Step 3', isActive: false, isCompleted: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, label: 'Step 1', isActive: false, isCompleted: false },
    { id: 2, label: 'Step 2', isActive: false, isCompleted: false },
    { id: 3, label: 'Step 3', isActive: false, isCompleted: false },
  ],
};

export const Inactive = Template.bind({});
Inactive.args = {
  items: [
    { id: 1, label: 'Step 1', isActive: false, isCompleted: false },
    { id: 2, label: 'Step 2', isActive: false, isCompleted: false },
    { id: 3, label: 'Step 3', isActive: false, isCompleted: false },
  ],
};