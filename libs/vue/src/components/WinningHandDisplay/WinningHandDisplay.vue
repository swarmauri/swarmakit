
<template>
  <div class="winning-hand-display" :aria-label="'Winning Hand Display'" :class="{ hidden: isHidden }">
    <div class="cards">
      <div v-for="(card, index) in communityCards" :key="'community-' + index" class="card community-card">
        {{ card }}
      </div>
      <div v-for="(card, index) in playerCards" :key="'player-' + index" class="card player-card" :class="{ winner: winningCards.includes(card) }">
        {{ card }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'WinningHandDisplay',
  props: {
    communityCards: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    playerCards: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    winningCards: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    isHidden: {
      type: Boolean,
      default: false,
    },
  },
});
</script>




<style scoped lang="css">
@import './WinningHandDisplay.css';
</style>
