
<template>
  <ul class="sortable-list" :aria-disabled="disabled">
    <li 
      v-for="(item, index) in items" 
      :key="item.id" 
      :draggable="!disabled" 
      @dragstart="onDragStart(index)" 
      @dragover.prevent 
      @drop="onDrop(index)"
      :class="{ dragging: draggingIndex === index }"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

interface ListItem {
  id: number;
  label: string;
}

export default defineComponent({
  name: 'SortableList',
  props: {
    items: {
      type: Array as PropType<ListItem[]>,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const draggingIndex = ref<number | null>(null);

    const onDragStart = (index: number) => {
      if (!props.disabled) {
        draggingIndex.value = index;
      }
    };

    const onDrop = (index: number) => {
      if (draggingIndex.value !== null && draggingIndex.value !== index && !props.disabled) {
        const item = props.items[draggingIndex.value];
        props.items.splice(draggingIndex.value, 1);
        props.items.splice(index, 0, item);
        draggingIndex.value = null;
      }
    };

    return { onDragStart, onDrop, draggingIndex };
  },
});
</script>




<style scoped lang="css">
@import './SortableList.css';
</style>
