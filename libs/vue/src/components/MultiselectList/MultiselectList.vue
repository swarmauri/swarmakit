
<template>
  <div class="multiselect-list" role="listbox" aria-multiselectable="true">
    <ul class="item-list" role="list" aria-label="Selectable Items">
      <li
        v-for="(item) in items"
        :key="item.value"
        :class="['list-item', { selected: selectedItems.includes(item.value), disabled: item.disabled }]"
        @click="toggleItemSelection(item)"
        @mouseover="hoveredItem = item.value"
        @mouseleave="hoveredItem = null"
        :aria-selected="selectedItems.includes(item.value)"
        :aria-disabled="item.disabled"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Item {
  value: string;
  label: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'MultiselectList',
  props: {
    items: {
      type: Array as () => Item[],
      required: true,
    },
  },
  setup() {
    const selectedItems = ref<string[]>([]);
    const hoveredItem = ref<string | null>(null);

    const toggleItemSelection = (item: Item) => {
      if (item.disabled) return;
      const index = selectedItems.value.indexOf(item.value);
      if (index === -1) {
        selectedItems.value.push(item.value);
      } else {
        selectedItems.value.splice(index, 1);
      }
    };

    return { selectedItems, hoveredItem, toggleItemSelection };
  },
});
</script>




<style scoped lang="css">
@import './MultiselectList.css';
</style>
