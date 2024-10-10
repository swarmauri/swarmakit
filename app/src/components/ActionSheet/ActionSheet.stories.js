import React, { useState } from 'react';
import ActionSheet from './ActionSheet';

export default {
  title: 'Overlays/ActionSheet',
  component: ActionSheet,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return <ActionSheet {...args} isOpen={isOpen} onSelect={(option) => alert(`Selected: ${option.label}`)} />;
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  options: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
  ],
};

export const Opened = Template.bind({});
Opened.args = {
  isOpen: true,
  options: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
  ],
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  options: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  isOpen: true,
  options: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
  ],
};