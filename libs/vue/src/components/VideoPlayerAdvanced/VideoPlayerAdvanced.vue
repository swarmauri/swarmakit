<template>
  <div class="video-player-advanced" role="region" aria-label="Advanced Video Player">
    <video ref="videoRef" @play="onPlay" @pause="onPause" @waiting="onBuffering" @enterpictureinpicture="onPiP" controls>
      <source :src="videoSource" type="video/mp4" />
      <track v-if="subtitles" kind="subtitles" src="path/to/subtitles.vtt" srclang="en" label="English" default />
      Your browser does not support the video tag.
    </video>
    <div class="controls">
      <button @click="togglePlayPause" aria-label="Play/Pause">
        {{ state === 'Play' ? 'Pause' : 'Play' }}
      </button>
      <button @click="toggleFullscreen" aria-label="Fullscreen">
        Fullscreen
      </button>
      <button @click="toggleSubtitles" aria-label="Subtitles">
        {{ subtitles ? 'Subtitles Off' : 'Subtitles On' }}
      </button>
      <button @click="togglePiP" aria-label="Picture in Picture">
        PiP Mode
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'VideoPlayerAdvanced',
  props: {
    state: {
      type: String,
      default: 'Pause',
    },
    videoSource: {
      type: String,
      required: true,
    },
    subtitles: {
      type: Boolean,
      default: false,
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

    const toggleSubtitles = () => {
      props.subtitles = !props.subtitles;
    };

    const togglePiP = () => {
      if (videoRef.value && videoRef.value !== document.pictureInPictureElement) {
        videoRef.value.requestPictureInPicture();
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

    const onPiP = () => {
      props.state = 'PiP Mode';
    };

    return { videoRef, togglePlayPause, toggleFullscreen, toggleSubtitles, togglePiP, onPlay, onPause, onBuffering, onPiP };
  },
});
</script>

<style lang="css">
@import './VideoPlayerAdvanced.css';
</style>