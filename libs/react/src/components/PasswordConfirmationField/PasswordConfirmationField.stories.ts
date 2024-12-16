import React from 'react';
import { Meta, Story } from '@storybook/react';
import PasswordConfirmationField from './PasswordConfirmationField';

export default {
  title: 'component/Forms/PasswordConfirmationField',
  component: PasswordConfirmationField,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <PasswordConfirmationField {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Matching = Template.bind({});
Matching.args = {
  disabled: false,
};

export const NotMatching = Template.bind({});
NotMatching.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};