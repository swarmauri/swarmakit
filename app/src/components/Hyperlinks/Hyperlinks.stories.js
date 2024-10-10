import React from 'react';
import Hyperlinks from './Hyperlinks';

export default {
  title: 'Components/Hyperlinks',
  component: Hyperlinks,
  argTypes: {
    className: { control: 'text' },
  },
};

const Template = (args) => <Hyperlinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { href: 'https://www.example.com', text: 'Example' },
    { href: 'https://www.google.com', text: 'Google' },
  ],
  className: '',
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  ...Default.args,
  className: 'custom-link-style',
};