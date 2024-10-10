import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'Forms/TextArea',
  component: Textarea,
  argTypes: {
    onChange: { action: 'text changed' },
  },
};

const Template = (args) => <TextArea {...args} />;

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