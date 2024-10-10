import React from 'react';
import ReviewCard from './ReviewCard';

export default {
  title: 'Components/ReviewCard',
  component: ReviewCard,
};

const Template = (args) => <ReviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  reviewerName: 'Alice Johnson',
  reviewText: 'This product exceeded my expectations! Highly recommend.',
  rating: 5,
  date: 'October 1, 2023',
};

export const AverageReview = Template.bind({});
AverageReview.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  reviewerName: 'Bob Smith',
  reviewText: 'The product is decent, but there are better options available.',
  rating: 3,
  date: 'September 15, 2023',
};

export const NegativeReview = Template.bind({});
NegativeReview.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  reviewerName: 'Charlie Brown',
  reviewText: 'I am not satisfied with the quality. It did not meet my expectations.',
  rating: 1,
  date: 'September 5, 2023',
};