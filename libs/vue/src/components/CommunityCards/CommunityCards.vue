
<template>
  <div class="community-cards" role="group" aria-label="Community Cards">
    <svg
      v-for="card in cards"
      :key="card.id"
      :class="'card ' + card.state"
      viewBox="0 0 100 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="100" height="150" rx="10" ry="10" class="card-background"/>
      <text v-if="card.state === 'revealed'" x="50" y="75" text-anchor="middle" class="card-text">{{ card.label }}</text>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Card {
  id: number;
  state: 'dealt' | 'revealed' | 'empty' | 'full';
  label: string;
}

export default defineComponent({
  name: 'CommunityCards',
  props: {
    cards: {
      type: Array as PropType<Card[]>,
      required: true,
    },
  },
});
</script>




<style scoped lang="css">
@import './CommunityCards.css';
</style>
