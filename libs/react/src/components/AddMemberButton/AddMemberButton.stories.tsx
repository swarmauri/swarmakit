import React from 'react';
import { Meta, Story } from '@storybook/react';
import AddMemberButton, { AddMemberButtonProps } from './AddMemberButton';

export default {
  title: 'component/Chat/AddMemberButton',
  component: AddMemberButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AddMemberButtonProps> = (args) => <AddMemberButton {...args} />;

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