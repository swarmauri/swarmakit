
<template>
  <div class="sortable-table">
    <input 
      type="text" 
      v-model="filterText" 
      class="filter-input" 
      placeholder="Filter table..."
      aria-label="Filter table"
    />
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)">
            {{ column.label }}
            <span :class="getSortDirection(column.key)"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="row in filteredAndSortedData" 
          :key="row.id" 
          :class="{ selected: row.id === selectedRow }" 
          @click="selectRow(row.id)"
        >
          <td v-for="column in columns" :key="column.key">{{ row[column.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface TableColumn {
  key: string;
  label: string;
}

interface TableRow {
  id: number;
  [key: string]: any;
}

export default defineComponent({
  name: 'SortableTable',
  props: {
    columns: {
      type: Array as () => TableColumn[],
      required: true,
    },
    data: {
      type: Array as () => TableRow[],
      required: true,
    },
  },
  setup(props) {
    const sortKey = ref<string | null>(null);
    const sortDirection = ref<1 | -1 | number>(1);
    const filterText = ref<string>("");
    const selectedRow = ref<number | null>(null);

    const sortBy = (key: string) => {
      if (sortKey.value === key) {
        sortDirection.value = -sortDirection.value;
      } else {
        sortKey.value = key;
        sortDirection.value = 1;
      }
    };

    const selectRow = (id: number) => {
      selectedRow.value = selectedRow.value === id ? null : id;
    };

    const getSortDirection = (key: string) => {
      if (sortKey.value === key) {
        return sortDirection.value === 1 ? 'asc' : 'desc';
      }
      return '';
    };

    const filteredAndSortedData = computed(() => {
      let filteredData = props.data.filter(row => 
        Object.values(row).some(val => val.toString().toLowerCase().includes(filterText.value.toLowerCase()))
      );

      if (sortKey.value) {
        filteredData.sort((a, b) => {
          const aValue = a[sortKey.value!];
          const bValue = b[sortKey.value!];
          if (aValue < bValue) return -1 * sortDirection.value;
          if (aValue > bValue) return 1 * sortDirection.value;
          return 0;
        });
      }

      return filteredData;
    });

    return { sortBy, selectRow, getSortDirection, filteredAndSortedData, filterText, selectedRow };
  },
});
</script>




<style scoped lang="css">
@import './SortableTable.css';
</style>
