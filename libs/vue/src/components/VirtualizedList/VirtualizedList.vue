<template>
  <div class="virtualized-list" role="list">
    <div
      v-for="item in visibleItems"
      :key="item.id"
      class="list-item"
      role="listitem"
    >
      {{ item.content }}
    </div>
    <div v-if="loading" class="loading-indicator" aria-live="polite">
      Loading more items...
    </div>
    <div v-else-if="endOfList" class="end-of-list" aria-live="polite">
      End of List
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface ListItem {
  id: number;
  content: string;
}

export default defineComponent({
  name: 'VirtualizedList',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    endOfList: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const visibleItems = ref<ListItem[]>([]);

    onMounted(() => {
      visibleItems.value = props.items.slice(0, 20);
    });

    return { visibleItems };
  },
});
</script>

<style lang="css">
@import './VirtualizedList.css';
</style>