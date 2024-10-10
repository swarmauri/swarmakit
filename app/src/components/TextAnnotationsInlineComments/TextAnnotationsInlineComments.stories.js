import React from 'react';
import TextAnnotationsInlineComments from './TextAnnotationsInlineComments';

export default {
  title: 'Components/TextAnnotationsInlineComments',
  component: TextAnnotationsInlineComments,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display with inline comments',
    },
    comments: {
      control: 'object',
      description: 'An array of objects representing words and their comments',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes',
    },
  },
};

const Template = (args) => <TextAnnotationsInlineComments {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a sample text to demonstrate inline comments.',
  comments: [
    { word: 'sample', comment: 'This is a sample comment.' },
    { word: 'inline', comment: 'Comments appear inline.' },
  ],
};

export const NoComments = Template.bind({});
NoComments.args = {
  text: 'This text has no inline comments.',
  comments: [],
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  text: 'Custom styling is applied to this text.',
  comments: [
    { word: 'Custom', comment: 'This is a custom styled comment.' },
  ],
  className: 'custom-text-class',
};