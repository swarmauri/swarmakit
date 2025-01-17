import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardImage, { CardImageProps } from './CardImage';

export default {
  title: 'component/Card Elements/CardImage',
  component: CardImage,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CardImageProps> = (args) => <CardImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Default Image',
};

export const Hovered = Template.bind({});
Hovered.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Hovered Image',
  overlay: <span>Overlay Text</span>,
};

export const Expanded = Template.bind({});
Expanded.args = {
  src: 'https://via.placeholder.com/600',
  alt: 'Expanded Image',
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Image with Caption',
  caption: 'This is a caption',
};