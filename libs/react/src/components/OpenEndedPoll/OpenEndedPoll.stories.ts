import React from 'react';
import { Meta, Story } from '@storybook/react';
import OpenEndedPoll, { OpenEndedPollProps } from './OpenEndedPoll';

export default {
  title: 'component/Polls/OpenEndedPoll',
  component: OpenEndedPoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<OpenEndedPollProps> = (args) => <OpenEndedPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'What features would you like to see in our product?',
  resultsVisible: false,
  disabled: false,
  onSubmit: (response) => console.log(`Response submitted: ${response}`),
};

export const Unanswered = Template.bind({});
Unanswered.args = {
  ...Default.args,
  resultsVisible: false,
};

export const Answered = Template.bind({});
Answered.args = {
  ...Default.args,
  onSubmit: (response) => console.log(`Response submitted: ${response}`),
};

export const ResultsVisible = Template.bind({});
ResultsVisible.args = {
  ...Default.args,
  resultsVisible: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};