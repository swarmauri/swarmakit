<template>
  <div class="chips-container" role="list">
    <div
      v-for="(chip, index) in chips"
      :key="index"
      class="chip"
      :class="{ selectable, removable }"
      role="listitem"
      @click="toggleSelect(index)"
      @keydown.enter="toggleSelect(index)"
      tabindex="0"
      aria-selected="selectable && chip.isSelected"
    >
      <span>{{ chip.label }}</span>
      <button
        v-if="removable"
        class="remove-btn"
        @click.stop="removeChip(index)"
        aria-label="Remove chip"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'Chips',
  props: {
    items: {
      type: Array as () => Array<{ label: string }>,
      required: true,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    removable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const chips = reactive(
      props.items.map(item => ({ ...item, isSelected: false }))
    );

    const toggleSelect = (index: number) => {
      if (props.selectable) {
        chips[index].isSelected = !chips[index].isSelected;
      }
    };

    const removeChip = (index: number) => {
      chips.splice(index, 1);
    };

    return { chips, toggleSelect, removeChip };
  },
});
</script>

<style lang="css">
@import './Chips.css';
</style>