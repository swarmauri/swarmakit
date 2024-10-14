import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'UI Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    isVisible: { control: 'boolean' },
    isCollapsed: { control: 'boolean' },
    isHovered: { control: 'boolean' },
  },
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  isCollapsed: false,
  isHovered: false,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  isCollapsed: true,
};

export const Expanded = Template.bind({});
Expanded.args = {
  isCollapsed: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  isHovered: true,
};