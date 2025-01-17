import React from 'react';
import { Meta, Story } from '@storybook/react';
import MultipleChoicePoll, { MultipleChoicePollProps } from './MultipleChoicePoll';

export default {
  title: 'component/Polls/MultipleChoicePoll',
  component: MultipleChoicePoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MultipleChoicePollProps> = (args) => <MultipleChoicePoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Select your favorite fruits:',
  options: [
    { id: 1, text: 'Apple' },
    { id: 2, text: 'Banana' },
    { id: 3, text: 'Cherry' },
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

export const PartiallyAnswered = Template.bind({});
PartiallyAnswered.args = {
  ...Default.args,
  disabled: false,
  showResults: false,
  onVote: (selectedOptions) => console.log(selectedOptions),
};

export const FullyAnswered = Template.bind({});
FullyAnswered.args = {
  ...Default.args,
  disabled: false,
  showResults: false,
  onVote: (selectedOptions) => console.log(selectedOptions),
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