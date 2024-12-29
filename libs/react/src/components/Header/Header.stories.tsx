import React from 'react';
import { Meta, Story } from '@storybook/react';
import Header, { HeaderProps } from './Header';

export default {
  title: 'component/UI Layout/Header',
  component: Header,
  tags: ['autodocs'],
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  title: 'My Website',
  navItems: ['Home', 'About', 'Contact'],
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  title: 'My Website',
  navItems: ['Home', 'About', 'Contact'],
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  title: 'My Website',
  navItems: ['Home', 'About', 'Contact'],
};

export const Sticky = Template.bind({});
Sticky.args = {
  state: 'sticky',
  title: 'My Website',
  navItems: ['Home', 'About', 'Contact'],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  title: 'My Website',
  navItems: ['Home', 'About', 'Contact'],
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
  title: 'My Website',
  navItems: ['Home', 'About', 'Contact'],
};