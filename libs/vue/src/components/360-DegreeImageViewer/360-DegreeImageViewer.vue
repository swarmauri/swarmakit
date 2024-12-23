
<template>
  <div class="image-viewer" role="region" aria-label="360-degree image viewer">
    <div class="image-container" @mousedown="onMouseDown" @touchstart="onTouchStart">
      <img :src="currentImage" alt="360-degree view" />
    </div>
    <div v-if="loading" class="loading-indicator">Loading...</div>
    <button @click="toggleRotation" class="control-button">{{ rotating ? 'Pause' : 'Rotate' }}</button>
    <button @click="zoomIn" class="control-button">Zoom In</button>
    <button @click="zoomOut" class="control-button">Zoom Out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: '360DegreeImageViewer',
  props: {
    images: {
      type: Array as () => string[],
      required: true,
    },
    rotationSpeed: {
      type: Number,
      default: 100,
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    const rotating = ref(false);
    const loading = ref(true);
    const currentImage = ref(props.images[currentIndex.value]);

    const startRotation = () => {
      rotating.value = true;
      rotateImages();
    };

    const stopRotation = () => {
      rotating.value = false;
    };

    const toggleRotation = () => {
      rotating.value ? stopRotation() : startRotation();
    };

    const rotateImages = () => {
      if (rotating.value) {
        setTimeout(() => {
          currentIndex.value = (currentIndex.value + 1) % props.images.length;
          currentImage.value = props.images[currentIndex.value];
          rotateImages();
        }, props.rotationSpeed);
      }
    };

    const zoomIn = () => {
      const img = document.querySelector('.image-container img') as HTMLImageElement;
      img.style.transform = `scale(1.5)`;
    };

    const zoomOut = () => {
      const img = document.querySelector('.image-container img') as HTMLImageElement;
      img.style.transform = `scale(1)`;
    };
  
    const onMouseDown = (event: MouseEvent) => {
      event.preventDefault();  // Prevent default text selection
      stopRotation();
    };
    
    const onTouchStart = (event: TouchEvent) => {
      event.preventDefault();  // Prevent scrolling or default touch behavior
      stopRotation();
    };

    onMounted(() => {
      loading.value = false;
      startRotation();
    });

    return { currentImage, rotating, loading, toggleRotation, zoomIn, zoomOut, onMouseDown, onTouchStart };
  },
});
</script>

<style scoped lang="css">
@import './360-DegreeImageViewer.css';
</style>
