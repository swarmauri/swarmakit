import React from 'react';
import ContextualNavigation from './ContextualNavigation';

export default {
  title: 'Navigation/ContextualNavigation',
  component: ContextualNavigation,
};

const Template = (args) => <ContextualNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Profile', 'Settings', 'Logout'],
};

export const ContextTriggered = Template.bind({});
ContextTriggered.args = {
  items: ['Profile', 'Settings', 'Logout'],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  items: ['Profile', 'Settings', 'Logout'],
};