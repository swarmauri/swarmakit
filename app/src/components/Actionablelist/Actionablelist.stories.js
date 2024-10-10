import React from 'react';
import ActionableList from './ActionableList';

export default {
  title: 'Lists/ActionableList',
  component: ActionableList,
};

const Template = (args) => <ActionableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Action Item 1' },
    { label: 'Action Item 2' },
    { label: 'Action Item 3' },
  ],
  onAction: (item) => alert(`Action triggered for ${item.label}`),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};
Hover.parameters = {
  pseudo: { hover: true },
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};