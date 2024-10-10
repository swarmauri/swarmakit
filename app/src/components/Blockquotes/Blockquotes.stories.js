import React from 'react';
import Blockquotes from './Blockquotes';

export default {
  title: 'Components/Blockquotes',
  component: Blockquotes,
  argTypes: {
    className: { control: 'text' },
  },
};

const Template = (args) => <Blockquotes {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'The only limit to our realization of tomorrow is our doubts of today.',
  author: 'Franklin D. Roosevelt',
  className: '',
};

export const WithoutAuthor = Template.bind({});
WithoutAuthor.args = {
  text: 'Life is 10% what happens to us and 90% how we react to it.',
  className: '',
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  ...Default.args,
  className: 'custom-blockquote-style',
};