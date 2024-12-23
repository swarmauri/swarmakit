
<template>
  <div class="cardbased-list" role="list">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      :class="{ hovered: hoveredIndex === index, selected: selectedIndex === index, disabled: card.disabled }"
      @mouseenter="hoveredIndex = index"
      @mouseleave="hoveredIndex = null"
      @click="selectCard(index)"
      :aria-disabled="card.disabled ? 'true' : 'false'"
    >
      <div class="card-content">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Card {
  title: string;
  description: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'CardbasedList',
  props: {
    cards: {
      type: Array as () => Card[],
      required: true,
    },
  },
  setup(props) {
    const hoveredIndex = ref<number | null>(null);
    const selectedIndex = ref<number | null>(null);

    const selectCard = (index: number) => {
      if (props.cards[index].disabled) {
        selectedIndex.value = index;
      }
    };

    return { hoveredIndex, selectedIndex, selectCard };
  },
});
</script>




<style scoped lang="css">
@import './CardbasedList.css';
</style>
