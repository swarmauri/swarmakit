import React from 'react';
import SidebarMenu from './SidebarMenu';

export default {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  argTypes: {
    items: { control: 'array' },
    onItemSelect: { action: 'item selected' },
    isOpen: { control: 'boolean' },
  },
};

const Template = (args) => <SidebarMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Dashboard', 'Settings', 'Profile'],
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  isOpen: false,
};

export const WithMoreItems = Template.bind({});
WithMoreItems.args = {
  items: ['Dashboard', 'Settings', 'Profile', 'Logout'],
  isOpen: true,
};