

<template>
  <div class="zoom-tool">
    <div class="zoom-controls">
      <button @click="zoomIn" aria-label="Zoom In">+</button>
      <span class="zoom-level">{{ zoomLevel }}%</span>
      <button @click="zoomOut" aria-label="Zoom Out">-</button>
    </div>
    <button @click="fitToScreen" aria-label="Fit to Screen">Fit to Screen</button>
    <button @click="resetZoom" aria-label="Reset Zoom">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ZoomTool',
  setup() {
    const zoomLevel = ref(100);

    const zoomIn = () => {
      if (zoomLevel.value < 500) zoomLevel.value += 10;
    };

    const zoomOut = () => {
      if (zoomLevel.value > 10) zoomLevel.value -= 10;
    };

    const fitToScreen = () => {
      zoomLevel.value = 100;
    };

    const resetZoom = () => {
      zoomLevel.value = 100;
    };

    return {
      zoomLevel,
      zoomIn,
      zoomOut,
      fitToScreen,
      resetZoom,
    };
  },
});
</script>

<style scoped lang="css">
@import './ZoomTool.css';
</style>
