import React from 'react';
import { Meta, Story } from '@storybook/react';
import SliderPoll, { SliderPollProps } from './SliderPoll';

export default {
  title: 'component/Polls/SliderPoll',
  component: SliderPoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SliderPollProps> = (args) => <SliderPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'How would you rate this service?',
  min: 1,
  max: 100,
  step: 1,
  disabled: false,
  showResults: false,
  onValueChange: () => {},
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
  onValueChange: (value) => console.log(`Selected: ${value}`),
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