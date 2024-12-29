import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadScrollButton, { ThreadScrollButtonProps } from './ThreadScrollButton';

export default {
  title: 'component/Threads/ThreadScrollButton',
  component: ThreadScrollButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadScrollButtonProps> = (args) => <ThreadScrollButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Scroll',
  visible: true,
  onClick: () => alert('Button clicked'),
};

export const Visible = Template.bind({});
Visible.args = {
  ...Default.args,
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  visible: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  visible: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  visible: true,
};