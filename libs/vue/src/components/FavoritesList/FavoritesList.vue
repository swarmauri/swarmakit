<template>
  <ul class="favorites-list" role="list">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="list-item"
      :class="{ starred: starredIndex === index, selected: selectedIndex === index }"
      role="listitem"
      @click="toggleStar(index)"
      @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = -1"
      tabindex="0"
      :aria-pressed="starredIndex === index"
    >
      <div class="item-header">{{ item.title }}</div>
      <button
        class="star-button"
        @click.stop="toggleStar(index)"
        :aria-label="starredIndex === index ? 'Unstar item' : 'Star item'"
      >
        {{ starredIndex === index ? '★' : '☆' }}
      </button>
      <div v-if="selectedIndex === index" class="item-content">{{ item.content }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Item {
  title: string;
  content: string;
}

export default defineComponent({
  name: 'FavoritesList',
  props: {
    items: {
      type: Array as () => Item[],
      default: () => [],
    },
  },
  setup() {
    const starredIndex = ref(-1);
    const hoverIndex = ref(-1);
    const selectedIndex = ref(-1);

    const toggleStar = (index: number) => {
      if (starredIndex.value === index) {
        starredIndex.value = -1;
        selectedIndex.value = -1;
      } else {
        starredIndex.value = index;
        selectedIndex.value = index;
      }
    };

    return {
      starredIndex,
      hoverIndex,
      selectedIndex,
      toggleStar,
    };
  },
});
</script>

<style lang="css">
@import './FavoritesList.css';
</style>