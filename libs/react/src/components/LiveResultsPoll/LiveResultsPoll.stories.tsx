import React from 'react';
import { Meta, Story } from '@storybook/react';
import LiveResultsPoll, { LiveResultsPollProps } from './LiveResultsPoll';

export default {
  title: 'component/Polls/LiveResultsPoll',
  component: LiveResultsPoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<LiveResultsPollProps> = (args) => <LiveResultsPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Which feature do you like the most?',
  options: [
    { id: 1, label: 'Feature A', votes: 10 },
    { id: 2, label: 'Feature B', votes: 20 },
    { id: 3, label: 'Feature C', votes: 30 },
  ],
  liveResults: false,
  closed: false,
  onVote: (selectedId) => console.log(`Voted for option ID: ${selectedId}`),
};

export const Unanswered = Template.bind({});
Unanswered.args = {
  ...Default.args,
  liveResults: false,
};

export const Answered = Template.bind({});
Answered.args = {
  ...Default.args,
  onVote: (selectedId) => console.log(`Voted for option ID: ${selectedId}`),
};

export const LiveResultsVisible = Template.bind({});
LiveResultsVisible.args = {
  ...Default.args,
  liveResults: true,
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  closed: true,
};