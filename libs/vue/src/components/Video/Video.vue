<template>
  <div class="video" role="region" aria-label="Video Component">
    <div v-if="state === 'Uploading'" class="status uploading">
      Uploading...
    </div>
    <video v-if="state !== 'Uploading'" ref="videoRef" controls @pause="onPause" @ended="onComplete">
      <source :src="videoSource" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div v-if="state === 'Error'" class="status error" aria-live="assertive">
      Error: Unable to load video.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Video',
  props: {
    state: {
      type: String,
      default: 'Paused',
    },
    videoSource: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const videoRef = ref<HTMLVideoElement | null>(null);

    const onPause = () => {
      props.state = 'Paused';
    };

    const onComplete = () => {
      props.state = 'Completed';
    };

    return { videoRef, onPause, onComplete };
  },
});
</script>

<style lang="css">
@import './Video.css';
</style>