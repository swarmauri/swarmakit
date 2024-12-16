import React from 'react';
import { Meta, Story } from '@storybook/react';
import MessageOptionsMenu, { MessageOptionsMenuProps } from './MessageOptionsMenu';

export default {
  title: 'component/Chat/MessageOptionsMenu',
  component: MessageOptionsMenu,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MessageOptionsMenuProps> = (args) => <MessageOptionsMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
};

export const Visible = Template.bind({});
Visible.args = {
  ...Default.args,
  state: 'visible',
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  state: 'hidden',
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  state: 'clicked',
};