<template>
  <div class="avatar" role="img" :aria-label="altText">
    <img v-if="imageSource" :src="imageSource" :alt="altText" />
    <div v-else class="placeholder">{{ initials }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Avatar',
  props: {
    imageSource: {
      type: String,
      default: '',
    },
    altText: {
      type: String,
      default: 'User avatar',
    },
    initials: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="css">
@import './Avatar.css';
</style>