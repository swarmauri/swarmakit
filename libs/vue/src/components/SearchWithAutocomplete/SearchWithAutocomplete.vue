
<template>
  <div class="search-autocomplete">
    <input
      type="text"
      v-model="query"
      @input="onInput"
      placeholder="Search..."
      aria-label="Search input"
    />
    <ul v-if="query && filteredResults.length" class="results-list">
      <li v-for="(result, index) in filteredResults" :key="index">{{ result }}</li>
    </ul>
    <p v-if="query && !filteredResults.length" class="no-results">No results found.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'SearchWithAutocomplete',
  props: {
    options: {
      type: Array as () => string[],
      default: () => [],
    },
    query:{
      type:String,
      default:'',
    },
  },
  setup(props) {
    const query = ref(props.query);

    const filteredResults = computed(() =>
      props.options.filter(option =>
        option.toLowerCase().includes(query.value.toLowerCase())
      )
    );

    const onInput = () => {
      // Logic to handle input can be added here
    };

    return { query, filteredResults, onInput };
  },
});
</script>




<style scoped lang="css">
@import './SearchWithAutocomplete.css';
</style>
