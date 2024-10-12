<template>
  <div class="audio-player" role="region" aria-label="Audio Player">
    <audio ref="audio" :src="src" @timeupdate="updateProgress" @ended="onAudioEnd" />
    <button @click="togglePlay" aria-pressed="isPlaying" class="control-button">
      {{ isPlaying ? 'Pause' : 'Play' }}
    </button>
    <button @click="toggleMute" aria-pressed="isMuted" class="control-button">
      {{ isMuted ? 'Unmute' : 'Mute' }}
    </button>
    <input
      type="range"
      min="0"
      max="100"
      v-model="volume"
      @input="changeVolume"
      aria-label="Volume Control"
      class="volume-slider"
    />
    <div class="progress-bar" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'AudioPlayer',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup() {
    const audio = ref<HTMLAudioElement | null>(null);
    const isPlaying = ref(false);
    const isMuted = ref(false);
    const volume = ref(100);
    const progress = ref(0);

    const togglePlay = () => {
      if (audio.value) {
        if (isPlaying.value) {
          audio.value.pause();
        } else {
          audio.value.play();
        }
        isPlaying.value = !isPlaying.value;
      }
    };

    const toggleMute = () => {
      if (audio.value) {
        isMuted.value = !isMuted.value;
        audio.value.muted = isMuted.value;
      }
    };

    const changeVolume = () => {
      if (audio.value) {
        audio.value.volume = volume.value / 100;
      }
    };

    const updateProgress = () => {
      if (audio.value) {
        progress.value = (audio.value.currentTime / audio.value.duration) * 100;
      }
    };

    const onAudioEnd = () => {
      isPlaying.value = false;
    };

    watch(volume, changeVolume);

    return { audio, isPlaying, togglePlay, isMuted, toggleMute, volume, progress };
  },
});
</script>

<style lang="css">
@import './AudioPlayer.css';
</style>