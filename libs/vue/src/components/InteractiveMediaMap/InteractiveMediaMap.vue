<template>
  <div class="interactive-media-map" :class="stateClass" role="region" aria-label="Interactive Media Map">
    <div v-if="state === 'Loading'" class="loading">Loading...</div>
    <div v-else class="map-container">
      <div class="map" @click="handleMapClick">
        <div
          v-for="(marker, index) in markers"
          :key="index"
          class="marker"
          :style="{ left: marker.x + '%', top: marker.y + '%' }"
          @click.stop="selectMarker(index)"
          :aria-label="`Marker ${index + 1}`"
        ></div>
      </div>
      <div v-if="selectedMarker !== null" class="marker-info">
        Marker {{ selectedMarker + 1 }} Selected
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'InteractiveMediaMap',
  props: {
    state: {
      type: String,
      default: 'Default',
    },
    markers: {
      type: Array as () => Array<{ x: number; y: number }>,
      default: () => [],
    },
  },
  setup(props) {
    const selectedMarker = ref<number | null>(null);

    const stateClass = computed(() => {
      switch (props.state) {
        case 'Zoomed In':
          return 'zoomed-in';
        case 'Marker Selected':
          return 'marker-selected';
        case 'Loading':
          return 'loading';
        default:
          return 'default';
      }
    });

    const handleMapClick = () => {
      selectedMarker.value = null;
    };

    const selectMarker = (index: number) => {
      selectedMarker.value = index;
    };

    return { selectedMarker, stateClass, handleMapClick, selectMarker };
  },
});
</script>

<style lang="css">
@import './InteractiveMediaMap.css';
</style>