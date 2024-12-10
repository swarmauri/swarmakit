import React from 'react';
import { Meta, Story } from '@storybook/react';
import Captcha from './Captcha';

export default {
  title: 'component/Forms/Captcha',
  component: Captcha,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <Captcha {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSolve: () => alert('Captcha Solved'),
  onError: () => alert('Captcha Error'),
};

export const Solved = Template.bind({});
Solved.args = {
  onSolve: () => alert('Captcha Solved'),
  onError: () => alert('Captcha Error'),
};

export const Error = Template.bind({});
Error.args = {
  onSolve: () => alert('Captcha Solved'),
  onError: () => alert('Captcha Error'),
};