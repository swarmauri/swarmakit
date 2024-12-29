import React from 'react';
import { Meta, Story } from '@storybook/react';
import RankingPoll, { RankingPollProps } from './RankingPoll';

export default {
  title: 'component/Polls/RankingPoll',
  component: RankingPoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<RankingPollProps> = (args) => <RankingPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Rank these programming languages:',
  options: [
    { id: 1, text: 'JavaScript' },
    { id: 2, text: 'Python' },
    { id: 3, text: 'Java' },
  ],
  disabled: false,
  showResults: false,
  onRank: () => {},
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
  onRank: (rankedOptions) => console.log(rankedOptions),
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