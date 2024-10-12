<template>
  <div class="numbered-list" role="list">
    <ol>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="['list-item', { selected: selectedItem === index }]"
        @click="selectItem(index)"
        @mouseover="hoveredItem = index"
        @mouseleave="hoveredItem = null"
        :aria-selected="selectedItem === index"
        :tabindex="disabled ? -1 : 0"
        :aria-disabled="disabled"
        role="listitem"
      >
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NumberedList',
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
    const selectedItem = ref<number | null>(null);
    const hoveredItem = ref<number | null>(null);

    const selectItem = (index: number) => {
      if (!disabled) {
        selectedItem.value = index;
      }
    };

    return { selectedItem, selectItem, hoveredItem };
  },
});
</script>

<style lang="css">
@import './NumberedList.css';
</style>