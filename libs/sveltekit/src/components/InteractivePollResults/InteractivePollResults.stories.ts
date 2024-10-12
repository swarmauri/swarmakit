import InteractivePollResults from './InteractivePollResults.svelte';

export default {
  title: 'Components/Indicators/InteractivePollResults',
  component: InteractivePollResults,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    isClosed: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: InteractivePollResults,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    { option: 'Option A', votes: 10 },
    { option: 'Option B', votes: 20 },
    { option: 'Option C', votes: 5 },
  ],
  isClosed: false,
};

export const LiveResults = Template.bind({});
LiveResults.args = {
  options: [
    { option: 'Option A', votes: 15 },
    { option: 'Option B', votes: 25 },
    { option: 'Option C', votes: 10 },
  ],
  isClosed: false,
};

export const Completed = Template.bind({});
Completed.args = {
  options: [
    { option: 'Option A', votes: 30 },
    { option: 'Option B', votes: 45 },
    { option: 'Option C', votes: 25 },
  ],
  isClosed: true,
};

export const Closed = Template.bind({});
Closed.args = {
  options: [
    { option: 'Option A', votes: 30 },
    { option: 'Option B', votes: 45 },
    { option: 'Option C', votes: 25 },
  ],
  isClosed: true,
};