import React from 'react';
import FloatingActionButton from './FloatingActionButton';

export default {
  title: 'Miscellaneous/FloatingActionButton',
  component: FloatingActionButton,
};

const Template = (args) => <FloatingActionButton {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
  icon: <span>+</span>,
  expandedIcon: <span>-</span>,
};

export const Expanded = Template.bind({});
Expanded.args = {
  icon: <span>+</span>,
  expandedIcon: <span>-</span>,
};

export const Hover = Template.bind({});
Hover.args = {
  icon: <span>+</span>,
  expandedIcon: <span>-</span>,
};