import BadgeWithCounts from './BadgeWithCounts.svelte';

export default {
  title: 'Components/Indicators/BadgeWithCounts',
  component: BadgeWithCounts,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    maxCount: { control: 'number' },
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
  count: 10,
  maxCount: 99,
};

export const Overflow = Template.bind({});
Overflow.args = {
  count: 150,
  maxCount: 99,
};