<template>
  <div class="rating-stars" role="radiogroup" aria-label="Rating">
    <span 
      v-for="star in 5" 
      :key="star" 
      :class="['star', { selected: star <= rating, hover: star <= hoverValue }]" 
      @click="selectRating(star)" 
      @mouseover="setHover(star)" 
      @mouseleave="setHover(0)" 
      role="radio" 
      :aria-checked="star === rating"
      :tabindex="star === 1 ? 0 : -1"
    >
      ★
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  name: 'RatingStars',
  props: {
    modelValue: {
      type: Number as PropType<number>,
      required: true,
    },
    state: {
      type: String as PropType<'hover' | 'selected' | 'inactive'>,
      default: 'inactive',
    },
  },
  setup(props, { emit }) {
    const rating = ref(props.modelValue);
    const hoverValue = ref(0);

    const selectRating = (value: number) => {
      rating.value = value;
      emit('update:modelValue', value);
    };

    const setHover = (value: number) => {
      hoverValue.value = value;
    };

    return { rating, hoverValue, selectRating, setHover };
  },
});
</script>

<style lang="css">
@import './RatingStars.css';
</style>