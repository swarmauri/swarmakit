<template>
  <div class="video-player" role="region" aria-label="Video Player">
    <video ref="videoRef" @play="onPlay" @pause="onPause" @waiting="onBuffering" controls>
      <source :src="videoSource" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="controls">
      <button @click="togglePlayPause" aria-label="Play/Pause">
        {{ state === 'Play' ? 'Pause' : 'Play' }}
      </button>
      <button @click="toggleFullscreen" aria-label="Fullscreen">
        Fullscreen
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'VideoPlayer',
  props: {
    state: {
      type: String,
      default: 'Pause',
    },
    videoSource: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const videoRef = ref<HTMLVideoElement | null>(null);

    const togglePlayPause = () => {
      if (!videoRef.value) return;
      if (videoRef.value.paused) {
        videoRef.value.play();
      } else {
        videoRef.value.pause();
      }
    };

    const toggleFullscreen = () => {
      if (!videoRef.value) return;
      if (videoRef.value.requestFullscreen) {
        videoRef.value.requestFullscreen();
      }
    };

    const onPlay = () => {
      props.state = 'Play';
    };

    const onPause = () => {
      props.state = 'Pause';
    };

    const onBuffering = () => {
      props.state = 'Buffering';
    };

    return { videoRef, togglePlayPause, toggleFullscreen, onPlay, onPause, onBuffering };
  },
});
</script>

<style lang="css">
@import './VideoPlayer.css';
</style>