import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    size: { control: 'text' },
    color: { control: 'color' },
  },
};

const Template = (args) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '40px',
  color: '#000',
};

export const Large = Template.bind({});
Large.args = {
  size: '80px',
  color: '#007BFF',
};

export const Small = Template.bind({});
Small.args = {
  size: '20px',
  color: '#FF5733',
};