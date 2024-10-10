import React from 'react';
import TooltipIcon from './TooltipIcon';

export default {
  title: 'Components/TooltipIcon',
  component: TooltipIcon,
  argTypes: {
    icon: { control: 'text' },
    tooltipText: { control: 'text' },
    position: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
};

const Template = (args) => <TooltipIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'ℹ️',
  tooltipText: 'This is a tooltip',
  position: 'top',
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  icon: 'ℹ️',
  tooltipText: 'Tooltip on the right',
  position: 'right',
};

export const BottomPosition = Template.bind({});
BottomPosition.args = {
  icon: 'ℹ️',
  tooltipText: 'Tooltip at the bottom',
  position: 'bottom',
};

export const LeftPosition = Template.bind({});
LeftPosition.args = {
  icon: 'ℹ️',
  tooltipText: 'Tooltip on the left',
  position: 'left',
};