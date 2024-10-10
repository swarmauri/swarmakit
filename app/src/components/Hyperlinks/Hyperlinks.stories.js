import React from 'react';
import Hyperlinks from './Hyperlinks';

export default {
  title: 'Components/Hyperlinks',
  component: Hyperlinks,
  argTypes: {
    links: {
      control: 'object',
      description: 'An array of objects representing hyperlink URLs and text',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes',
    },
  },
};

const Template = (args) => <Hyperlinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { url: 'https://www.example.com', text: 'Example' },
    { url: 'https://www.google.com', text: 'Google' },
    { url: 'https://www.github.com', text: 'GitHub' },
  ],
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  links: [
    { url: 'https://www.example.com', text: 'Example' },
    { url: 'https://www.google.com', text: 'Google' },
  ],
  className: 'custom-hyperlinks-class',
};