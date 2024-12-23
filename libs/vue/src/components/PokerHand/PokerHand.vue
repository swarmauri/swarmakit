
<template>
  <div class="poker-hand" :aria-label="'Poker Hand'" :data-folded="folded">
    <div v-for="card in cards" :key="card.id" class="card" :data-revealed="revealed">
      <span v-if="revealed" class="card-value">{{ card.value }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Card {
  id: number;
  value: string;
}

export default defineComponent({
  name: 'PokerHand',
  props: {
    cards: {
      type: Array as PropType<Card[]>,
      required: true,
    },
    revealed: {
      type: Boolean,
      default: false,
    },
    folded: {
      type: Boolean,
      default: false,
    },
  },
});
</script>




<style scoped lang="css">
@import './PokerHand.css';
</style>
