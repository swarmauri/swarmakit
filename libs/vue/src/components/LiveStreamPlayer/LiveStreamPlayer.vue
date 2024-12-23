
<template>
  <div class="live-stream-player" role="region" aria-label="Live Stream Player">
    <video
      ref="videoElement"
      :src="streamSrc"
      @play="onPlay"
      @pause="onPause"
      @waiting="onBuffering"
      @volumechange="onVolumeChange"
      controls
    ></video>
    <div v-if="buffering" class="buffering-overlay">Buffering...</div>
    <button @click="toggleMute" aria-label="Toggle Mute" class="mute-btn">
      {{ muted ? 'Unmute' : 'Mute' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'LiveStreamPlayer',
  props: {
    streamSrc: {
      type: String,
      required: true,
    },
  },
  setup() {
    const videoElement = ref<HTMLVideoElement | null>(null);
    const muted = ref(false);
    const buffering = ref(false);

    const toggleMute = () => {
      if (videoElement.value) {
        videoElement.value.muted = !videoElement.value.muted;
        muted.value = videoElement.value.muted;
      }
    };

    const onPlay = () => {
      buffering.value = false;
    };

    const onPause = () => {
      // Handle pause state
    };

    const onBuffering = () => {
      buffering.value = true;
    };

    const onVolumeChange = () => {
      if (videoElement.value) {
        muted.value = videoElement.value.muted;
      }
    };

    watch(muted, (newValue) => {
      if (videoElement.value) {
        videoElement.value.muted = newValue;
      }
    });

    return {
      videoElement,
      muted,
      buffering,
      toggleMute,
      onPlay,
      onPause,
      onBuffering,
      onVolumeChange,
    };
  },
});
</script>




<style scoped lang="css">
@import './LiveStreamPlayer.css';
</style>
