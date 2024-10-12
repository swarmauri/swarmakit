<template>
  <div class="cardbased-list">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card-item"
      :class="{ selected: card.selected, disabled: card.disabled }"
      @click="!card.disabled && selectCard(index)"
      tabindex="0"
      role="button"
      aria-pressed="card.selected"
      :aria-disabled="card.disabled"
    >
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Card {
  title: string;
  description: string;
  selected: boolean;
  disabled: boolean;
}

export default defineComponent({
  name: 'CardbasedList',
  props: {
    cards: {
      type: Array as () => Card[],
      required: true,
    },
  },
  methods: {
    selectCard(index: number) {
      this.$emit('card-selected', index);
    },
  },
});
</script>

<style lang="css">
@import './CardbasedList.css';
</style>