<template>
  <div class="filterable-list">
    <input
      v-model="filterText"
      class="filter-input"
      type="text"
      placeholder="Filter items..."
      aria-label="Filter items"
    />
    <button @click="clearFilter" class="clear-button" aria-label="Clear filter">
      Clear
    </button>
    <ul class="list" role="list">
      <li
        v-for="(item, index) in filteredItems"
        :key="index"
        class="list-item"
        role="listitem"
      >
        {{ item }}
      </li>
      <li v-if="filteredItems.length === 0" class="no-results" role="listitem">
        No results found
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'FilterableList',
  props: {
    items: {
      type: Array as () => string[],
      default: () => [],
    },
  },
  setup(props) {
    const filterText = ref('');

    const filteredItems = computed(() => {
      if (!filterText.value) return props.items;
      return props.items.filter(item =>
        item.toLowerCase().includes(filterText.value.toLowerCase())
      );
    });

    const clearFilter = () => {
      filterText.value = '';
    };

    return {
      filterText,
      filteredItems,
      clearFilter,
    };
  },
});
</script>

<style lang="css">
@import './FilterableList.css';
</style>