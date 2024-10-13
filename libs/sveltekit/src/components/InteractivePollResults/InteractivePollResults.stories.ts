import InteractivePollResults from './InteractivePollResults.svelte';

export default {
  title: 'Indicators/InteractivePollResults',
  component: InteractivePollResults,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    options: [
      { id: 1, text: 'Option A', votes: 10 },
      { id: 2, text: 'Option B', votes: 20 },
      { id: 3, text: 'Option C', votes: 5 },
    ],
    totalVotes: 35,
    isClosed: false,
  },
};

export const LiveResults = {
  args: {
    options: [
      { id: 1, text: 'Option A', votes: 15 },
      { id: 2, text: 'Option B', votes: 25 },
      { id: 3, text: 'Option C', votes: 10 },
    ],
    totalVotes: 50,
    isClosed: false,
  },
};

export const Completed = {
  args: {
    options: [
      { id: 1, text: 'Option A', votes: 30 },
      { id: 2, text: 'Option B', votes: 50 },
      { id: 3, text: 'Option C', votes: 20 },
    ],
    totalVotes: 100,
    isClosed: true,
  },
};

export const Closed = {
  args: {
    options: [
      { id: 1, text: 'Option A', votes: 30 },
      { id: 2, text: 'Option B', votes: 50 },
      { id: 3, text: 'Option C', votes: 20 },
    ],
    totalVotes: 100,
    isClosed: true,
  },
};