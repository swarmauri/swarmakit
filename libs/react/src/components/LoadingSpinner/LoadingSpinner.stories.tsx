import React from 'react';
import { Meta, Story } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'component/Indicators/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
} as Meta;

const Template: Story<LoadingSpinnerProps> = (args) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: true,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
};