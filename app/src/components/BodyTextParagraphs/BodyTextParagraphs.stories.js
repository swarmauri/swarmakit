import React from 'react';
import BodyTextParagraphs from './BodyTextParagraphs';

export default {
  title: 'Components/BodyTextParagraphs',
  component: BodyTextParagraphs,
  argTypes: {
    paragraphs: {
      control: 'array',
      description: 'Array of paragraphs to display',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes',
    },
  },
};

const Template = (args) => <BodyTextParagraphs {...args} />;

export const Default = Template.bind({});
Default.args = {
  paragraphs: ['This is the first paragraph.', 'This is the second paragraph.', 'This is the third paragraph.'],
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  ...Default.args,
  className: 'custom-class',
};