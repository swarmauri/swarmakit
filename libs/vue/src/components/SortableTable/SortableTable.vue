<template>
  <div class="sortable-table" role="table" aria-label="Sortable Table">
    <div class="table-header" role="row">
      <div
        v-for="column in columns"
        :key="column.key"
        class="table-cell header-cell"
        @click="sortBy(column.key)"
        role="columnheader"
        :aria-sort="getSortDirection(column.key)"
        :tabindex="0"
      >
        {{ column.label }}
        <span v-if="sortKey === column.key" class="sort-indicator">
          {{ sortOrder === 'asc' ? '🔼' : '🔽' }}
        </span>
      </div>
    </div>
    <div v-for="row in filteredData" :key="row.id" class="table-row" role="row">
      <div
        v-for="column in columns"
        :key="column.key"
        class="table-cell"
        role="cell"
        :class="{ selected: selectedRow === row.id }"
        @click="selectRow(row.id)"
      >
        {{ row[column.key] }}
      </div>
    </div>
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
    data: {
      type: Array as () => TableRow[],
      required: true,
    },
    columns: {
      type: Array as () => TableColumn[],
      required: true,
    },
  },
  setup(props) {
    const sortKey = ref<string | null>(null);
    const sortOrder = ref<'asc' | 'desc'>('asc');
    const selectedRow = ref<number | null>(null);

    const sortBy = (key: string) => {
      if (sortKey.value === key) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
      } else {
        sortKey.value = key;
        sortOrder.value = 'asc';
      }
    };

    const filteredData = computed(() => {
      if (!sortKey.value) return props.data;
      return [...props.data].sort((a, b) => {
        if (a[sortKey.value!] < b[sortKey.value!]) return sortOrder.value === 'asc' ? -1 : 1;
        if (a[sortKey.value!] > b[sortKey.value!]) return sortOrder.value === 'asc' ? 1 : -1;
        return 0;
      });
    });

    const selectRow = (rowId: number) => {
      selectedRow.value = selectedRow.value === rowId ? null : rowId;
    };

    const getSortDirection = (key: string) => {
      return sortKey.value === key ? (sortOrder.value === 'asc' ? 'ascending' : 'descending') : 'none';
    };

    return { sortKey, sortOrder, filteredData, selectedRow, sortBy, selectRow, getSortDirection };
  },
});
</script>

<style lang="css">
@import './SortableTable.css';
</style>