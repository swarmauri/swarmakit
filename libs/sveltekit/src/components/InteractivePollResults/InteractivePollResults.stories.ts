import InteractivePollResults from './InteractivePollResults.svelte';

export default {
  title: 'Indicators/InteractivePollResults',
  component: InteractivePollResults,
  argTypes: {
    options: {
      control: { type: 'object' },
    },
    totalVotes: {
      control: { type: 'number' },
    },
    status: {
      control: { type: 'select', options: ['live', 'completed', 'closed'] },
    },
  },
};

const Template = (args) => ({
  Component: InteractivePollResults,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', votes: 30 },
    { label: 'Option 2', votes: 70 },
  ],
  totalVotes: 100,
  status: 'live',
};

export const LiveResults = Template.bind({});
LiveResults.args = {
  options: [
    { label: 'Option 1', votes: 30 },
    { label: 'Option 2', votes: 70 },
  ],
  totalVotes: 100,
  status: 'live',
};

export const Completed = Template.bind({});
Completed.args = {
  options: [
    { label: 'Option 1', votes: 50 },
    { label: 'Option 2', votes: 50 },
  ],
  totalVotes: 100,
  status: 'completed',
};

export const Closed = Template.bind({});
Closed.args = {
  options: [
    { label: 'Option 1', votes: 50 },
    { label: 'Option 2', votes: 50 },
  ],
  totalVotes: 100,
  status: 'closed',
};