<template>
  <div class="data-grid" role="grid" aria-rowcount="items.length">
    <div class="grid-header" role="row">
      <div
        v-for="column in columns"
        :key="column"
        class="grid-header-cell"
        role="columnheader"
        @mousedown="initResize"
      >
        {{ column }}
      </div>
    </div>
    <div
      v-for="(item, rowIndex) in paginatedItems"
      :key="rowIndex"
      class="grid-row"
      role="row"
    >
      <div
        v-for="column in columns"
        :key="column"
        class="grid-cell"
        role="gridcell"
      >
        {{ item[column] }}
      </div>
    </div>
    <div v-if="isPaginated" class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface Item {
  [key: string]: string;
}

export default defineComponent({
  name: 'DataGrid',
  props: {
    columns: {
      type: Array as () => string[],
      default: () => [],
    },
    items: {
      type: Array as () => Item[],
      default: () => [],
    },
    isPaginated: {
      type: Boolean,
      default: false,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    const currentPage = ref(1);

    const totalPages = computed(() => {
      return Math.ceil(props.items.length / props.itemsPerPage);
    });

    const paginatedItems = computed(() => {
      if (!props.isPaginated) return props.items;
      const start = (currentPage.value - 1) * props.itemsPerPage;
      const end = start + props.itemsPerPage;
      return props.items.slice(start, end);
    });

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value -= 1;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value += 1;
    };

    const initResize = (e: MouseEvent) => {
      // Resizing logic can be implemented here
    };

    return {
      currentPage,
      totalPages,
      paginatedItems,
      prevPage,
      nextPage,
      initResize,
    };
  },
});
</script>

<style lang="css">
@import './DataGrid.css';
</style>