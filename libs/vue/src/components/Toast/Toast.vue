
<template>
  <div
    class="toast"
    :class="type"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <span>{{ message }}</span>
    <button class="close-btn" @click="dismiss" aria-label="Dismiss">
      &times;
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Toast',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String as () => 'success' | 'error' | 'warning' | 'info',
      required: true,
    },
  },
  setup() {
    const isVisible = ref(true);

    const dismiss = () => {
      isVisible.value = false;
    };

    return { dismiss, isVisible };
  },
});
</script>




<style scoped lang="css">
@import './Toast.css';
</style>
