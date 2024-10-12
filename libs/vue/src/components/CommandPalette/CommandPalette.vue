<template>
  <div class="command-palette" :class="{ open: isOpen }" role="dialog" aria-modal="true" v-if="isOpen">
    <input
      type="text"
      class="command-input"
      v-model="query"
      @input="filterCommands"
      @keydown.down="navigate('down')"
      @keydown.up="navigate('up')"
      @keydown.enter="selectCommand"
      placeholder="Type a command..."
      aria-label="Command input"
    />
    <ul class="command-list" role="listbox">
      <li
        v-for="(command, index) in filteredCommands"
        :key="command.id"
        :class="{ 'active': activeIndex === index }"
        role="option"
        :aria-selected="activeIndex === index"
        @click="selectCommand(index)"
        @mouseenter="setActiveIndex(index)"
        tabindex="-1"
      >
        {{ command.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'CommandPalette',
  props: {
    commands: {
      type: Array as () => Array<{ id: number, name: string }>,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const query = ref('');
    const activeIndex = ref(-1);

    const filteredCommands = computed(() =>
      props.commands.filter(command =>
        command.name.toLowerCase().includes(query.value.toLowerCase())
      )
    );

    const filterCommands = () => {
      activeIndex.value = -1;
    };

    const navigate = (direction: 'up' | 'down') => {
      if (direction === 'down') {
        activeIndex.value = (activeIndex.value + 1) % filteredCommands.value.length;
      } else if (direction === 'up') {
        activeIndex.value = (activeIndex.value - 1 + filteredCommands.value.length) % filteredCommands.value.length;
      }
    };

    const selectCommand = (index = activeIndex.value) => {
      if (index >= 0 && index < filteredCommands.value.length) {
        alert(`Command Selected: ${filteredCommands.value[index].name}`);
        query.value = '';
      }
    };

    const setActiveIndex = (index: number) => {
      activeIndex.value = index;
    };

    return { query, filteredCommands, activeIndex, filterCommands, navigate, selectCommand, setActiveIndex };
  },
});
</script>

<style lang="css">
@import './CommandPalette.css';
</style>