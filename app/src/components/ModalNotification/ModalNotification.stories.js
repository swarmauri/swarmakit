import React from 'react';
import ModalNotification from './ModalNotification';

export default {
  title: 'Components/ModalNotification',
  component: ModalNotification,
};

const Template = (args) => <ModalNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Notification',
  message: 'This is a default notification.',
  onClose: () => alert('Modal closed'),
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  title: 'Important Update',
  message: 'This is a longer message to demonstrate how the modal handles more content. It should still appear in a user-friendly format.',
  onClose: () => alert('Modal closed'),
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Title',
  message: 'This notification has a custom title.',
  onClose: () => alert('Modal closed'),
};