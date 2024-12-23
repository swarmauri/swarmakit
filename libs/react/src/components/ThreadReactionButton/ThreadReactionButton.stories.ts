import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadReactionButton, { ThreadReactionButtonProps } from './ThreadReactionButton';

export default {
  title: 'component/Threads/ThreadReactionButton',
  component: ThreadReactionButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadReactionButtonProps> = (args) => <ThreadReactionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'React',
  available: true,
  onClick: () => alert('Button clicked'),
};

export const Available = Template.bind({});
Available.args = {
  ...Default.args,
  available: true,
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  ...Default.args,
  available: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  available: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  available: true,
};