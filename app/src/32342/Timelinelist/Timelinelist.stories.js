import React from 'react';
import Timelinelist from './Timelinelist';

export default {
  title: 'Lists/Timelinelist',
  component: Timelinelist,
};

const Template = (args) => <Timelinelist {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: '1', content: 'Step 1', isActive: false, isCompleted: false },
    { id: '2', content: 'Step 2', isActive: true, isCompleted: false },
    { id: '3', content: 'Step 3', isActive: false, isCompleted: true },
  ],
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { id: '1', content: 'Step 1', isActive: true, isCompleted: false },
    { id: '2', content: 'Step 2', isActive: false, isCompleted: false },
    { id: '3', content: 'Step 3', isActive: false, isCompleted: false },
  ],
};

export const Completed = Template.bind({});
Completed.args = {
  items: [
    { id: '1', content: 'Step 1', isActive: false, isCompleted: true },
    { id: '2', content: 'Step 2', isActive: false, isCompleted: true },
    { id: '3', content: 'Step 3', isActive: false, isCompleted: true },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: '1', content: 'Step 1', isActive: false, isCompleted: false },
    { id: '2', content: 'Step 2', isActive: false, isCompleted: false },
    { id: '3', content: 'Step 3', isActive: false, isCompleted: false },
  ],
};

export const Inactive = Template.bind({});
Inactive.args = {
  items: [
    { id: '1', content: 'Step 1', isActive: false, isCompleted: false },
    { id: '2', content: 'Step 2', isActive: false, isCompleted: false },
    { id: '3', content: 'Step 3', isActive: false, isCompleted: false },
  ],
};