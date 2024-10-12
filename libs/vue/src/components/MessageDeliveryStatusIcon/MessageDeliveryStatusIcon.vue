<template>
  <span
    class="delivery-status-icon"
    :class="status"
    role="img"
    aria-label="Message delivery status"
  >
    <span v-if="status === 'sent'">📤</span>
    <span v-else-if="status === 'delivered'">📬</span>
    <span v-else-if="status === 'failed'">❌</span>
    <span v-else-if="status === 'read'">✔️✔️</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'MessageDeliveryStatusIcon',
  props: {
    status: {
      type: String as PropType<'sent' | 'delivered' | 'failed' | 'read'>,
      required: true,
      validator: (value: string) => ['sent', 'delivered', 'failed', 'read'].includes(value),
    },
  },
});
</script>

<style lang="css">
@import './MessageDeliveryStatusIcon.css';
</style>