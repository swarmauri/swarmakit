import React from 'react';
import Timelinelist from './Timelinelist';

export default {
  title: 'Lists/Timelinelist',
  component: Timelinelist,
};

const Template = (args) => <Timelinelist {...args} />;

const timelineData = [
  { content: 'Step 1: Start', active: true, completed: false },
  { content: 'Step 2: In Progress', active: false, completed: false },
  { content: 'Step 3: Completed', active: false, completed: true },
];

export const Default = Template.bind({});
Default.args = {
  items: timelineData,
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { content: 'Step 1: Start', active: true, completed: false },
    { content: 'Step 2: In Progress', active: false, completed: false },
  ],
};

export const Completed = Template.bind({});
Completed.args = {
  items: [
    { content: 'Step 1: Start', active: false, completed: true },
    { content: 'Step 2: Completed', active: false, completed: true },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { content: 'Step 1: Start', active: false, completed: false },
  ],
};

export const Inactive = Template.bind({});
Inactive.args = {
  items: [
    { content: 'Step 1: Not Started', active: false, completed: false },
  ],
};