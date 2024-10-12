<template>
  <nav class="navigation-bar" role="navigation">
    <button @click="toggle" :aria-expanded="expanded" aria-controls="menu" class="menu-toggle">
      {{ expanded ? 'Collapse' : 'Expand' }}
    </button>
    <ul :class="{ expanded }" id="menu">
      <li v-for="(item, index) in navItems" :key="item.label" @mouseover="setActive(index)" @mouseleave="clearActive" :aria-current="isActive(index)" role="menuitem">
        <a href="#" :class="{ active: activeIndex === index }">{{ item.label }}</a>
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
  name: 'NavigationBar',
  data() {
    return {
      expanded: false,
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
    toggle() {
      this.expanded = !this.expanded;
    },
    setActive(index: number) {
      this.activeIndex = index;
    },
    clearActive() {
      this.activeIndex = -1;
    },
    isActive(index: number) {
      return this.activeIndex === index;
    },
  },
});
</script>

<style lang="css">
@import './NavigationBar.css';
</style>