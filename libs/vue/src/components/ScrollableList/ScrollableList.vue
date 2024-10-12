<template>
  <div class="scrollable-list" role="region" aria-label="Scrollable List">
    <ul
      class="list"
      role="list"
      @scroll="handleScroll"
      :aria-disabled="disabled"
    >
      <li
        v-for="item in items"
        :key="item.id"
        class="list-item"
        :class="{ hover: hoveredItem === item.id }"
        @mouseover="hoveredItem = item.id"
        @mouseleave="hoveredItem = null"
        role="listitem"
      >
        {{ item.name }}
      </li>
    </ul>
    <p v-if="endOfList" class="end-of-list">End of List</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ListItem {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'ScrollableList',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const hoveredItem = ref<number | null>(null);
    const endOfList = ref<boolean>(false);

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.scrollHeight - target.scrollTop === target.clientHeight) {
        endOfList.value = true;
      } else {
        endOfList.value = false;
      }
    };

    return { hoveredItem, endOfList, handleScroll };
  },
});
</script>

<style lang="css">
@import './ScrollableList.css';
</style>