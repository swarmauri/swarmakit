import React from 'react';
import Header from './Header';

export default {
  title: 'UI Layout/Header',
  component: Header,
  argTypes: {
    isVisible: { control: 'boolean' },
    isSticky: { control: 'boolean' },
    isCollapsed: { control: 'boolean' },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  isSticky: false,
  isCollapsed: false,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
};

export const Sticky = Template.bind({});
Sticky.args = {
  isSticky: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  isCollapsed: true,
};

export const Expanded = Template.bind({});
Expanded.args = {
  isCollapsed: false,
};