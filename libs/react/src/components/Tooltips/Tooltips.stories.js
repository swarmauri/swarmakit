import React from 'react';
import Tooltips from './Tooltips';

export default {
  title: 'Components/Tooltips',
  component: Tooltips,
  argTypes: {
    text: { control: 'text' },
    position: { 
      control: { 
        type: 'select', 
        options: ['top', 'right', 'bottom', 'left'] 
      } 
    },
    children: { control: 'text' }
  },
};

const Template = (args) => <Tooltips {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a tooltip.',
  position: 'top',
  children: 'Hover over me',
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  text: 'This tooltip is on the right.',
  position: 'right',
  children: 'Hover over me',
};

export const BottomPosition = Template.bind({});
BottomPosition.args = {
  text: 'This tooltip is at the bottom.',
  position: 'bottom',
  children: 'Hover over me',
};

export const LeftPosition = Template.bind({});
LeftPosition.args = {
  text: 'This tooltip is on the left.',
  position: 'left',
  children: 'Hover over me',
};