import React from 'react';
import ActionableList from './ActionableList';

export default {
  title: 'Lists/ActionableList',
  component: ActionableList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ActionableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Item 1', disabled: false },
    { label: 'Item 2', disabled: false },
  ],
  onActionClick: (item) => alert(`Action triggered for ${item.label}`),
  isLoading: false,
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
ActionTriggered.play = ({ args }) => {
  args.onActionClick(args.items[0]);
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Item 1', disabled: true },
    { label: 'Item 2', disabled: true },
  ],
  onActionClick: (item) => alert(`Action triggered for ${item.label}`),
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};