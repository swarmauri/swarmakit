import BadgeWithCounts from './BadgeWithCounts.vue';

export default {
  title: 'Indicators/BadgeWithCounts',
  component: BadgeWithCounts,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number' },
      description: 'The count number displayed in the badge',
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum number before overflow occurs',
    },
  },
};

const Template = (args: any) => ({
  components: { BadgeWithCounts },
  setup() {
    return { args };
  },
  template: '<BadgeWithCounts v-bind="args">{{ args.default }}</BadgeWithCounts>',
});

export const Default = Template.bind({});
Default.args = {
  count: 10,
  default: 'Messages',
};

export const Zero = Template.bind({});
Zero.args = {
  count: 0,
  default: 'Notifications',
};

export const Active = Template.bind({});
Active.args = {
  count: 5,
  default: 'Active Tasks',
};

export const Overflow = Template.bind({});
Overflow.args = {
  count: 120,
  max: 99,
  default: 'Mentions',
};