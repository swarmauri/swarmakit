// Navbar.stories.js
import React from 'react';
import Navbar from './Navbar';

// Export metadata about the component
export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  argTypes: {
    logo: { control: 'text' },
    links: { 
      control: 'object', 
      defaultValue: [
        { label: 'Home', url: '#' },
        { label: 'About', url: '#' },
        { label: 'Services', url: '#' },
        { label: 'Contact', url: '#' },
      ]
    },
    ctaButton: {
      control: 'object',
      defaultValue: null,
    },
  },
};

// Template for the Navbar component
const Template = (args) => <Navbar {...args} />;

// Default story
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

// With CTA Button story
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
