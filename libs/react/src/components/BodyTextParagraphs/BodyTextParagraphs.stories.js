import React from 'react';
import BodyTextParagraphs from './BodyTextParagraphs';

export default {
  title: 'Components/BodyTextParagraphs',
  component: BodyTextParagraphs,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' }
  },
};

const Template = (args) => <BodyTextParagraphs {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a default paragraph.',
};

export const ColoredText = Template.bind({});
ColoredText.args = {
  text: 'This is a colored paragraph.',
  color: '#007bff',
};

export const LargeText = Template.bind({});
LargeText.args = {
  text: 'This is a large paragraph.',
  fontSize: '24px',
};