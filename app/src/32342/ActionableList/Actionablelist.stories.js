import React from 'react';
import ActionableList from './ActionableList';

export default {
  title: 'Lists/ActionableList',
  component: ActionableList,
};

const Template = (args) => <ActionableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Task 1', 'Task 2', 'Task 3'],
  onAction: (item) => alert(`Action triggered on ${item}`),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};