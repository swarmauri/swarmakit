<template>
  <div class="multiselect-list" role="listbox" aria-multiselectable="true">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="['list-item', { selected: selectedItems.includes(index) }]"
        @click="toggleSelection(index)"
        @mouseover="hoveredItem = index"
        @mouseleave="hoveredItem = null"
        :aria-selected="selectedItems.includes(index)"
        :tabindex="disabled ? -1 : 0"
        role="option"
        :aria-disabled="disabled"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MultiselectList',
  props: {
    items: {
      type: Array as () => string[],
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const selectedItems = ref<number[]>([]);
    const hoveredItem = ref<number | null>(null);

    const toggleSelection = (index: number) => {
      if (!selectedItems.value.includes(index)) {
        selectedItems.value.push(index);
      } else {
        selectedItems.value = selectedItems.value.filter((i) => i !== index);
      }
    };

    return { selectedItems, toggleSelection, hoveredItem };
  },
});
</script>

<style lang="css">
@import './MultiselectList.css';
</style>