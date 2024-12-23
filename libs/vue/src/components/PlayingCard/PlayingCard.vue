
<template>
  <div
    class="playing-card"
    :class="{ 'is-flipped': flipped, 'is-disabled': disabled }"
    @click="handleClick"
    role="button"
    :aria-pressed="flipped"
    :aria-disabled="disabled"
    tabindex="0"
  >
    <div class="card-face card-front" v-if="!flipped">
      <slot name="back">Back Design</slot>
    </div>
    <div class="card-face card-back" v-else>
      <slot name="front">Ace of Spades</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayingCard',
  props: {
    flipped: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:flipped'],
  setup(props, { emit }) {
    const handleClick = () => {
      if (!props.disabled) {
        emit('update:flipped', !props.flipped);
      }
    };

    return { handleClick };
  }
});
</script>




<style scoped lang="css">
@import './PlayingCard.css';
</style>
