<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'; // Ensure 'PropType' is imported
import { Event } from '../types/types'; // Ensure this path is correct

export default defineComponent({
  name: 'AdminViewScheduler',
  props: {
    feedbackMessage: {
      type: String,
      required: false,
      default: '',
    },
    addNewEvent: {
      type: Function as PropType<(event: Event) => void>,
      required: false,
      default: (event: Event) => {
        console.log('Default addNewEvent function', event);
      },
    },
    editEvent: {
      type: Function as PropType<(event: Event) => void>,
      required: false,
      default: (event: Event) => {
        console.log(`Default editEvent function: Editing ${event.title}`);
      },
    },
    deleteEvent: {
      type: Function as PropType<(eventId: number) => void>,
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

    const currentEditingId = ref<number | null>(null);
    const editedTitle = ref<string>('');
    const editedDate = ref<string>('');

    const newEventId = ref(events.value.length + 1);

    const handleAddNewEvent = (event: Event) => {
      props.addNewEvent(event);
      events.value.push(event);
      newEventId.value++;
    };

    const handleEditEvent = (event: Event) => {
      const index = events.value.findIndex((e) => e.id === event.id);
      if (index !== -1) {
        events.value[index] = { ...event };
        props.editEvent(event);
      }
    };

    const handleDeleteEvent = (eventId: number) => {
      events.value = events.value.filter((event) => event.id !== eventId);
      props.deleteEvent(eventId);
    };

    const startEdit = (eventId: number) => {
      currentEditingId.value = eventId;
      const event = events.value.find((e) => e.id === eventId);
      if (event) {
        editedTitle.value = event.title;
        editedDate.value = event.date;
      }
    };

    const saveEdit = (eventId: number) => {
      if (currentEditingId.value === eventId) {
        handleEditEvent({
          id: eventId,
          title: editedTitle.value,
          date: editedDate.value,
        });
        currentEditingId.value = null;
      }
    };

    const cancelEdit = () => {
      currentEditingId.value = null;
    };

    const isEditing = (eventId: number) => {
      return currentEditingId.value === eventId;
    };

    return {
      events,
      newEventId,
      editedTitle,
      editedDate,
      feedbackMessage: props.feedbackMessage,
      handleAddNewEvent,
      handleEditEvent,
      handleDeleteEvent,
      startEdit,
      saveEdit,
      cancelEdit,
      isEditing,
    };
  },
});
</script>
