import { Meta, StoryFn } from '@storybook/vue3';
import Event from './Event.vue';

// Define an Event type to match the component prop
interface Event {
  id: number;
  title: string;
  date: string;
}

export default {
  title: 'Components/Event',
  component: Event,
  argTypes: {
    event: {
      control: 'object',
      description: 'Event object with id, title, and date',
    },
    // Since 'edit' and 'delete' are emitted, you can add actions in Storybook
    edit: { action: 'edit' },
    delete: { action: 'delete' },
  },
} as Meta<typeof Event>;

const Template: StoryFn<typeof Event> = (args) => ({
  components: { Event },
  setup() {
    return { args };
  },
  template: '<Event v-bind="args" @edit="args.edit" @delete="args.delete" />',
});

export const Default = Template.bind({});
Default.args = {
  event: {
    id: 1,
    title: 'Project Deadline',
    date: '2024-11-01',
  },
};

export const Editing = Template.bind({});
Editing.args = {
  event: {
    id: 2,
    title: 'Team Meeting',
    date: '2024-10-21',
  },
};

export const EventDeleted = Template.bind({});
EventDeleted.args = {
  event: {
    id: 3,
    title: 'Holiday Party',
    date: '2024-12-25',
  },
};

