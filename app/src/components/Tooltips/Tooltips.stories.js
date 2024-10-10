import React from 'react';
import Tooltips from './Tooltips';

export default {
  title: 'Components/Tooltips',
  component: Tooltips,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    className: { control: 'text' },
  },
};

const Template = (args) => (
  <Tooltips {...args}>
    <button>Hover over me</button>
  </Tooltips>
);

export const Default = Template.bind({});
Default.args = {
  text: 'This is a tooltip',
  position: 'top',
  className: '',
};

export const BottomPosition = Template.bind({});
BottomPosition.args = {
  ...Default.args,
  position: 'bottom',
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  ...Default.args,
  className: 'custom-tooltip',
};