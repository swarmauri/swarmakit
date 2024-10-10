import React, { useState } from 'react';
import ContextMenu from './ContextMenu';

export default {
  title: 'Overlays/ContextMenu',
  component: ContextMenu,
};

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(args.isVisible);
  return <ContextMenu {...args} isVisible={isVisible} onSelect={(item) => alert(`Selected: ${item.label}`)} />;
};

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
  items: [
    { label: 'Action 1' },
    { label: 'Action 2' },
    { label: 'Action 3' },
  ],
};

export const RightClick = Template.bind({});
RightClick.args = {
  isVisible: true,
  items: [
    { label: 'Action 1' },
    { label: 'Action 2' },
    { label: 'Action 3' },
  ],
};

export const TapAndHold = Template.bind({});
TapAndHold.args = {
  isVisible: true,
  items: [
    { label: 'Action 1' },
    { label: 'Action 2' },
    { label: 'Action 3' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  isVisible: true,
  items: [
    { label: 'Action 1' },
    { label: 'Action 2' },
    { label: 'Action 3' },
  ],
};