import { Meta, StoryFn } from '@storybook/vue3';
import EventFilterBar from './EventFilterBar.vue';

export default {
  title: 'component/Scheduling/EventFilterBar',
  component: EventFilterBar,
  tags: ['autodocs']
} as Meta<typeof EventFilterBar>;

const Template: StoryFn<typeof EventFilterBar> = (args) => ({
  components: { EventFilterBar },
  setup() {
    return { args };
  },
  template: '<EventFilterBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  activeFilters: 'category: Conference, location: New York'
};

export const FilterCleared = Template.bind({});
FilterCleared.args = {
  activeFilters: ''
};