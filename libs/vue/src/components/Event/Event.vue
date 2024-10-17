<template>
  <div class="event">
    <div v-if="!isEditing">
      <h3>{{ event.title }}</h3>
      <p>{{ event.date }}</p>
      <button @click="startEdit">Edit</button>
      <button @click="deleteEvent">Delete</button>
    </div>
    <div v-else>
      <input v-model="editedTitle" placeholder="Edit title" />
      <input v-model="editedDate" type="date" placeholder="Edit date" />
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import './Event.css'; // Import external CSS file

// Define an Event type
interface Event {
  id: number;
  title: string;
  date: string;
}

export default defineComponent({
  name: 'Event',
  props: {
    event: {
      type: Object as () => Event,
      required: true,
    },
  },
  emits: ['edit', 'delete'],
  setup(props, { emit }) {
    const isEditing = ref(false);
    const editedTitle = ref(props.event.title);
    const editedDate = ref(props.event.date);

    // Start editing
    const startEdit = () => {
      isEditing.value = true;
    };

    // Save the edited event
    const saveEdit = () => {
      const editedEvent = {
        ...props.event,
        title: editedTitle.value,
        date: editedDate.value,
      };
      emit('edit', editedEvent);
      isEditing.value = false;
    };

    // Cancel editing
    const cancelEdit = () => {
      isEditing.value = false;
      editedTitle.value = props.event.title; // Reset values
      editedDate.value = props.event.date;
    };

    // Delete the event
    const deleteEvent = () => {
      emit('delete', props.event.id);
    };

    return {
      isEditing,
      editedTitle,
      editedDate,
      startEdit,
      saveEdit,
      cancelEdit,
      deleteEvent,
    };
  },
});
</script>

