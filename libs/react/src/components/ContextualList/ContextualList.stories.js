import React from 'react';
import ContextualList from './ContextualList';

export default {
  title: 'Lists/ContextualList',
  component: ContextualList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ContextualList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  initialActionIndex: 1,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  initialDismissedIndexes: [0],
};