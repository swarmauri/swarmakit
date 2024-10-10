import React from 'react';
import ValidationErrorTooltip from './ValidationErrorTooltip';

export default {
  title: 'Components/ValidationErrorTooltip',
  component: ValidationErrorTooltip,
  argTypes: {
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
  },
};

const Template = (args) => <ValidationErrorTooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a validation error.',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This tooltip should not be visible.',
  isVisible: false,
};