<template>
  <div>
    <h2>Event Scheduler</h2>

    <!-- Display feedback message -->
    <p v-if="feedbackMessage">{{ feedbackMessage }}</p>

    <!-- Render each event using the Event component -->
    <Event
      v-for="event in events"
      :key="event.id"
      :event="event"
      @edit="handleEditEvent"
      @delete="handleDeleteEvent"
    />

    <button @click="handleAddNewEvent({ id: newEventId, title: 'New Event', date: '2024-11-01' })">
      Add New Event
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Event from './Event.vue'; // Import the Event component



export default defineComponent({
  name: 'AdminViewScheduler',
  components: { Event },
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
      { id: 2, title: 'Project Deadline', date: '2024-10-25' },
    ]);

    // Generate a new event ID for simplicity
    const newEventId = ref(events.value.length + 1);

    const handleAddNewEvent = (event: Event) => {
      props.addNewEvent(event);
      events.value.push(event);
      newEventId.value++;
    };

    const handleEditEvent = (updatedEvent: Event) => {
      const index = events.value.findIndex(event => event.id === updatedEvent.id);
      if (index !== -1) {
        events.value[index] = updatedEvent;
      }
      props.editEvent(updatedEvent);
    };

    const handleDeleteEvent = (eventId: number) => {
      events.value = events.value.filter(event => event.id !== eventId);
      props.deleteEvent(eventId);
    };

    return {
      events,
      newEventId,
      feedbackMessage: props.feedbackMessage,
      handleAddNewEvent,
      handleEditEvent,
      handleDeleteEvent,
    };
  },
});
</script>

