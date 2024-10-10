import React from 'react';
import ComponentRatingCard from './ComponentRatingCard';

export default {
  title: 'Components/ComponentRatingCard',
  component: ComponentRatingCard,
};

const Template = (args) => <ComponentRatingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Product Rating',
  rating: 3,
  maxRating: 5,
  description: 'This is a sample product rating.',
};

export const FullRating = Template.bind({});
FullRating.args = {
  title: 'Excellent Product',
  rating: 5,
  maxRating: 5,
  description: 'This product has received excellent ratings.',
};

export const NoRating = Template.bind({});
NoRating.args = {
  title: 'Unrated Product',
  rating: 0,
  maxRating: 5,
  description: 'This product has not been rated yet.',
};