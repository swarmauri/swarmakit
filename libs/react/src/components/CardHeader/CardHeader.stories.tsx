import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardHeader, { CardHeaderProps } from './CardHeader';

export default {
  title: 'component/Card Elements/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CardHeaderProps> = (args) => <CardHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  subtitle: 'Card Subtitle',
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  imageUrl: 'https://via.placeholder.com/150',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <span role="img" aria-label="icon">🌟</span>,
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
};
Hovered.parameters = {
  pseudo: { hover: true },
};