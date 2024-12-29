import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThumbsUpThumbsDownPoll, { ThumbsUpThumbsDownPollProps } from './ThumbsUpThumbsDownPoll';

export default {
  title: 'component/Polls/ThumbsUpThumbsDownPoll',
  component: ThumbsUpThumbsDownPoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThumbsUpThumbsDownPollProps> = (args) => <ThumbsUpThumbsDownPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Do you agree with this statement?',
  disabled: false,
  showResults: false,
  onReact: () => {},
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
  onReact: (reaction) => console.log(`Reacted with: ${reaction}`),
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