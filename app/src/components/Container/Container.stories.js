import React from 'react';
import Container from './Container';

export default {
  title: 'UI Layout/Container',
  component: Container,
  argTypes: {
    fluid: { control: 'boolean' },
    centered: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

const Template = (args) => <Container {...args}><div style={{ backgroundColor: '#f0f0f0', height: '100px' }}>Content</div></Container>;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Container',
};

export const Fluid = Template.bind({});
Fluid.args = {
  children: 'Fluid Container',
  fluid: true,
};

export const Fixed = Template.bind({});
Fixed.args = {
  children: 'Fixed Container',
  fluid: false,
};

export const Centered = Template.bind({});
Centered.args = {
  children: 'Centered Container',
  centered: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full Width Container',
  fullWidth: true,
};