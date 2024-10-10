import React, { useState } from 'react';
import Popover from './Popover';

export default {
  title: 'Overlays/Popover',
  component: Popover,
};

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(args.isVisible);

  return (
    <div style={{ margin: '50px' }}>
      <Popover {...args} isVisible={isVisible}>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Popover
        </button>
      </Popover>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
  content: <div>This is a popover content.</div>,
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  content: <div>This popover is visible.</div>,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
  content: <div>This popover is hidden.</div>,
};