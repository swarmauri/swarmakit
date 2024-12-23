
<template>
  <div class="poker-chips" :class="stateClass">
    <div
      v-for="chip in chips"
      :key="chip.id"
      class="chip"
      :style="{ backgroundColor: chip.color }"
      :aria-label="`Chip denomination: ${chip.denomination}`"
    >
      {{ chip.denomination }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Chip {
  id: number;
  color: string;
  denomination: number;
}

export default defineComponent({
  name: 'PokerChips',
  props: {
    chips: {
      type: Array as () => Chip[],
      default: () => [],
    },
    state: {
      type: String,
      default: 'stacked',
      validator: (value: string) => ['stacked', 'moving', 'betPlaced', 'allIn'].includes(value),
    },
  },
  computed: {
    stateClass() {
      return this.state;
    },
  },
});
</script>




<style scoped lang="css">
@import './PokerChips.css';
</style>
