<template>
  <ul class="sortable-list" role="list" aria-label="Sortable List">
    <li
      v-for="(item, index) in items"
      :key="item.id"
      class="list-item"
      :class="{ dragging: isDragging && dragIndex === index, disabled: item.disabled }"
      draggable="true"
      @dragstart="onDragStart(index)"
      @dragover.prevent
      @dragenter.prevent="onDragEnter(index)"
      @dragend="onDragEnd"
      role="listitem"
      :aria-disabled="item.disabled"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface ListItem {
  id: number;
  label: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'SortableList',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
  },
  setup(props, { emit }) {
    const sortedItems = ref<ListItem[]>([...props.items]);
    const isDragging = ref(false);
    const dragIndex = ref<number | null>(null);

    const onDragStart = (index: number) => {
      if (sortedItems.value[index].disabled) return;
      isDragging.value = true;
      dragIndex.value = index;
    };

    const onDragEnter = (index: number) => {
      if (isDragging.value && dragIndex.value !== null && dragIndex.value !== index) {
        const draggedItem = sortedItems.value[dragIndex.value];
        sortedItems.value.splice(dragIndex.value, 1);
        sortedItems.value.splice(index, 0, draggedItem);
        dragIndex.value = index;
      }
    };

    const onDragEnd = () => {
      isDragging.value = false;
      dragIndex.value = null;
      emit('update:items', sortedItems.value);
    };

    watch(() => props.items, (newItems) => {
      sortedItems.value = [...newItems];
    });

    return { sortedItems, isDragging, dragIndex, onDragStart, onDragEnter, onDragEnd };
  },
});
</script>

<style lang="css">
@import './SortableList.css';
</style>