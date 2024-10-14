import { Meta, StoryFn } from '@storybook/vue3';
import AdminViewScheduler from './AdminViewScheduler.vue';

export default {
  title: 'component/Scheduling/AdminViewScheduler',
  component: AdminViewScheduler,
  tags: ['autodocs']
} as Meta<typeof AdminViewScheduler>;

const Template: StoryFn<typeof AdminViewScheduler> = (args) => ({
  components: { AdminViewScheduler },
  setup() {
    return { args };
  },
  template: '<AdminViewScheduler v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const EventAdded = Template.bind({});
EventAdded.args = {
  feedbackMessage: 'Event added successfully!'
};

export const EventEdited = Template.bind({});
EventEdited.args = {
  feedbackMessage: 'Event "Team Meeting" edited successfully!'
};

export const EventDeleted = Template.bind({});
EventDeleted.args = {
  feedbackMessage: 'Event deleted successfully!'
};