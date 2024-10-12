<template>
  <div class="activity-indicator" :class="state" role="status" aria-live="polite">
    <span v-if="state === 'loading'" class="loader"></span>
    <span v-if="state === 'success'" class="icon success-icon" aria-hidden="true">✔</span>
    <span v-if="state === 'error'" class="icon error-icon" aria-hidden="true">✖</span>
    <span class="visually-hidden">{{ stateMessage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  name: 'ActivityIndicators',
  props: {
    state: {
      type: String as PropType<'loading' | 'success' | 'error'>,
      required: true,
    },
  },
  setup(props) {
    const stateMessage = computed(() => {
      switch (props.state) {
        case 'loading':
          return 'Loading';
        case 'success':
          return 'Operation Successful';
        case 'error':
          return 'Operation Failed';
        default:
          return '';
      }
    });

    return { stateMessage };
  },
});
</script>

<style lang="css">
@import './ActivityIndicators.css';
</style>