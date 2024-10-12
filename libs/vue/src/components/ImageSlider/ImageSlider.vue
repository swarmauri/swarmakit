<template>
  <div class="image-slider" :class="stateClass" aria-live="polite">
    <div class="slider-wrapper">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="slide"
        :class="{ active: index === activeIndex }"
      >
        <img :src="image" :alt="`Slide ${index + 1}`" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  name: 'ImageSlider',
  props: {
    images: {
      type: Array as () => string[],
      required: true,
    },
    state: {
      type: String,
      default: 'Active',
    },
  },
  setup(props) {
    const activeIndex = ref(0);

    const stateClass = computed(() => {
      switch (props.state) {
        case 'Inactive':
          return 'inactive';
        case 'Hover':
          return 'hover';
        default:
          return 'active';
      }
    });

    return { activeIndex, stateClass };
  },
});
</script>

<style lang="css">
@import './ImageSlider.css';
</style>