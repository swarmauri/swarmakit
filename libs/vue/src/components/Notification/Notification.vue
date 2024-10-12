<template>
  <div
    v-if="!isDismissed"
    class="notification"
    :class="typeClass"
    role="alert"
  >
    <span class="notification-icon" :aria-label="ariaLabel"></span>
    <p class="notification-message"><slot></slot></p>
    <button class="dismiss-button" @click="dismissNotification" aria-label="Dismiss notification">×</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  name: 'Notification',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value: string) => ['success', 'error', 'warning', 'info'].includes(value),
    },
    dismissed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isDismissed = ref(props.dismissed);

    const dismissNotification = () => {
      isDismissed.value = true;
    };

    const typeClass = computed(() => `notification--${props.type}`);
    const ariaLabel = computed(() => `${props.type} notification`);

    return {
      isDismissed,
      dismissNotification,
      typeClass,
      ariaLabel,
    };
  },
});
</script>

<style lang="css">
@import './Notification.css';
</style>