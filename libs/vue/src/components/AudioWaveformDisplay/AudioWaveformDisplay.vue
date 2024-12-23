
<template>
  <div class="audio-player-advanced" role="region" aria-label="Advanced audio player">
    <audio ref="audioElement" :src="src" @loadeddata="onLoadedData"></audio>
    <button @click="togglePlay" class="control-button" aria-label="Play/Pause">
      {{ isPlaying ? 'Pause' : 'Play' }}
    </button>
    <button @click="toggleMute" class="control-button" aria-label="Mute/Unmute">
      {{ isMuted ? 'Unmute' : 'Mute' }}
    </button>
    <input
      type="range"
      class="volume-control"
      min="0"
      max="1"
      step="0.1"
      v-model="volume"
      @input="changeVolume"
      aria-label="Volume control"
    />
    <input
      type="range"
      class="seek-bar"
      :max="duration"
      v-model="currentTime"
      @input="seekAudio"
      aria-label="Seek control"
    />
    <select v-model="playbackRate" @change="changeSpeed" aria-label="Playback speed control">
      <option v-for="rate in playbackRates" :key="rate" :value="rate">{{ rate }}x</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'AudioPlayerAdvanced',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup() {
    const audioElement = ref<HTMLAudioElement | null>(null);
    const isPlaying = ref(false);
    const isMuted = ref(false);
    const volume = ref(1);
    const currentTime = ref(0);
    const duration = ref(0);
    const playbackRate = ref(1);
    const playbackRates = [0.5, 1, 1.5, 2];

    const togglePlay = () => {
      const audio = audioElement.value;
      if (audio) {
        if (isPlaying.value) {
          audio.pause();
        } else {
          audio.play();
        }
        isPlaying.value = !isPlaying.value;
      }
    };

    const toggleMute = () => {
      const audio = audioElement.value;
      if (audio) {
        audio.muted = !audio.muted;
        isMuted.value = audio.muted;
      }
    };

    const changeVolume = () => {
      const audio = audioElement.value;
      if (audio) {
        audio.volume = volume.value;
      }
    };

    const seekAudio = () => {
      const audio = audioElement.value;
      if (audio) {
        audio.currentTime = currentTime.value;
      }
    };

    const changeSpeed = () => {
      const audio = audioElement.value;
      if (audio) {
        audio.playbackRate = playbackRate.value;
      }
    };

    const onLoadedData = () => {
      const audio = audioElement.value;
      if (audio) {
        volume.value = audio.volume;
        duration.value = audio.duration;
      }
    };

    onMounted(() => {
      const audio = audioElement.value;
      if (audio) {
        audio.addEventListener('timeupdate', () => {
          currentTime.value = audio.currentTime;
        });
      }
    });

    return {
      isPlaying,
      isMuted,
      volume,
      currentTime,
      duration,
      playbackRate,
      playbackRates,
      togglePlay,
      toggleMute,
      changeVolume,
      seekAudio,
      changeSpeed,
      onLoadedData,
    };
  },
});
</script>




<style scoped lang="css">
@import './AudioWaveformDisplay.css';
</style>
