import React from 'react';
import { Meta, Story } from '@storybook/react';
import SendButton, { SendButtonProps } from './SendButton';

export default {
  title: 'component/Chat/SendButton',
  component: SendButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SendButtonProps> = (args) => <SendButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  disabled: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  disabled: false,
  onClick: () => console.log('Button clicked'),
};