import React from 'react';
import InteractivePollResults from './InteractivePollResults';

export default {
  title: 'Indicators/InteractivePollResults',
  component: InteractivePollResults,
};

const Template = (args) => <InteractivePollResults {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option A', votes: 50, color: '#3498db' },
    { label: 'Option B', votes: 30, color: '#2ecc71' },
  ],
  totalVotes: 80,
  status: 'Live Results',
};

export const LiveResults = Template.bind({});
LiveResults.args = {
  options: [
    { label: 'Option A', votes: 60, color: '#3498db' },
    { label: 'Option B', votes: 40, color: '#2ecc71' },
  ],
  totalVotes: 100,
  status: 'Live Results',
};

export const Completed = Template.bind({});
Completed.args = {
  options: [
    { label: 'Option A', votes: 70, color: '#3498db' },
    { label: 'Option B', votes: 30, color: '#2ecc71' },
  ],
  totalVotes: 100,
  status: 'Completed',
};

export const Closed = Template.bind({});
Closed.args = {
  options: [
    { label: 'Option A', votes: 50, color: '#3498db' },
    { label: 'Option B', votes: 50, color: '#2ecc71' },
  ],
  totalVotes: 100,
  status: 'Closed',
};