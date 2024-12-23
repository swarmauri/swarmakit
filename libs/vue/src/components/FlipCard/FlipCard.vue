
<template>
  <div
    class="flip-card"
    @click="toggleFlip"
    :aria-disabled="disabled"
    :class="{ flipped, disabled }"
  >
    <div class="flip-card-inner" :style="{ transform: flipped ? 'rotateY(180deg)' : 'none' }">
      <div class="flip-card-front" role="region" aria-label="Front Content">
        <slot name="front"></slot>
      </div>
      <div class="flip-card-back" role="region" aria-label="Back Content">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FlipCard',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const flipped = ref(false);

    const toggleFlip = () => {
      if (!props.disabled) {
        flipped.value = !flipped.value;
      }
    };

    return {
      flipped,
      toggleFlip,
    };
  },
});
</script>




<style scoped lang="css">
@import './FlipCard.css';
</style>
