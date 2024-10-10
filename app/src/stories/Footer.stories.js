// Footer.stories.js
import React from 'react';
import Footer from './Footer';

// Export metadata about the component
export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    year: { control: 'number' },
    companyName: { control: 'text' },
    privacyPolicyUrl: { control: 'text' },
    termsOfServiceUrl: { control: 'text' },
    contactUrl: { control: 'text' },
  },
};

// Template for the Footer component
const Template = (args) => <Footer {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  year: 2024,
  companyName: 'Your Company Name',
  privacyPolicyUrl: '#privacy',
  termsOfServiceUrl: '#terms',
  contactUrl: '#contact',
};

// Custom story
export const Custom = Template.bind({});
Custom.args = {
  year: 2025,
  companyName: 'Custom Company',
  privacyPolicyUrl: 'https://customcompany.com/privacy',
  termsOfServiceUrl: 'https://customcompany.com/terms',
  contactUrl: 'https://customcompany.com/contact',
};
