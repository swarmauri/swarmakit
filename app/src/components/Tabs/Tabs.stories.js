import React from 'react';
import Tabs from './Tabs';

export default {
  title: 'Lists/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

const tabsData = [
  { id: '1', label: 'Tab 1', content: 'Content of Tab 1' },
  { id: '2', label: 'Tab 2', content: 'Content of Tab 2' },
  { id: '3', label: 'Tab 3', content: 'Content of Tab 3' },
];

export const Default = Template.bind({});
Default.args = {
  tabs: tabsData,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  initialActiveIndex: 1,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
  initialActiveIndex: 2,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};