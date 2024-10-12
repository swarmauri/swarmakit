import BadgeWithCounts from './BadgeWithCounts.svelte';

export default {
  title: 'Indicators/BadgeWithCounts',
  component: BadgeWithCounts,
  argTypes: {
    count: {
      control: { type: 'number' },
    },
    maxCount: {
      control: { type: 'number' },
    },
  },
};

const Template = (args) => ({
  Component: BadgeWithCounts,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  count: 5,
  maxCount: 99,
};

export const Zero = Template.bind({});
Zero.args = {
  count: 0,
  maxCount: 99,
};

export const Active = Template.bind({});
Active.args = {
  count: 27,
  maxCount: 99,
};

export const Overflow = Template.bind({});
Overflow.args = {
  count: 150,
  maxCount: 99,
};