import React, { useState } from 'react';
import FullScreenModal from './FullScreenModal';

export default {
  title: 'Components/FullScreenModal',
  component: FullScreenModal,
  argTypes: {},
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <FullScreenModal {...args} isOpen={isOpen} onClose={handleClose}>
        <div style={{ padding: '20px' }}>This is the modal content</div>
      </FullScreenModal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};

export const Opened = Template.bind({});
Opened.args = {
  isOpen: true,
};