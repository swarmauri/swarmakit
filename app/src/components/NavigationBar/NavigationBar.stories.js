import React from 'react';
import NavigationBar from './NavigationBar';

export default {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
};

const Template = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};

export const Expanded = Template.bind({});
Expanded.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};

export const Hover = Template.bind({});
Hover.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};

export const Active = Template.bind({});
Active.args = {
  links: ['Home', 'About', 'Services', 'Contact'],
};