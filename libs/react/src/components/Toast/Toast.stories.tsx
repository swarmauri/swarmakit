import React from 'react';
import { Meta, Story } from '@storybook/react';
import Toast, { ToastProps } from './Toast';

export default {
  title: 'component/UI Layout/Toast',
  component: Toast,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  message: 'This is a default toast message.',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  message: 'This toast is visible.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  message: 'This toast is hidden.',
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  state: 'dismissed',
  message: 'This toast has been dismissed.',
};

export const AutoHide = Template.bind({});
AutoHide.args = {
  state: 'autoHide',
  message: 'This toast will auto-hide after a duration.',
  duration: 5000,
};