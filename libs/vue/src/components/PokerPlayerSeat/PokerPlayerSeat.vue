
<template>
  <div class="poker-player-seat" :class="{ 'active-player': isActive, 'folded-player': isFolded }">
    <div class="avatar" aria-label="Player Avatar"></div>
    <div class="player-info">
      <span class="player-name">{{ playerName }}</span>
      <span class="player-chips">{{ playerChips }} chips</span>
    </div>
    <div class="player-cards">
      <div class="card" v-for="card in playerCards" :key="card.id">{{ card.suit }}{{ card.rank }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Card {
  id: number;
  suit: string;
  rank: string;
}

export default defineComponent({
  name: 'PokerPlayerSeat',
  props: {
    playerName: {
      type: String,
      default: 'Player',
    },
    playerChips: {
      type: Number,
      default: 0,
    },
    playerCards: {
      type: Array as () => Card[],
      default: () => [],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isFolded: {
      type: Boolean,
      default: false,
    },
  },
});
</script>




<style scoped lang="css">
@import './PokerPlayerSeat.css';
</style>
