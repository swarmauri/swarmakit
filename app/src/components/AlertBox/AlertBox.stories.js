import React from 'react';
import AlertBox from './AlertBox';

export default {
  title: 'Components/AlertBox',
  component: AlertBox,
};

const Template = (args) => <AlertBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'info',
  message: 'This is an informational alert.',
  onClose: () => alert('Alert closed'),
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success alert.',
  onClose: () => alert('Alert closed'),
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'This is an error alert.',
  onClose: () => alert('Alert closed'),
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning alert.',
  onClose: () => alert('Alert closed'),
};