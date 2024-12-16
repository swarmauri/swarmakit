import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadMessageOptionsMenu, { ThreadMessageOptionsMenuProps } from './ThreadMessageOptionsMenu';

export default {
  title: 'component/Threads/ThreadMessageOptionsMenu',
  component: ThreadMessageOptionsMenu,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadMessageOptionsMenuProps> = (args) => <ThreadMessageOptionsMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Edit', 'Delete', 'Reply'],
};

export const Visible = Template.bind({});
Visible.args = {
  ...Default.args,
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
};