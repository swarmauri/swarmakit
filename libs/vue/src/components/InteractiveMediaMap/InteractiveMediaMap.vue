
<template>
  <div class="interactive-media-map" role="application" aria-label="Interactive Media Map">
    <div class="map-container">
      <img :src="mapSrc" alt="Map" @load="loading = false" />
      <div
        v-for="(marker, index) in markers"
        :key="index"
        class="map-marker"
        :style="{ top: marker.y + '%', left: marker.x + '%' }"
        @click="selectMarker(index)"
        :aria-label="'Marker ' + (index + 1)"
        role="button"
      ></div>
    </div>
    <button @click="zoomIn" aria-label="Zoom in" class="zoom-btn">+</button>
    <button @click="zoomOut" aria-label="Zoom out" class="zoom-btn">-</button>
    <div v-if="selectedMarker !== null" class="marker-info">
      <p>{{ markers[selectedMarker].info }}</p>
      <button @click="deselectMarker" aria-label="Close marker info">Close</button>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InteractiveMediaMap',
  props: {
    mapSrc: {
      type: String,
      required: true,
    },
    markers: {
      type: Array as () => Array<{ x: number; y: number; info: string }>,
      default: () => [],
    },
  },
  setup() {
    const selectedMarker = ref<number | null>(null);
    const loading = ref(true);

    const selectMarker = (index: number) => {
      selectedMarker.value = index;
    };

    const deselectMarker = () => {
      selectedMarker.value = null;
    };

    const zoomIn = () => {
      // Implement zoom in functionality
    };

    const zoomOut = () => {
      // Implement zoom out functionality
    };

    return {
      selectedMarker,
      loading,
      selectMarker,
      deselectMarker,
      zoomIn,
      zoomOut,
    };
  },
});
</script>




<style scoped lang="css">
@import './InteractiveMediaMap.css';
</style>
