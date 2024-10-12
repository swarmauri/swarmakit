<template>
  <div class="read-receipt" :class="status" role="status" aria-label="Read Receipt Status">
    <span class="status-icon" :aria-label="status"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ReadReceipt',
  props: {
    status: {
      type: String as PropType<'seen' | 'unseen' | 'delivered' | 'failed'>,
      default: 'unseen',
      validator: (value: string) => ['seen', 'unseen', 'delivered', 'failed'].includes(value),
    },
  },
});
</script>

<style lang="css">
@import './ReadReceipt.css';
</style>