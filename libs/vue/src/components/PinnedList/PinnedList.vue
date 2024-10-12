<template>
  <ul class="pinned-list" role="list">
    <li
      v-for="item in items"
      :key="item.id"
      :class="['list-item', { pinned: item.pinned, selected: selectedItem === item.id }]"
      @click="togglePin(item.id)"
      @mouseover="hoveredItem = item.id"
      @mouseleave="hoveredItem = null"
      :aria-selected="selectedItem === item.id"
      role="listitem"
    >
      <span>{{ item.name }}</span>
      <button
        class="pin-button"
        @click.stop="togglePin(item.id)"
        :aria-label="item.pinned ? 'Unpin item' : 'Pin item'"
      >
        {{ item.pinned ? '📌' : '📍' }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ListItem {
  id: number;
  name: string;
  pinned: boolean;
}

export default defineComponent({
  name: 'PinnedList',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
  },
  setup() {
    const hoveredItem = ref<number | null>(null);
    const selectedItem = ref<number | null>(null);

    const togglePin = (id: number) => {
      const item = items.value.find((item) => item.id === id);
      if (item) {
        item.pinned = !item.pinned;
      }
    };

    return { hoveredItem, selectedItem, togglePin };
  },
});
</script>

<style lang="css">
@import './PinnedList.css';
</style>