import React from 'react';
import ThumbnailCardWithImage from './ThumbnailCardWithImage';

export default {
  title: 'Components/ThumbnailCardWithImage',
  component: ThumbnailCardWithImage,
};

const Template = (args) => <ThumbnailCardWithImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/150',
  title: 'Card Title',
  description: 'This is a description of the card.',
  onClick: () => alert('Card clicked!'),
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  imageUrl: 'https://via.placeholder.com/150',
  title: 'Card Title',
  onClick: () => alert('Card clicked!'),
};

export const CustomImage = Template.bind({});
CustomImage.args = {
  imageUrl: 'https://via.placeholder.com/300',
  title: 'Custom Image Card',
  description: 'This card uses a custom image size.',
  onClick: () => alert('Custom image card clicked!'),
};