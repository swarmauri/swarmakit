
<template>
  <div class="avatar-container" role="img" :aria-label="ariaLabel">
    <div v-if="imageSrc" class="avatar" :style="{ backgroundImage: `url(${imageSrc})` }"></div>
    <div v-else class="avatar placeholder">{{ initials }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Avatar',
  props: {
    imageSrc: {
      type: String,
      default: '',
    },
    initials: {
      type: String,
      default: 'A',
    },
    ariaLabel: {
      type: String,
      default: 'User Avatar',
    },
  },
});
</script>




<style scoped lang="css">
@import './Avatar.css';
</style>
