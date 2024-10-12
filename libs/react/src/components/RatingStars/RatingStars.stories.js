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
  initialRating: 0,
  state: 'inactive',
};

export const Hover = Template.bind({});
Hover.args = {
  totalStars: 5,
  initialRating: 3,
  state: 'hover',
};

export const Selected = Template.bind({});
Selected.args = {
  totalStars: 5,
  initialRating: 4,
  state: 'selected',
};

export const Inactive = Template.bind({});
Inactive.args = {
  totalStars: 5,
  initialRating: 0,
  state: 'inactive',
};