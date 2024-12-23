
<template>
  <div class="scrollable-list" :aria-disabled="disabled ? 'true' : 'false'">
    <ul class="scrollable-list-items" @scroll="onScroll" ref="listRef">
      <li
        v-for="item in items"
        :key="item.id"
        :class="['scrollable-list-item', { disabled: disabled, hover: item.id === hoveredItem }]"
        @mouseover="hoveredItem = item.id"
        @mouseleave="hoveredItem = null"
      >
        {{ item.label }}
      </li>
    </ul>
    <div v-if="endOfList" class="end-of-list-message">End of List</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ListItem {
  id: number;
  label: string;
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
    const endOfList = ref(false);
    const listRef = ref<HTMLElement | null>(null);

    const onScroll = () => {
      if (listRef.value) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.value;
        endOfList.value = scrollTop + clientHeight >= scrollHeight;
      }
    };

    return { hoveredItem, endOfList, onScroll, listRef };
  },
});
</script>




<style scoped lang="css">
@import './ScrollableList.css';
</style>
