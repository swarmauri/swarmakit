<template>
  <nav class="bottom-navigation" aria-label="Bottom Navigation">
    <ul>
      <li v-for="(item, index) in items" :key="item.label" :class="{ selected: index === selectedIndex, disabled: item.disabled }" role="button" :aria-disabled="item.disabled" :aria-selected="index === selectedIndex">
        <button @click="selectItem(index)" :disabled="item.disabled" @mouseover="hoverIndex = index" @mouseleave="hoverIndex = null">
          <span class="icon" :class="{ hover: hoverIndex === index }">{{ item.icon }}</span>
          <span class="label">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface NavigationItem {
  icon: string;
  label: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'BottomNavigationBar',
  props: {
    items: {
      type: Array as PropType<NavigationItem[]>,
      required: true,
    },
    selectedIndex: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  data() {
    return {
      hoverIndex: null as number | null,
    };
  },
  methods: {
    selectItem(index: number) {
      if (!this.items[index].disabled) {
        this.$emit('update:selectedIndex', index);
      }
    },
  },
});
</script>

<style lang="css">
@import './BottomNavigationBar.css';
</style>