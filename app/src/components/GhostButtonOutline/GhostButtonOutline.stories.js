import React from 'react';
import GhostButtonOutline from './GhostButtonOutline';

export default {
  title: 'Components/GhostButtonOutline',
  component: GhostButtonOutline,
};

const Template = (args) => <GhostButtonOutline {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Ghost Action',
  onClick: () => alert('Ghost Button Clicked!'),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Ghost Action',
  onClick: () => alert('Ghost Button Clicked!'),
  disabled: true,
};