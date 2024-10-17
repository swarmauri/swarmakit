import { Meta, StoryFn } from '@storybook/vue3';
import AdminViewScheduler from './AdminViewScheduler.vue';

// Define an Event type (this can be shared from the component)
interface Event {
  id: number;
  title: string;
  date: string;
}

export default {
  title: 'component/Scheduling/AdminViewScheduler',
  component: AdminViewScheduler,
  tags: ['autodocs'],
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
  feedbackMessage: 'Event added successfully!',
  addNewEvent: (event: Event) => {
    console.log('Custom addNewEvent function called', event);
  },
};

export const EventEdited = Template.bind({});
EventEdited.args = {
  feedbackMessage: 'Event "Team Meeting" edited successfully!',
  editEvent: (event: Event) => {
    console.log(`Custom editEvent function called for event: ${event.title}`);
  },
};

export const EventDeleted = Template.bind({});
EventDeleted.args = {
  feedbackMessage: 'Event deleted successfully!',
  deleteEvent: (eventId: number) => {
    console.log(`Custom deleteEvent function called for event ID: ${eventId}`);
  },
};
