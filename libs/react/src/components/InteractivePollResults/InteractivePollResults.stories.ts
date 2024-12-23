import React from 'react';
import { Meta, Story } from '@storybook/react';
import InteractivePollResults from './InteractivePollResults';

export default {
  title: 'component/Indicators/InteractivePollResults',
  component: InteractivePollResults,
  tags: ['autodocs'],
} as Meta;

const options = [
  { id: 1, text: 'Option A', votes: 30 },
  { id: 2, text: 'Option B', votes: 50 },
  { id: 3, text: 'Option C', votes: 20 },
];

const totalVotes = options.reduce((acc, option) => acc + option.votes, 0);

const Template: Story = (args) => <InteractivePollResults {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
  totalVotes,
  status: 'Live',
};

export const LiveResults = Template.bind({});
LiveResults.args = {
  options,
  totalVotes,
  status: 'Live',
};

export const Completed = Template.bind({});
Completed.args = {
  options,
  totalVotes,
  status: 'Completed',
};

export const Closed = Template.bind({});
Closed.args = {
  options,
  totalVotes,
  status: 'Closed',
};