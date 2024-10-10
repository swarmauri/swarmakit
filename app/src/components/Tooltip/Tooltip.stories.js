import React, { useState } from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Overlays/Tooltip',
  component: Tooltip,
};

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(args.isVisible);

  return (
    <div style={{ margin: '50px' }}>
      <Tooltip {...args} isVisible={isVisible}>
        <button onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
          Hover me
        </button>
      </Tooltip>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
  content: <div>This is a default tooltip.</div>,
  type: 'default',
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  content: <div>This tooltip is visible.</div>,
  type: 'default',
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
  content: <div>This tooltip is hidden.</div>,
  type: 'default',
};

export const Error = Template.bind({});
Error.args = {
  isVisible: true,
  content: <div>This is an error tooltip.</div>,
  type: 'error',
};

export const Information = Template.bind({});
Information.args = {
  isVisible: true,
  content: <div>This is an information tooltip.</div>,
  type: 'information',
};