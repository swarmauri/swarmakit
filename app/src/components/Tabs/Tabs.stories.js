import React from 'react';
import Tabs from './Tabs';

export default {
  title: 'Lists/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
  defaultActiveIndex: 0,
  isDisabled: false,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  defaultActiveIndex: 1,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
  defaultActiveIndex: -1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};