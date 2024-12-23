import React from 'react';
import { Meta, Story } from '@storybook/react';
import TypingStatus, { TypingStatusProps } from './TypingStatus';

export default {
  title: 'component/Chat/TypingStatus',
  component: TypingStatus,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TypingStatusProps> = (args) => <TypingStatus {...args} />;

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

export const Typing = Template.bind({});
Typing.args = {
  ...Default.args,
  state: 'typing',
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  state: 'paused',
};