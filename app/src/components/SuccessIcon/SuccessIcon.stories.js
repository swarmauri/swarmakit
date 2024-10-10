import React from 'react';
import SuccessIcon from './SuccessIcon';

export default {
  title: 'Icons/SuccessIcon',
  component: SuccessIcon,
  argTypes: {
    message: { control: 'text' },
  },
};

const Template = (args) => <SuccessIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Operation was successful!',
};

export const WithoutMessage = Template.bind({});
WithoutMessage.args = {
  message: '',
};