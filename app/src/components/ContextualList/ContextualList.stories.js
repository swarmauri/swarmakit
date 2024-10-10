import React from 'react';
import ContextualList from './Contextuallist';

export default {
  title: 'Lists/ContextualList',
  component: ContextualList,
};

const Template = (args) => <ContextualList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Option 1', 'Option 2', 'Option 3'],
  onAction: (item) => console.log(`Action triggered on ${item}`),
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  items: ['Option 1', 'Option 2', 'Option 3'],
  onAction: (item) => console.log(`Action triggered on ${item}`),
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  items: [],
  onAction: (item) => console.log(`Action triggered on ${item}`),
};