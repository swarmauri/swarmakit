import React from 'react';
import Tabs from './Tabs';

export default {
  title: 'Lists/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: '1', label: 'Tab 1', content: 'Content 1' },
    { id: '2', label: 'Tab 2', content: 'Content 2' },
    { id: '3', label: 'Tab 3', content: 'Content 3' },
  ],
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
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