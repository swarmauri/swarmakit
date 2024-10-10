import React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
    onChange: { action: 'text changed' },
  },
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'This is a default textarea.',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'This textarea is disabled.',
  disabled: true,
};