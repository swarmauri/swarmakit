<template>
  <div class="search-box">
    <input
      type="text"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
      class="search-input"
      :placeholder="placeholder"
      aria-label="Search"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SearchBox',
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Search...',
    },
  },
  setup() {
    const isFocused = ref(false);
    return { isFocused };
  },
});
</script>

<style lang="css">
@import './SearchBox.css';
</style>