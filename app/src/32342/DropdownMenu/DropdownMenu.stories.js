import React from 'react';
import DropdownMenu from './DropdownMenu';

export default {
  title: 'Navigation/DropdownMenu',
  component: DropdownMenu,
};

const Template = (args) => <DropdownMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Home', 'About', 'Services', 'Contact'],
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: ['Home', 'About', 'Services', 'Contact'],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: ['Home', 'About', 'Services', 'Contact'],
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Home', 'About', 'Services', 'Contact'],
};

export const Active = Template.bind({});
Active.args = {
  items: ['Home', 'About', 'Services', 'Contact'],
};