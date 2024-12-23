
<template>
  <div class="expandable-list" role="list" aria-label="Expandable list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="list-item"
      :aria-expanded="selectedItem === index"
      @click="toggleItem(index)"
      @mouseover="hoverItem(index)"
      @mouseleave="hoverItem(null)"
    >
      <div class="item-header">
        {{ item.title }}
      </div>
      <div v-if="selectedItem === index" class="item-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ExpandableList',
  props: {
    items: {
      type: Array as () => Array<{ title: string; content: string }>,
      required: true,
    },
  },
  setup() {
    const selectedItem = ref<number | null>(null);
    const hoveredItem = ref<number | null>(null);

    const toggleItem = (index: number) => {
      selectedItem.value = selectedItem.value === index ? null : index;
    };

    const hoverItem = (index: number | null) => {
      hoveredItem.value = index;
    };

    return { selectedItem, hoveredItem, toggleItem, hoverItem };
  },
});
</script>




<style scoped lang="css">
@import './ExpandableList.css';
</style>
