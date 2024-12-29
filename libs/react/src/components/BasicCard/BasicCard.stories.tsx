import React from 'react';
import { Meta, Story } from '@storybook/react';
import BasicCard, { BasicCardProps } from './BasicCard';

export default {
  title: 'component/Card Types/BasicCard',
  component: BasicCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BasicCardProps> = (args) => <BasicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'Card Header',
  body: 'This is the body of the card.',
  footer: 'Card Footer',
  imageUrl: 'https://via.placeholder.com/150',
  isDisabled: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  header: 'Card Header',
  body: 'This is the body of the card.',
  footer: 'Card Footer',
  imageUrl: 'https://via.placeholder.com/150',
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  header: 'Card Header',
  body: 'This is the body of the card.',
  footer: 'Card Footer',
  imageUrl: 'https://via.placeholder.com/150',
  isDisabled: true,
};