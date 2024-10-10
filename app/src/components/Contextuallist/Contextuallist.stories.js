import React from 'react';
import ContextualList from './Contextuallist';

export default {
  title: 'Lists/ContextualList',
  component: ContextualList,
};

const Template = (args) => <ContextualList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Action 1', 'Action 2', 'Action 3'],
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  items: ['Action 1', 'Action 2', 'Action 3'],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  items: ['Action 1', 'Action 2', 'Action 3'],
};