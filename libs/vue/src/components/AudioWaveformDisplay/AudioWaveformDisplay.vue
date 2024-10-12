<template>
  <div class="audio-waveform-display" role="region" aria-label="Audio Waveform Display">
    <canvas ref="waveformCanvas" class="waveform-canvas" aria-hidden="true"></canvas>
    <div class="status" aria-live="polite">{{ status }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
  name: 'AudioWaveformDisplay',
  props: {
    src: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      default: 'Loading',
    },
  },
  setup(props) {
    const waveformCanvas = ref<HTMLCanvasElement | null>(null);
    const status = ref(props.state);

    onMounted(() => {
      if (waveformCanvas.value) {
        const context = waveformCanvas.value.getContext('2d');
        if (context) {
          context.fillStyle = '#eee';
          context.fillRect(0, 0, waveformCanvas.value.width, waveformCanvas.value.height);
        }
      }
    });

    watch(() => props.state, (newState) => {
      status.value = newState;
    });

    return { waveformCanvas, status };
  },
});
</script>

<style lang="css">
@import './AudioWaveformDisplay.css';
</style>