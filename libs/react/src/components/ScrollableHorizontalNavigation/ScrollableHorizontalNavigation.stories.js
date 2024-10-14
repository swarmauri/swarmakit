import React from 'react';
import ScrollableHorizontalNavigation from './ScrollableHorizontalNavigation';

export default {
  title: 'Navigation/ScrollableHorizontalNavigation',
  component: ScrollableHorizontalNavigation,
};

const Template = (args) => <ScrollableHorizontalNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio'],
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  items: ['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio'],
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio'],
};

export const Active = Template.bind({});
Active.args = {
  items: ['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio'],
};