import React from 'react';
import { Meta, Story } from '@storybook/react';
import TypingIndicator, { TypingIndicatorProps } from './TypingIndicator';

export default {
  title: 'component/Chat/TypingIndicator',
  component: TypingIndicator,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TypingIndicatorProps> = (args) => <TypingIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  isTyping: false,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  isTyping: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
  isTyping: false,
};

export const Typing = Template.bind({});
Typing.args = {
  isVisible: true,
  isTyping: true,
};