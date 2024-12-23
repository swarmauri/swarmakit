
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SortControl',
  props: {
    columns: {
      type: Array as () => string[],
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['sort'],
  setup(props, { emit }) {
    const sortState = ref<{ [key: string]: 'asc' | 'desc' | null }>({});
    
    const toggleSort = (column: string) => {
      if (props.disabled) return;
      if (!sortState.value[column] || sortState.value[column] === 'desc') {
        sortState.value[column] = 'asc';
      } else {
        sortState.value[column] = 'desc';
      }
      emit('sort', { column, order: sortState.value[column] });
    };

    const getSortIcon = (column: string) => {
      return sortState.value[column] === 'asc' ? '↑' : sortState.value[column] === 'desc' ? '↓' : '';
    };

    return {
      sortState,
      toggleSort,
      getSortIcon,
    };
  },
});
</script>

<template>
  <div class="sort-control">
    <div
      v-for="column in columns"
      :key="column"
      class="sort-button"
      :class="{ disabled: disabled }"
      @click="toggleSort(column)"
      :aria-disabled="disabled"
      role="button"
    >
      {{ column }} <span>{{ getSortIcon(column) }}</span>
    </div>
  </div>
</template>




<style scoped lang="css">
@import './SortControl.css';
</style>
