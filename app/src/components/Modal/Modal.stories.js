import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Overlays/Modal',
  component: Modal,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <Modal
      {...args}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div style={{ padding: '20px' }}>This is a modal content.</div>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  isDisabled: false,
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  isDisabled: false,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isOpen: true,
  isDisabled: true,
};