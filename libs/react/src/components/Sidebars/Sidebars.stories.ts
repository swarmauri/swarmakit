import React from 'react';
import { Meta, Story } from '@storybook/react';
import Sidebars, { SidebarProps } from './Sidebars';

export default {
  title: 'component/Navigation/Sidebars',
  component: Sidebars,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebars {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: <p>Default Sidebar Content</p>,
};

export const Expanded = Template.bind({});
Expanded.args = {
  content: <p>Expanded Sidebar Content</p>,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  content: <p>Collapsed Sidebar Content</p>,
};

export const Hover = Template.bind({});
Hover.args = {
  content: <p>Hover Sidebar Content</p>,
};