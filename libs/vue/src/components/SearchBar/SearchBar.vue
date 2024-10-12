<template>
  <div class="search-bar" :class="{ focused: isFocused, disabled: isDisabled }">
    <input
      type="text"
      :disabled="isDisabled"
      placeholder="Search..."
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isFocused = ref(false);

    const handleFocus = () => {
      if (!props.disabled) {
        isFocused.value = true;
      }
    };

    const handleBlur = () => {
      isFocused.value = false;
    };

    const isDisabled = computed(() => props.disabled);

    return { isFocused, handleFocus, handleBlur, isDisabled };
  },
});
</script>

<style lang="css">
@import './SearchBar.css';
</style>