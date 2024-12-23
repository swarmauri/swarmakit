import React from 'react';
import { Meta, Story } from '@storybook/react';
import RemoveMemberButton, { RemoveMemberButtonProps } from './RemoveMemberButton';

export default {
  title: 'component/Chat/RemoveMemberButton',
  component: RemoveMemberButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<RemoveMemberButtonProps> = (args) => <RemoveMemberButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isEnabled: true,
  onClick: () => console.log('Button clicked'),
};

export const Enabled = Template.bind({});
Enabled.args = {
  ...Default.args,
  isEnabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isEnabled: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  isEnabled: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  isEnabled: true,
};