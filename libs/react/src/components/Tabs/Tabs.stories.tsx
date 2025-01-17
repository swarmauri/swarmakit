import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tabs, { TabsProps } from './Tabs';

export default {
  title: 'component/Lists/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content of Tab 1' },
    { label: 'Tab 2', content: 'Content of Tab 2' },
    { label: 'Tab 3', content: 'Content of Tab 3' },
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
  tabs: [
    { label: 'Tab 1', content: 'Content of Tab 1', disabled: true },
    { label: 'Tab 2', content: 'Content of Tab 2' },
    { label: 'Tab 3', content: 'Content of Tab 3', disabled: true },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};