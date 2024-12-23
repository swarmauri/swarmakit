
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface Row {
  [key: string]: any;
}

export default defineComponent({
  name: 'DataTable',
  props: {
    columns: {
      type: Array as () => Column[],
      required: true,
    },
    rows: {
      type: Array as () => Row[],
      required: true,
    },
    loading: Boolean,
    pagination: Boolean,
    itemsPerPage: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    const currentPage = ref(1);

    const paginatedRows = computed(() => {
      if (!props.pagination) return props.rows;
      const start = (currentPage.value - 1) * props.itemsPerPage;
      const end = currentPage.value * props.itemsPerPage;
      return props.rows.slice(start, end);
    });

    const toggleSort = (columnKey: string) => {
      // Sorting logic
      console.log(columnKey);
    };

    return {
      paginatedRows,
      currentPage,
      toggleSort,
    };
  },
});
</script>

<template>
  <div class="data-table" :aria-busy="loading">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" :style="{ width: column.width, textAlign: column.align }">
            <button v-if="column.sortable" @click="toggleSort(column.key)">{{ column.label }}</button>
            <span v-else>{{ column.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in paginatedRows" :key="row.id">
          <td v-for="column in columns" :key="column.key">{{ row[column.key] }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="pagination" class="pagination-controls">
      <button @click="currentPage--" :disabled="currentPage === 1">Previous</button>
      <button @click="currentPage++" :disabled="currentPage * itemsPerPage >= rows.length">Next</button>
    </div>
  </div>
</template>




<style scoped lang="css">
@import './DataTable.css';
</style>
