<template>
  <div class="audio-player-advanced" role="region" aria-label="Advanced Audio Player">
    <audio ref="audio" :src="src" @timeupdate="updateProgress" @ended="onAudioEnd" />
    <div class="controls">
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
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        v-model="playbackRate"
        @input="changeSpeed"
        aria-label="Speed Control"
        class="speed-slider"
      />
    </div>
    <div class="progress-bar" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
      <input
        type="range"
        min="0"
        max="100"
        v-model="progress"
        @input="seekAudio"
        class="seek-slider"
        aria-label="Seek Control"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'AudioPlayerAdvanced',
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
    const playbackRate = ref(1.0);
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

    const changeSpeed = () => {
      if (audio.value) {
        audio.value.playbackRate = playbackRate.value;
      }
    };

    const seekAudio = () => {
      if (audio.value) {
        const seekTime = (progress.value / 100) * audio.value.duration;
        audio.value.currentTime = seekTime;
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
    watch(playbackRate, changeSpeed);

    return { audio, isPlaying, togglePlay, isMuted, toggleMute, volume, progress, seekAudio, playbackRate };
  },
});
</script>

<style lang="css">
@import './AudioPlayerAdvanced.css';
</style>