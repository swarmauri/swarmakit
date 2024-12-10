import React from 'react';
import { Meta, Story } from '@storybook/react';
import Sidebar, { SidebarProps } from './Sidebar';

export default {
  title: 'component/UI Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  menuItems: ['Dashboard', 'Settings', 'Profile', 'Logout'],
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  menuItems: ['Dashboard', 'Settings', 'Profile', 'Logout'],
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  menuItems: ['Dashboard', 'Settings', 'Profile', 'Logout'],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  menuItems: ['Dashboard', 'Settings', 'Profile', 'Logout'],
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
  menuItems: ['Dashboard', 'Settings', 'Profile', 'Logout'],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  menuItems: ['Dashboard', 'Settings', 'Profile', 'Logout'],
};