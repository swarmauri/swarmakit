
<template>
  <div class="poker-table" :style="{ backgroundColor: tableColor }">
    <div class="seats" v-for="seat in seats" :key="seat.id">
      <div class="player" :class="{ 'player-active': seat.active }">{{ seat.name }}</div>
    </div>
    <div class="community-cards">
      <div class="card" v-for="card in communityCards" :key="card.id">{{ card.suit }}{{ card.rank }}</div>
    </div>
    <div class="dealer-button" role="button" aria-label="Dealer button"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Seat {
  id: number;
  name: string;
  active: boolean;
}

interface Card {
  id: number;
  suit: string;
  rank: string;
}

export default defineComponent({
  name: 'PokerTable',
  props: {
    seats: {
      type: Array as () => Seat[],
      default: () => [],
    },
    communityCards: {
      type: Array as () => Card[],
      default: () => [],
    },
    tableColor: {
      type: String,
      default: 'var(--table-green)',
    },
  },
});
</script>




<style scoped lang="css">
@import './PokerTable.css';
</style>
