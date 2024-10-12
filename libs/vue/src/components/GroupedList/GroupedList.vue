<template>
  <div class="grouped-list" role="list">
    <div
      v-for="(group, index) in groups"
      :key="index"
      class="group"
      @click="toggleGroup(index)"
      :aria-expanded="expandedGroups[index]"
    >
      <div class="group-header" role="heading" aria-level="2">
        {{ group.title }}
      </div>
      <ul v-if="expandedGroups[index]" class="group-items" role="list">
        <li
          v-for="(item, itemIndex) in group.items"
          :key="itemIndex"
          class="group-item"
          role="listitem"
          @click.stop="selectItem(group.title, item)"
          :class="{ selected: selectedItem === item }"
          @mouseenter="hoveredItem = item"
          @mouseleave="hoveredItem = null"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Group {
  title: string;
  items: string[];
}

export default defineComponent({
  name: 'GroupedList',
  props: {
    groups: {
      type: Array as () => Group[],
      default: () => [],
    },
  },
  setup() {
    const expandedGroups = ref<boolean[]>([]);
    const selectedItem = ref<string | null>(null);
    const hoveredItem = ref<string | null>(null);

    const toggleGroup = (index: number) => {
      expandedGroups.value[index] = !expandedGroups.value[index];
    };

    const selectItem = (groupTitle: string, item: string) => {
      selectedItem.value = item;
    };

    return {
      expandedGroups,
      toggleGroup,
      selectItem,
      selectedItem,
      hoveredItem,
    };
  },
});
</script>

<style lang="css">
@import './GroupedList.css';
</style>