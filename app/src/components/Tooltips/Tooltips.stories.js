import React from 'react';
import Tooltips from './Tooltips';

export default {
  title: 'Components/Tooltips',
  component: Tooltips,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display inside the tooltip',
    },
    position: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
      description: 'Position of the tooltip relative to the children',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes',
    },
  },
};

const Template = (args) => (
  <Tooltips {...args}>
    <button>Hover me</button>
  </Tooltips>
);

export const Default = Template.bind({});
Default.args = {
  text: 'This is a tooltip',
  position: 'top',
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  ...Default.args,
  position: 'right',
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  ...Default.args,
  className: 'custom-tooltip-class',
};