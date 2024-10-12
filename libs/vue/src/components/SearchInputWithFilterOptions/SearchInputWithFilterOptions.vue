<template>
  <div class="search-input-container" :class="{ disabled }">
    <input
      type="text"
      :placeholder="placeholder"
      v-model="searchQuery"
      @input="onInput"
      :disabled="disabled"
      :aria-label="ariaLabel"
    />
    <button @click="toggleFilters" :aria-expanded="filtersVisible" :disabled="disabled">
      Filters
    </button>
    <div v-if="filtersVisible" class="filters" role="region" aria-label="Filter options">
      <label v-for="option in filterOptions" :key="option">
        <input type="checkbox" v-model="activeFilters" :value="option" />
        {{ option }}
      </label>
    </div>
    <div v-if="noResults" class="no-results" role="alert">
      No results found
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  name: 'SearchInputWithFilterOptions',
  props: {
    placeholder: {
      type: String,
      default: 'Search...',
    },
    filterOptions: {
      type: Array as PropType<string[]>,
      default: () => ['Option 1', 'Option 2', 'Option 3'],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: 'Search input',
    },
  },
  setup() {
    const searchQuery = ref('');
    const filtersVisible = ref(false);
    const activeFilters = ref<string[]>([]);
    const noResults = ref(false);

    const toggleFilters = () => {
      filtersVisible.value = !filtersVisible.value;
    };

    const onInput = () => {
      noResults.value = searchQuery.value.length > 0 && Math.random() > 0.5;
    };

    return {
      searchQuery,
      filtersVisible,
      activeFilters,
      noResults,
      toggleFilters,
      onInput,
    };
  },
});
</script>

<style lang="css">
@import './SearchInputWithFilterOptions.css';
</style>