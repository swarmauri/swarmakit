import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

export default {
  title: 'component/Overlays/Modal',
  component: Modal,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => console.log('Modal closed'),
  title: 'Default Modal',
  content: 'This is the default modal content.',
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  onClose: () => console.log('Modal closed'),
  title: 'Open Modal',
  content: 'This modal is open.',
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  onClose: () => console.log('Modal closed'),
  title: 'Closed Modal',
  content: 'This modal is closed.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isOpen: true,
  onClose: () => console.log('Modal closed'),
  title: 'Disabled Modal',
  content: 'This modal cannot be closed.',
  disabled: true,
};