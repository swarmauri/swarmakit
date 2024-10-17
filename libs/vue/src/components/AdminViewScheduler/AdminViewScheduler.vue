<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { Event } from './types'; // Assuming Event is imported from a shared type file or defined locally

// Define an Event type if not already defined globally
interface Event {
  id: number;
  title: string;
  date: string;
}

export default defineComponent({
  name: 'AdminViewScheduler',
  props: {
    feedbackMessage: {
      type: String,
      required: false,
      default: '',
    },
    addNewEvent: {
      type: Function as PropType<(event: Event) => void>, // Correctly typed function
      required: false,
      default: (event: Event) => {
        console.log('Default addNewEvent function', event);
      },
    },
    editEvent: {
      type: Function as PropType<(event: Event) => void>, // Correctly typed function
      required: false,
      default: (event: Event) => {
        console.log(`Default editEvent function: Editing ${event.title}`);
      },
    },
    deleteEvent: {
      type: Function as PropType<(eventId: number) => void>, // Correctly typed function for eventId
      required: false,
      default: (eventId: number) => {
        console.log(`Default deleteEvent function: Deleting event with id ${eventId}`);
      },
    },
  },
  setup(props) {
    const events = ref<Event[]>([
      { id: 1, title: 'Team Meeting', date: '2024-10-21' },
      // Other events can be added here
    ]);

    const handleAddNewEvent = (event: Event) => {
      if (props.addNewEvent) {
        props.addNewEvent(event);
      }
    };

    const handleEditEvent = (event: Event) => {
      if (props.editEvent) {
        props.editEvent(event);
      }
    };

    const handleDeleteEvent = (eventId: number) => {
      if (props.deleteEvent) {
        props.deleteEvent(eventId);
      }
    };

    return {
      events,
      feedbackMessage: props.feedbackMessage,
      handleAddNewEvent,
      handleEditEvent,
      handleDeleteEvent,
    };
  },
});
</script>
