<template>
  <div class="live-stream-player" :class="stateClass" role="region" aria-label="Live Stream Player">
    <div class="video-container">
      <video
        ref="videoRef"
        :aria-label="`Live stream video: ${state}`"
        @play="onPlay"
        @pause="onPause"
        @waiting="onBuffering"
      >
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div v-if="state === 'Buffering'" class="buffering">Buffering...</div>
    </div>
    <div class="controls">
      <button @click="togglePlayPause" :aria-pressed="state !== 'Paused'">{{ playPauseLabel }}</button>
      <button @click="toggleMute" :aria-pressed="state === 'Muted'">{{ muteLabel }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';

export default defineComponent({
  name: 'LiveStreamPlayer',
  props: {
    state: {
      type: String,
      default: 'Live',
    },
    videoSrc: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const videoRef = ref<HTMLVideoElement | null>(null);

    const stateClass = computed(() => {
      switch (props.state) {
        case 'Paused':
          return 'paused';
        case 'Buffering':
          return 'buffering';
        case 'Muted':
          return 'muted';
        default:
          return 'live';
      }
    });

    const playPauseLabel = computed(() => (props.state === 'Paused' ? 'Play' : 'Pause'));
    const muteLabel = computed(() => (props.state === 'Muted' ? 'Unmute' : 'Mute'));

    const onPlay = () => {
      // Handle play logic
    };

    const onPause = () => {
      // Handle pause logic
    };

    const onBuffering = () => {
      // Handle buffering logic
    };

    const togglePlayPause = () => {
      if (videoRef.value) {
        if (props.state === 'Paused') {
          videoRef.value.play();
        } else {
          videoRef.value.pause();
        }
      }
    };

    const toggleMute = () => {
      if (videoRef.value) {
        videoRef.value.muted = !videoRef.value.muted;
      }
    };

    onMounted(() => {
      if (videoRef.value) {
        if (props.state === 'Muted') {
          videoRef.value.muted = true;
        }
      }
    });

    return { videoRef, stateClass, playPauseLabel, muteLabel, togglePlayPause, toggleMute };
  },
});
</script>

<style lang="css">
@import './LiveStreamPlayer.css';
</style>