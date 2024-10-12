<template>
  <div class="avatar" :class="status" role="img" aria-label="User Avatar">
    <img :src="imageSrc" :alt="altText" />
    <span class="status-indicator" :aria-label="status"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'UserAvatar',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: 'User Avatar',
    },
    status: {
      type: String as PropType<'online' | 'offline' | 'active' | 'away' | 'busy'>,
      default: 'offline',
      validator: (value: string) => ['online', 'offline', 'active', 'away', 'busy'].includes(value),
    },
  },
});
</script>

<style lang="css">
@import './UserAvatar.css';
</style>