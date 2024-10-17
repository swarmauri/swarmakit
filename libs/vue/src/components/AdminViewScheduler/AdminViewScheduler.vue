<script lang="ts">
import { defineComponent, ref } from 'vue';

// Define an Event type
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
      type: Function as () => (event: Event) => void,
      required: false,
      default: (event: Event) => {
        console.log('Default addNewEvent function', event);
      },
    },
    editEvent: {
      type: Function as () => (event: Event) => void,
      required: false,
      default: (event: Event) => {
        console.log(`Default editEvent function: Editing ${event.title}`);
      },
    },
    deleteEvent: {
      type: Function as () => (eventId: number) => void,
      required: false,
      default: (eventId: number) => {
        console.log(`Default deleteEvent function: Deleting event with id ${eventId}`);
      },
    },
  },
  setup(props) {
    const events = ref<Event[]>([
      { id: 1, title: 'Team Meeting', date: '2024-10-21' },
      // other events...
    ]);

    const handleAddNewEvent = (event: Event) => {
      props.addNewEvent(event);
    };

    const handleEditEvent = (event: Event) => {
      props.editEvent(event);
    };

    const handleDeleteEvent = (eventId: number) => {
      props.deleteEvent(eventId);
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
