<template>
  <div class="carousel" role="region" aria-label="Image Carousel">
    <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <img :src="slide" alt="" class="carousel-image" />
      </div>
    </div>
    <button class="carousel-control prev" @click="prevSlide" aria-label="Previous Slide">‹</button>
    <button class="carousel-control next" @click="nextSlide" aria-label="Next Slide">›</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'Carousel',
  props: {
    slides: {
      type: Array as () => string[],
      required: true,
    },
    state: {
      type: String,
      default: 'Paused',
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    let autoplayInterval: number | null = null;

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % props.slides.length;
    };

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length;
    };

    const startAutoplay = () => {
      if (props.state === 'Auto-Play') {
        autoplayInterval = window.setInterval(nextSlide, 3000);
      }
    };

    const stopAutoplay = () => {
      if (autoplayInterval !== null) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    };

    onMounted(() => {
      startAutoplay();
    });

    onUnmounted(() => {
      stopAutoplay();
    });

    return { currentIndex, nextSlide, prevSlide };
  },
});
</script>

<style lang="css">
@import './Carousel.css';
</style>