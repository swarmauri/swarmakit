import React from 'react';
import { Meta, Story } from '@storybook/react';
import EmojiReactionPoll, { EmojiReactionPollProps } from './EmojiReactionPoll';

export default {
  title: 'component/Polls/EmojiReactionPoll',
  component: EmojiReactionPoll,
  tags: ['autodocs'],
} as Meta;

const Template: Story<EmojiReactionPollProps> = (args) => <EmojiReactionPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'How do you feel about this topic?',
  emojis: ['😀', '😐', '😢', '😡'],
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
  onReact: (emoji) => console.log(`Reacted with: ${emoji}`),
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