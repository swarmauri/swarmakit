
<template>
  <div class="pot" :aria-label="'Poker Pot'" :class="{ won: isWon }">
    <div class="chips" :class="{ empty: totalChips === 0 }">
      <transition-group name="chip-move" tag="div" class="chip-stack">
        <div v-for="(chip, index) in chips" :key="index" class="chip">{{ chip }}</div>
      </transition-group>
    </div>
    <div class="total">Total: {{ totalChips }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Pot',
  props: {
    chips: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    totalChips: {
      type: Number,
      default: 0,
    },
    isWon: {
      type: Boolean,
      default: false,
    },
  },
});
</script>




<style scoped lang="css">
@import './Pot.css';
</style>
