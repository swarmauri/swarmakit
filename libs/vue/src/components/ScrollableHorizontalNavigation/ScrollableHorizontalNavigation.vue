<template>
  <nav role="navigation" aria-label="Horizontal Navigation" class="scrollable-nav">
    <ul class="nav-list" role="menubar">
      <li v-for="(item, index) in navItems" :key="item.label" role="none">
        <a href="#" 
           :class="{ active: activeIndex === index }" 
           @click="setActive(index)" 
           role="menuitem" 
           :aria-current="isActive(index)">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface NavItem {
  label: string;
}

export default defineComponent({
  name: 'ScrollableHorizontalNavigation',
  data() {
    return {
      activeIndex: -1,
    };
  },
  props: {
    navItems: {
      type: Array as () => NavItem[],
      required: true,
    },
  },
  methods: {
    setActive(index: number) {
      this.activeIndex = index;
    },
    isActive(index: number) {
      return this.activeIndex === index;
    },
  },
});
</script>

<style lang="css">
@import './ScrollableHorizontalNavigation.css';
</style>