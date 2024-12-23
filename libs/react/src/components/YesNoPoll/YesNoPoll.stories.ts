import React from 'react';
import { Meta, Story } from '@storybook/react';
import YesNoPoll, { YesNoPollProps } from './YesNoPoll';

export default {
  title: 'component/Polls/YesNoPoll',
  component: YesNoPoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<YesNoPollProps> = (args) => <YesNoPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Do you like this feature?',
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
  onVote: (vote) => console.log(`Voted: ${vote}`),
};

export const ResultsVisible = Template.bind({});
ResultsVisible.args = {
  ...Default.args,
  showResults: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};