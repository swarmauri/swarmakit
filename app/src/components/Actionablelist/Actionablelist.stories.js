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
    { label: 'Item 1', disabled: false, loading: false },
    { label: 'Item 2', disabled: false, loading: false },
    { label: 'Item 3', disabled: false, loading: false },
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
  items: [
    { label: 'Item 1', disabled: false, loading: true },
    { label: 'Item 2', disabled: false, loading: false },
    { label: 'Item 3', disabled: false, loading: false },
  ],
  onAction: (item) => alert(`Action triggered for ${item.label}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Item 1', disabled: true, loading: false },
    { label: 'Item 2', disabled: false, loading: false },
    { label: 'Item 3', disabled: false, loading: false },
  ],
  onAction: (item) => alert(`Action triggered for ${item.label}`),
};

export const Loading = Template.bind({});
Loading.args = {
  items: [
    { label: 'Item 1', disabled: false, loading: true },
    { label: 'Item 2', disabled: false, loading: false },
    { label: 'Item 3', disabled: false, loading: false },
  ],
  onAction: (item) => alert(`Action triggered for ${item.label}`),
};