<template>
  <div class="image-viewer" role="application" aria-label="360-Degree Image Viewer">
    <img
      :src="currentImage"
      alt="360-degree view"
      class="viewer-image"
      :class="{ zoomed: isZoomed }"
    />
    <div v-if="loading" class="loading-indicator" aria-live="polite">
      Loading...
    </div>
    <button @click="toggleRotation" aria-pressed="rotating" class="control-button">
      {{ rotating ? 'Pause' : 'Rotate' }}
    </button>
    <button @click="toggleZoom" class="control-button">
      {{ isZoomed ? 'Zoom Out' : 'Zoom In' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';

export default defineComponent({
  name: '360DegreeImageViewer',
  props: {
    images: {
      type: Array as () => string[],
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const currentImageIndex = ref(0);
    const rotating = ref(false);
    const isZoomed = ref(false);

    const currentImage = computed(() => props.images[currentImageIndex.value]);

    const rotateImages = () => {
      if (rotating.value) {
        currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
        setTimeout(rotateImages, 100);
      }
    };

    const toggleRotation = () => {
      rotating.value = !rotating.value;
      if (rotating.value) {
        rotateImages();
      }
    };

    const toggleZoom = () => {
      isZoomed.value = !isZoomed.value;
    };

    onMounted(() => {
      if (!props.loading && rotating.value) {
        rotateImages();
      }
    });

    return { currentImage, rotating, toggleRotation, isZoomed, toggleZoom };
  },
});
</script>

<style lang="css">
@import './360-DegreeImageViewer.css';
</style>