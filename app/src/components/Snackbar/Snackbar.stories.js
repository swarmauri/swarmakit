import React from 'react';
import Snackbar from './Snackbar';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
};

const Template = (args) => <Snackbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default snackbar message.',
  onClose: () => alert('Snackbar closed'),
};

export const WithAction = Template.bind({});
WithAction.args = {
  message: 'This is a snackbar with an action.',
  actionLabel: 'UNDO',
  onAction: () => alert('Action performed'),
  onClose: () => alert('Snackbar closed'),
};

export const LongDuration = Template.bind({});
LongDuration.args = {
  message: 'This snackbar will last longer.',
  onClose: () => alert('Snackbar closed'),
  duration: 10000, // 10 seconds
};