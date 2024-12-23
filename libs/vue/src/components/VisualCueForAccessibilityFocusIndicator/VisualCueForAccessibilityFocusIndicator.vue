
<template>
  <div class="focus-indicator" :class="{ focused: isFocused }" tabindex="0" @focus="handleFocus" @blur="handleBlur">
    <span>{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'VisualCueForAccessibilityFocusIndicator',
  props: {
    label: {
      type: String,
      required: true,
    },
    isFocused: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isFocused = ref(props.isFocused);
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
@import './VisualCueForAccessibilityFocusIndicator.css';
</style>
