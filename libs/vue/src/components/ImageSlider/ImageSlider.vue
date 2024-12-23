
<template>
  <div class="image-slider" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <div class="slider-images">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="slider-image"
        :class="{ active: index === activeIndex, hover: isHovering }"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
    <button class="prev-btn" @click="prevImage" aria-label="Previous image">‹</button>
    <button class="next-btn" @click="nextImage" aria-label="Next image">›</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ImageSlider',
  props: {
    images: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const activeIndex = ref(0);
    const isHovering = ref(false);

    const setHover = (hoverState: boolean) => {
      isHovering.value = hoverState;
    };

    const prevImage = () => {
      activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
    };

    const nextImage = () => {
      activeIndex.value = (activeIndex.value + 1) % props.images.length;
    };

    return {
      activeIndex,
      isHovering,
      setHover,
      prevImage,
      nextImage,
    };
  },
});
</script>




<style scoped lang="css">
@import './ImageSlider.css';
</style>
