import React from 'react';
import { Meta, Story } from '@storybook/react';
import Textarea from './Textarea';

export default {
  title: 'component/Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text here...',
  value: '',
  onChange: (value: string) => console.log(`Textarea value: ${value}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};