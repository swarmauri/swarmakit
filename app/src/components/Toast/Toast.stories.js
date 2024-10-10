import React from 'react';
import Toast from './Toast';

export default {
  title: 'UI Layout/Toast',
  component: Toast,
  argTypes: {
    visible: { control: 'boolean' },
    autoHideDuration: { control: 'number' },
    onDismiss: { action: 'dismissed' },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default toast',
  visible: true,
};

export const Visible = Template.bind({});
Visible.args = {
  message: 'This toast is visible',
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This toast is hidden',
  visible: false,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  message: 'This toast will be dismissed',
  visible: true,
  onDismiss: () => console.log('Toast dismissed'),
};

export const AutoHide = Template.bind({});
AutoHide.args = {
  message: 'This toast will auto-hide',
  visible: true,
  autoHideDuration: 5000,
};