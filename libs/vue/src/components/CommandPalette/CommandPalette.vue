
<template>
  <div
    v-show="isOpen"
    class="command-palette"
    role="dialog"
    aria-modal="true"
    aria-labelledby="command-palette-title"
  >
    <div class="command-palette-content">
      <input
        type="text"
        v-model="searchQuery"
        class="command-palette-input"
        placeholder="Type a command..."
        aria-controls="command-list"
        @keydown.arrow-down.prevent="focusNext"
        @keydown.arrow-up.prevent="focusPrev"
      />
      <ul id="command-list" class="command-list" role="listbox">
        <li
          v-for="(command, index) in filteredCommands"
          :key="command.id"
          :class="{ active: index === activeIndex }"
          role="option"
          tabindex="0"
          @click="selectCommand(command)"
          @keydown.enter.prevent="selectCommand(command)"
          @keydown.space.prevent="selectCommand(command)"
        >
          {{ command.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';

interface Command {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'CommandPalette',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const searchQuery = ref('');
    const commands = ref<Command[]>([
      { id: 1, name: 'Command 1' },
      { id: 2, name: 'Command 2' },
      { id: 3, name: 'Command 3' },
    ]);
    const activeIndex = ref(0);

    const filteredCommands = computed(() =>
      commands.value.filter(command =>
        command.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    const focusNext = () => {
      if (activeIndex.value < filteredCommands.value.length - 1) {
        activeIndex.value++;
      }
    };

    const focusPrev = () => {
      if (activeIndex.value > 0) {
        activeIndex.value--;
      }
    };

    const selectCommand = (command: Command) => {
      console.log('Selected command:', command.name);
    };

    onMounted(() => {
      if (filteredCommands.value.length > 0) {
        activeIndex.value = 0;
      }
    });

    return { searchQuery, filteredCommands, activeIndex, focusNext, focusPrev, selectCommand };
  },
});
</script>




<style scoped lang="css">
@import './CommandPalette.css';
</style>
