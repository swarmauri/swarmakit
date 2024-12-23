
<template>
  <ul class="pinned-list">
    <li
      v-for="item in items"
      :key="item.id"
      :class="[
        'pinned-list-item',
        { pinned: item.pinned, selected: item.id === selectedItem, hover: item.id === hoveredItem }
      ]"
      @click="selectItem(item.id)"
      @mouseover="hoveredItem = item.id"
      @mouseleave="hoveredItem = null"
      :aria-selected="item.id === selectedItem ? 'true' : 'false'"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';

interface ListItem {
  id: number;
  label: string;
  pinned: boolean;
}

export default defineComponent({
  name: 'PinnedList',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
    selectedItem: {
      type: Number,
      required: true,
    },
  },
  setup(_, { emit }) {
    const hoveredItem = ref<number | null>(null);

    const selectItem = (id: number) => {
      emit('update:selectedItem', id);
    };

    return { hoveredItem, selectItem };
  },
});
</script>




<style scoped lang="css">
@import './PinnedList.css';
</style>
