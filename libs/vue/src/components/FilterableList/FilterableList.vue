
<template>
  <div class="filterable-list">
    <input
      type="text"
      v-model="filterText"
      placeholder="Filter items..."
      aria-label="Filter items"
      class="filter-input"
    />
    <button @click="clearFilter" class="clear-button">Clear Filter</button>
    <ul role="list" aria-label="Filtered list">
      <li
        v-for="(item, index) in filteredItems"
        :key="index"
        class="list-item"
      >
        {{ item }}
      </li>
    </ul>
    <p v-if="filteredItems.length === 0" class="no-results">No results found</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'FilterableList',
  props: {
    items: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const filterText = ref('');

    const filteredItems = computed(() =>
      props.items.filter((item) =>
        item.toLowerCase().includes(filterText.value.toLowerCase())
      )
    );

    const clearFilter = () => {
      filterText.value = '';
    };

    return { filterText, filteredItems, clearFilter };
  },
});
</script>




<style scoped lang="css">
@import './FilterableList.css';
</style>
