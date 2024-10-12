<template>
  <div class="focus-indicator" :class="{ focused: isFocused }" tabindex="0" @focus="handleFocus" @blur="handleBlur">
    <p>{{ isFocused ? 'Focused' : 'Unfocused' }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'VisualCueForAccessibilityFocusIndicator',
  setup() {
    const isFocused = ref(false);

    const handleFocus = () => {
      isFocused.value = true;
    };

    const handleBlur = () => {
      isFocused.value = false;
    };

    return { isFocused, handleFocus, handleBlur };
  },
});
</script>

<style lang="css">
@import './VisualCueForAccessibilityFocusIndicator.css';
</style>