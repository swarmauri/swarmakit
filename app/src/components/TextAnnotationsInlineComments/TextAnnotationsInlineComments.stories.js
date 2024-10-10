import React from 'react';
import TextAnnotationsInlineComments from './TextAnnotationsInlineComments';

export default {
  title: 'Components/TextAnnotationsInlineComments',
  component: TextAnnotationsInlineComments,
  argTypes: {
    className: { control: 'text' },
  },
};

const Template = (args) => <TextAnnotationsInlineComments {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Inline comments are useful for providing additional context.',
  annotations: [
    {
      start: 0,
      end: 12,
      comment: 'This part refers to comments within the text.',
    },
    {
      start: 37,
      end: 52,
      comment: 'Provides extra information.',
    },
  ],
  className: '',
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  ...Default.args,
  className: 'custom-annotation-style',
};