import React from 'react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    text: { control: 'text' },
    links: { control: 'object' },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '© 2023 My Company',
  links: [
    { label: 'Privacy Policy', href: 'https://example.com/privacy' },
    { label: 'Terms of Service', href: 'https://example.com/terms' },
  ],
};

export const NoLinks = Template.bind({});
NoLinks.args = {
  text: '© 2023 My Company',
  links: [],
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Custom Footer Text',
  links: [
    { label: 'Contact Us', href: 'https://example.com/contact' },
  ],
};