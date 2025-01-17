import React from 'react';
import { Meta, Story } from '@storybook/react';
import SingleChoicePoll, { SingleChoicePollProps } from './SingleChoicePoll';

export default {
  title: 'component/Polls/SingleChoicePoll',
  component: SingleChoicePoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SingleChoicePollProps> = (args) => <SingleChoicePoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'What is your favorite color?',
  options: [
    { id: 1, text: 'Red' },
    { id: 2, text: 'Blue' },
    { id: 3, text: 'Green' },
  ],
  disabled: false,
  showResults: false,
  onVote: () => {},
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