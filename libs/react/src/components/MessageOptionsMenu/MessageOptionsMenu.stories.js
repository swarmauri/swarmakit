// MessageOptionsMenu.stories.js
import React from 'react';
import MessageOptionsMenu from './MessageOptionsMenu';

export default {
  title: 'Chat/MessageOptionsMenu',
  component: MessageOptionsMenu,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <MessageOptionsMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  options: ['Reply', 'Edit', 'Delete'],
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  options: ['Reply', 'Edit', 'Delete'],
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  options: [],
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  options: ['Reply', 'Edit', 'Delete'],
};