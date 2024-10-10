// Navbar.stories.js
import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: 'https://via.placeholder.com/100x40?text=Logo',
  links: [
    { label: 'Home', url: '#' },
    { label: 'About', url: '#' },
    { label: 'Services', url: '#' },
    { label: 'Contact', url: '#' },
  ],
};

export const WithCtaButton = Template.bind({});
WithCtaButton.args = {
  logo: 'https://via.placeholder.com/100x40?text=Logo',
  links: [
    { label: 'Home', url: '#' },
    { label: 'About', url: '#' },
    { label: 'Services', url: '#' },
    { label: 'Contact', url: '#' },
  ],
  ctaButton: {
    label: 'Get Started',
    url: '#get-started',
  },
};
