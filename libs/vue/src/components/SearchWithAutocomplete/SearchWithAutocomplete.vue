<template>
  <div class="search-autocomplete">
    <input
      type="text"
      v-model="query"
      @input="onInput"
      @keydown.down="highlightNext"
      @keydown.up="highlightPrev"
      @keydown.enter="selectItem"
      role="combobox"
      aria-expanded="true"
      aria-owns="autocomplete-list"
      aria-autocomplete="list"
      aria-activedescendant="autocomplete-item-{{ highlightedIndex }}"
      aria-label="Search"
      class="search-input"
    />
    <ul v-if="showResults" id="autocomplete-list" class="autocomplete-list" role="listbox">
      <li
        v-for="(result, index) in filteredResults"
        :key="result"
        :id="'autocomplete-item-' + index"
        :class="{ highlighted: index === highlightedIndex }"
        role="option"
        @click="selectItem(result)"
        @mouseover="highlightIndex(index)"
      >
        {{ result }}
      </li>
    </ul>
    <p v-if="!filteredResults.length && query" class="no-results">No results found</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'SearchWithAutocomplete',
  props: {
    results: {
      type: Array as () => string[],
      default: () => [],
    },
  },
  setup(props) {
    const query = ref('');
    const highlightedIndex = ref(-1);

    const filteredResults = computed(() =>
      props.results.filter((result) =>
        result.toLowerCase().includes(query.value.toLowerCase())
      )
    );

    const showResults = computed(() => query.value.length > 0 && filteredResults.value.length > 0);

    const onInput = () => {
      highlightedIndex.value = -1;
    };

    const highlightNext = () => {
      if (highlightedIndex.value < filteredResults.value.length - 1) {
        highlightedIndex.value++;
      }
    };

    const highlightPrev = () => {
      if (highlightedIndex.value > 0) {
        highlightedIndex.value--;
      }
    };

    const highlightIndex = (index: number) => {
      highlightedIndex.value = index;
    };

    const selectItem = (item?: string) => {
      query.value = item || filteredResults.value[highlightedIndex.value];
    };

    return {
      query,
      highlightedIndex,
      filteredResults,
      showResults,
      onInput,
      highlightNext,
      highlightPrev,
      highlightIndex,
      selectItem,
    };
  },
});
</script>

<style lang="css">
@import './SearchWithAutocomplete.css';
</style>