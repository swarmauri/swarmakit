<template>
  <div class="media-gallery" role="region" aria-label="Media Gallery">
    <div class="thumbnails" v-if="state === 'Thumbnail'">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Thumbnail Image"
        @click="selectImage(index)"
        class="thumbnail"
      />
    </div>
    <div class="expanded" v-if="state === 'Expanded' || state === 'Slideshow'">
      <img :src="currentImage" alt="Expanded Image" class="expanded-image" />
      <div class="controls">
        <button @click="previousImage" aria-label="Previous Image">Previous</button>
        <button @click="nextImage" aria-label="Next Image">Next</button>
      </div>
    </div>
    <div class="zoom" v-if="state === 'Zoom In/Out'">
      <img :src="currentImage" alt="Zoomed Image" :style="{ transform: `scale(${zoomLevel})` }" class="zoomed-image" />
      <div class="zoom-controls">
        <button @click="zoomIn" aria-label="Zoom In">Zoom In</button>
        <button @click="zoomOut" aria-label="Zoom Out">Zoom Out</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MediaGallery',
  props: {
    state: {
      type: String,
      default: 'Thumbnail',
    },
    images: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    const zoomLevel = ref(1);

    const currentImage = ref(props.images[currentIndex.value]);

    const selectImage = (index: number) => {
      currentIndex.value = index;
      currentImage.value = props.images[index];
    };

    const nextImage = () => {
      if (currentIndex.value < props.images.length - 1) {
        currentIndex.value++;
        currentImage.value = props.images[currentIndex.value];
      }
    };

    const previousImage = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
        currentImage.value = props.images[currentIndex.value];
      }
    };

    const zoomIn = () => {
      zoomLevel.value += 0.1;
    };

    const zoomOut = () => {
      if (zoomLevel.value > 0.1) {
        zoomLevel.value -= 0.1;
      }
    };

    return { currentImage, selectImage, nextImage, previousImage, zoomIn, zoomOut, zoomLevel };
  },
});
</script>

<style lang="css">
@import './MediaGallery.css';
</style>