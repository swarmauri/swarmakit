import React from 'react';
import Blockquotes from './Blockquotes';

export default {
  title: 'Components/Blockquotes',
  component: Blockquotes,
  argTypes: {
    quote: {
      control: 'text',
      description: 'The quote text to be displayed',
    },
    author: {
      control: 'text',
      description: 'The author of the quote',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes for styling',
    },
  },
};

const Template = (args) => <Blockquotes {...args} />;

export const Default = Template.bind({});
Default.args = {
  quote: 'The only limit to our realization of tomorrow is our doubts of today.',
  author: 'Franklin D. Roosevelt',
};

export const NoAuthor = Template.bind({});
NoAuthor.args = {
  quote: 'In the middle of every difficulty lies opportunity.',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  quote: 'The best way to predict the future is to invent it.',
  author: 'Alan Kay',
  className: 'custom-blockquote-class',
};