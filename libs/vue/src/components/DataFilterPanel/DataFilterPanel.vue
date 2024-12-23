
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface Filter {
  type: 'text' | 'dropdown' | 'date';
  label: string;
  options?: string[];
  value: string | Date | null;
}

export default defineComponent({
  name: 'DataFilterPanel',
  props: {
    filters: {
      type: Array as () => Filter[],
      required: true,
    },
    disabled: Boolean,
  },
  setup(props) {
    const activeFilters = ref<Filter[]>([...props.filters]);
    const isPanelCollapsed = ref(true);

    const togglePanel = () => {
      isPanelCollapsed.value = !isPanelCollapsed.value;
    };

    const applyFilters = () => {
      // Logic to apply filters
    };

    const clearFilters = () => {
      activeFilters.value = props.filters.map(filter => ({ ...filter, value: null }));
    };

    watch(activeFilters, applyFilters, { deep: true });

    return {
      activeFilters,
      isPanelCollapsed,
      togglePanel,
      clearFilters,
    };
  },
});
</script>

<template>
  <div class="data-filter-panel" :class="{ disabled: disabled }">
    <button @click="togglePanel">{{ isPanelCollapsed ? 'Show Filters' : 'Hide Filters' }}</button>
    <div v-if="!isPanelCollapsed" class="filters">
      <div v-for="(filter, index) in activeFilters" :key="index" class="filter">
        <label>{{ filter.label }}</label>
        <div v-if="filter.type === 'text'">
          <input type="text" v-model="filter.value" :disabled="disabled" />
        </div>
        <div v-else-if="filter.type === 'dropdown'">
          <select v-model="filter.value" :disabled="disabled">
            <option v-for="option in filter.options" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>
        <div v-else-if="filter.type === 'date'">
          <input type="date" v-model="filter.value" :disabled="disabled" />
        </div>
      </div>
      <button @click="clearFilters" :disabled="disabled">Clear Filters</button>
    </div>
  </div>
</template>




<style scoped lang="css">
@import './DataFilterPanel.css';
</style>
