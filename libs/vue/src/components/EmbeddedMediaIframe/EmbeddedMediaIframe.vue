
<template>
  <div class="embedded-media-iframe" :class="{ fullscreen: isFullscreen }">
    <iframe
      ref="iframe"
      :src="src"
      frameborder="0"
      allowfullscreen
      :aria-busy="isBuffering"
      @load="handleLoad"
    ></iframe>
    <button v-if="!isFullscreen" @click="toggleFullscreen" aria-label="Enter fullscreen" class="fullscreen-btn">⤢</button>
    <button v-else @click="toggleFullscreen" aria-label="Exit fullscreen" class="fullscreen-btn">⤡</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EmbeddedMediaIframe',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isFullscreen = ref(false);
    const isBuffering = ref(true);

    const toggleFullscreen = () => {
      isFullscreen.value = !isFullscreen.value;
    };

    const handleLoad = () => {
      isBuffering.value = false;
    };

    return {
      isFullscreen,
      isBuffering,
      toggleFullscreen,
      handleLoad,
    };
  },
});
</script>




<style scoped lang="css">
@import './EmbeddedMediaIframe.css';
</style>
