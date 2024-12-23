
<template>
  <div class="search-bar" :class="{ focused: isFocused, disabled: isDisabled }">
    <input
      type="text"
      :placeholder="placeholder"
      :disabled="isDisabled"
      @focus="handleFocus"
      @blur="handleBlur"
      aria-label="Search"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String,
      default: 'Search...',
    },
    isFocused: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isFocused = ref(props.isFocused)
    const handleFocus = () => {
      isFocused.value = true;
    };

    const handleBlur = () => {
    isFocused.value = false;
    };

    return { handleFocus, handleBlur };
  },
});
</script>




<style scoped lang="css">
@import './SearchBar.css';
</style>
