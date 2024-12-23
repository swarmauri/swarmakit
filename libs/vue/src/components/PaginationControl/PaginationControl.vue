
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'PaginationControl',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    rowsPerPageOptions: {
      type: Array as () => number[],
      default: () => [10, 20, 50, 100],
    },
  },
  emits: ['update:currentPage', 'update:rowsPerPage'],
  setup(props, { emit }) {
    const selectedRowsPerPage = ref(props.rowsPerPageOptions[0]);

    const isFirstPage = computed(() => props.currentPage === 1);
    const isLastPage = computed(() => props.currentPage === props.totalPages);

    const setPage = (page: number) => {
      if (page >= 1 && page <= props.totalPages) {
        emit('update:currentPage', page);
      }
    };

    const setRowsPerPage = (rows: number) => {
      selectedRowsPerPage.value = rows;
      emit('update:rowsPerPage', rows);
    };

    return {
      selectedRowsPerPage,
      isFirstPage,
      isLastPage,
      setPage,
      setRowsPerPage,
    };
  },
});
</script>

<template>
  <div class="pagination-control">
    <button @click="setPage(1)" :disabled="isFirstPage">First</button>
    <button @click="setPage(currentPage - 1)" :disabled="isFirstPage">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="setPage(currentPage + 1)" :disabled="isLastPage">Next</button>
    <button @click="setPage(totalPages)" :disabled="isLastPage">Last</button>
    <select v-model="selectedRowsPerPage" @change="setRowsPerPage(selectedRowsPerPage)">
      <option v-for="option in rowsPerPageOptions" :key="option" :value="option">
        {{ option }} rows per page
      </option>
    </select>
  </div>
</template>




<style scoped lang="css">
@import './PaginationControl.css';
</style>
