import React from 'react';
import Tabs from './Tabs';

export default {
  title: 'Lists/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: 1, label: 'Tab 1' },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ],
  disabled: false,
};

export const Active = Template.bind({});
Active.args = {
  tabs: [
    { id: 1, label: 'Tab 1' },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ],
  disabled: false,
};

export const Inactive = Template.bind({});
Inactive.args = {
  tabs: [
    { id: 1, label: 'Tab 1' },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  tabs: [
    { id: 1, label: 'Tab 1' },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ],
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  tabs: [
    { id: 1, label: 'Tab 1' },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ],
  disabled: false,
};