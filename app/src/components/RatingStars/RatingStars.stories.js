import React from 'react';
import RatingStars from './RatingStars';

export default {
  title: 'Indicators/RatingStars',
  component: RatingStars,
};

const Template = (args) => <RatingStars {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalStars: 5,
  initialRating: 3,
  isInactive: false,
};

export const Hover = Template.bind({});
Hover.args = {
  totalStars: 5,
  initialRating: 0,
  isInactive: false,
};

export const Selected = Template.bind({});
Selected.args = {
  totalStars: 5,
  initialRating: 4,
  isInactive: false,
};

export const Inactive = Template.bind({});
Inactive.args = {
  totalStars: 5,
  initialRating: 3,
  isInactive: true,
};