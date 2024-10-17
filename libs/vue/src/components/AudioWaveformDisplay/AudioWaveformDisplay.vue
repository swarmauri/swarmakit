<template>
  <div class="audio-waveform-display" role="region" aria-label="Audio waveform display">
    <canvas ref="waveformCanvas" aria-label="Waveform visualization"></canvas>
    <div v-if="isLoading" class="loading" aria-live="polite">Loading...</div>
    <button @click="togglePlay" class="control-button" aria-label="Play/Pause">
      {{ isPlaying ? 'Pause' : 'Play' }}
    </button>
    <input
      type="range"
      class="scrub-bar"
      :max="duration"
      v-model="currentTime"
      @input="scrubAudio"
      aria-label="Scrubbing control"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'AudioWaveformDisplay',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup() {
    const audioElement = ref<HTMLAudioElement | null>(null);
    const waveformCanvas = ref<HTMLCanvasElement | null>(null);
    const isPlaying = ref(false);
    const isLoading = ref(true);
    const currentTime = ref(0);
    const duration = ref(0);

    const togglePlay = () => {
      if (audioElement.value) {
        if (isPlaying.value) {
          audioElement.value.pause();
        } else {
          audioElement.value.play();
        }
        isPlaying.value = !isPlaying.value;
      }
    };

    const scrubAudio = () => {
      if (audioElement.value) {
        audioElement.value.currentTime = currentTime.value;
      }
    };

    const onLoadedData = () => {
      if (audioElement.value) {
        duration.value = audioElement.value.duration;
        isLoading.value = false;
      }
    };

    onMounted(() => {
      const audio = audioElement.value;
      if (audio) {
        audio.addEventListener('loadeddata', onLoadedData);
        audio.addEventListener('timeupdate', () => {
          currentTime.value = audio.currentTime;
        });
      }

      const canvas = waveformCanvas.value;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = 'var(--waveform-color)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    });

    return {
      isPlaying,
      isLoading,
      currentTime,
      duration,
      togglePlay,
      scrubAudio,
    };
  },
});
</script>

<style scoped lang="css">
.audio-waveform-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--waveform-bg-color);
  border-radius: 5px;
}

.control-button {
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}

.scrub-bar {
  width: 100%;
}

.loading {
  color: var(--loading-text-color);
}
</style>
