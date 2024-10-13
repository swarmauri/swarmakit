import BadgeWithCounts from './BadgeWithCounts.svelte';

export default {
  title: 'Indicators/BadgeWithCounts',
  component: BadgeWithCounts,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    count: 0,
    maxCount: 99,
  },
};

export const Zero = {
  args: {
    count: 0,
    maxCount: 99,
  },
};

export const Active = {
  args: {
    count: 5,
    maxCount: 99,
  },
};

export const Overflow = {
  args: {
    count: 150,
    maxCount: 99,
  },
};