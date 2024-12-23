import React from 'react';
import { Meta, Story } from '@storybook/react';
import StarRatingPoll, { StarRatingPollProps } from './StarRatingPoll';

export default {
  title: 'component/Polls/StarRatingPoll',
  component: StarRatingPoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<StarRatingPollProps> = (args) => <StarRatingPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Rate your experience:',
  maxStars: 5,
  disabled: false,
  showResults: false,
  onRate: () => {},
};

export const Unanswered = Template.bind({});
Unanswered.args = {
  ...Default.args,
  disabled: false,
  showResults: false,
};

export const Answered = Template.bind({});
Answered.args = {
  ...Default.args,
  disabled: false,
  showResults: false,
  onRate: (rating) => console.log(`Rated: ${rating}`),
};

export const ResultsVisible = Template.bind({});
ResultsVisible.args = {
  ...Default.args,
  disabled: false,
  showResults: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  showResults: false,
};