
<template>
  <div class="hand" :class="{ full: isFull, maxLimit: maxLimitReached }">
    <div
      v-for="(card) in hand"
      :key="card.id"
      class="card"
      :class="{ selected: selectedCards.includes(card.id) }"
      @click="toggleSelect(card.id)"
    >
      <slot name="card" :card="card"></slot>
    </div>
    <div v-if="maxLimitReached" class="limit-notification">Max card limit reached</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface Card {
  id: number;
  content: string;
}

export default defineComponent({
  name: 'HandOfCards',
  props: {
    cards: {
      type: Array as () => Card[],
      required: true,
    },
    maxCards: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    const hand = ref<Card[]>([...props.cards]);
    const selectedCards = ref<number[]>([]);

    const toggleSelect = (cardId: number) => {
      if (selectedCards.value.includes(cardId)) {
        selectedCards.value = selectedCards.value.filter(id => id !== cardId);
      } else if (selectedCards.value.length < props.maxCards) {
        selectedCards.value.push(cardId);
      }
    };

    const isFull = computed(() => hand.value.length >= props.maxCards);
    const maxLimitReached = computed(() => selectedCards.value.length >= props.maxCards);

    return {
      hand,
      selectedCards,
      isFull,
      maxLimitReached,
      toggleSelect,
    };
  },
});
</script>




<style scoped lang="css">
@import './HandOfCards.css';
</style>
