import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container, { ContainerProps } from './Container';

export default {
  title: 'component/UI Layout/Container',
  component: Container,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args}>Content goes here.</Container>;

export const Default = Template.bind({});
Default.args = {
  state: 'fluid',
};

export const Fluid = Template.bind({});
Fluid.args = {
  state: 'fluid',
};

export const Fixed = Template.bind({});
Fixed.args = {
  state: 'fixed',
};

export const Centered = Template.bind({});
Centered.args = {
  state: 'centered',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  state: 'fullWidth',
};