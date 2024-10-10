import React from 'react';
import Captcha from './Captcha';

export default {
  title: 'Forms/Captcha',
  component: Captcha,
  argTypes: {
    onSolve: { action: 'solved' },
  },
};

const Template = (args) => <Captcha {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Solved = Template.bind({});
Solved.args = {};
Solved.decorators = [
  (Story) => <div className="captcha solved"><Story /></div>,
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  (Story) => <div className="captcha error"><Story /></div>,
];