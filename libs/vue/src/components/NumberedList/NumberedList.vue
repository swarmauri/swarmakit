
<template>
  <ol class="numbered-list" role="list" aria-label="Numbered Items">
    <li
      v-for="(item) in items"
      :key="item.value"
      :class="['list-item', { selected: selectedItem === item.value, disabled: item.disabled }]"
      @click="selectItem(item)"
      @mouseover="hoveredItem = item.value"
      @mouseleave="hoveredItem = null"
      :aria-disabled="item.disabled"
    >
      {{ item.label }}
    </li>
  </ol>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Item {
  value: string;
  label: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'NumberedList',
  props: {
    items: {
      type: Array as () => Item[],
      required: true,
    },
  },
  setup() {
    const selectedItem = ref<string | null>(null);
    const hoveredItem = ref<string | null>(null);

    const selectItem = (item: Item) => {
      if (item.disabled) return;
      selectedItem.value = item.value;
    };

    return { selectedItem, hoveredItem, selectItem };
  },
});
</script>




<style scoped lang="css">
@import './NumberedList.css';
</style>
