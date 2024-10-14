import React from 'react';
import TextHighlighting from './TextHighlighting';

export default {
  title: 'Components/TextHighlighting',
  component: TextHighlighting,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display with highlighted parts',
    },
    highlight: {
      control: 'text',
      description: 'The text to highlight within the main text',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes',
    },
  },
};

const Template = (args) => <TextHighlighting {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Highlight parts of this text that match the input.',
  highlight: 'highlight',
};

export const NoHighlight = Template.bind({});
NoHighlight.args = {
  text: 'This text will not have any highlighted parts.',
  highlight: '',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  text: 'This text will have a custom highlight style.',
  highlight: 'custom',
  className: 'custom-text-class',
};