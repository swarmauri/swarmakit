import React from 'react';
import BodyTextParagraphs from './BodyTextParagraphs';

export default {
  title: 'Components/BodyTextParagraphs',
  component: BodyTextParagraphs,
  argTypes: {
    className: { control: 'text' },
  },
};

const Template = (args) => <BodyTextParagraphs {...args} />;

export const Default = Template.bind({});
Default.args = {
  paragraphs: [
    'This is the first paragraph. It provides some introductory information.',
    'This is the second paragraph. It elaborates on the topic.',
    'This is the third paragraph. It concludes the topic.',
  ],
  className: '',
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  ...Default.args,
  className: 'custom-paragraph-style',
};