<template>
  <ul class="expandable-list" role="list">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="list-item"
      :class="{ expanded: expandedIndex === index, selected: selectedIndex === index }"
      role="listitem"
      @click="toggleExpand(index)"
      @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = -1"
      tabindex="0"
      :aria-expanded="expandedIndex === index"
    >
      <div class="item-header">{{ item.title }}</div>
      <div v-if="expandedIndex === index" class="item-content">{{ item.content }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Item {
  title: string;
  content: string;
}

export default defineComponent({
  name: 'ExpandableList',
  props: {
    items: {
      type: Array as () => Item[],
      default: () => [],
    },
  },
  setup() {
    const expandedIndex = ref(-1);
    const hoverIndex = ref(-1);
    const selectedIndex = ref(-1);

    const toggleExpand = (index: number) => {
      if (expandedIndex.value === index) {
        expandedIndex.value = -1;
        selectedIndex.value = -1;
      } else {
        expandedIndex.value = index;
        selectedIndex.value = index;
      }
    };

    return {
      expandedIndex,
      hoverIndex,
      selectedIndex,
      toggleExpand,
    };
  },
});
</script>

<style lang="css">
@import './ExpandableList.css';
</style>