
<template>
  <div class="chip-container" role="list">
    <div
      v-for="(chip, index) in chips"
      :key="index"
      class="chip"
      :class="{ selectable, removable }"
      @click="toggleSelect(index)"
      role="listitem"
      tabindex="0"
      :aria-pressed="chip.selected"
    >
      <span>{{ chip.label }}</span>
      <button
        v-if="removable"
        class="remove-button"
        aria-label="Remove chip"
        @click.stop="removeChip(index)"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Chip {
  label: string;
  selected: boolean;
}

export default defineComponent({
  name: 'Chips',
  props: {
    selectable: {
      type: Boolean,
      default: false,
    },
    removable: {
      type: Boolean,
      default: false,
    },
    grouped: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const chips = ref<Chip[]>([
      { label: 'Chip 1', selected: false },
      { label: 'Chip 2', selected: false },
      { label: 'Chip 3', selected: false },
    ]);

    const toggleSelect = (index: number) => {
      chips.value[index].selected = !chips.value[index].selected;
    };

    const removeChip = (index: number) => {
      chips.value.splice(index, 1);
    };

    return { chips, toggleSelect, removeChip };
  },
});
</script>




<style scoped lang="css">
@import './Chips.css';
</style>
