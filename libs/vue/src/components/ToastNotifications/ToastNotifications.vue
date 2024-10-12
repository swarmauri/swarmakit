<template>
  <div 
    v-if="visible" 
    :class="['toast', type]" 
    role="alert" 
    aria-live="assertive" 
    aria-atomic="true"
  >
    <p>{{ message }}</p>
    <button @click="dismiss" aria-label="Dismiss notification">×</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  name: 'ToastNotifications',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'success' | 'error' | 'warning' | 'info'>,
      default: 'info',
    },
  },
  setup() {
    const visible = ref(true);

    const dismiss = () => {
      visible.value = false;
    };

    return { visible, dismiss };
  },
});
</script>

<style lang="css">
@import './ToastNotifications.css';
</style>