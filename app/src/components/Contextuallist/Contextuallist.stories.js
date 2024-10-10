import React from 'react';
import ContextualList from './Contextuallist';

export default {
  title: 'Lists/ContextualList',
  component: ContextualList,
};

const Template = (args) => <ContextualList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Item 1', actionLabel: 'Action 1' },
    { label: 'Item 2', actionLabel: 'Action 2' },
    { label: 'Item 3', actionLabel: 'Action 3' },
  ],
  onAction: (item) => alert(`Action triggered on ${item.label}`),
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  ...Default.args,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  ...Default.args,
  onAction: (item) => {
    alert(`Action triggered on ${item.label}`);
  },
};