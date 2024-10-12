<template>
  <div class="dropdown-menu" @mouseleave="collapseMenu">
    <button @click="toggleMenu" :aria-expanded="isExpanded" aria-haspopup="true">
      Menu
    </button>
    <ul v-if="isExpanded" role="menu" aria-label="Dropdown Menu">
      <li v-for="(item, index) in menuItems" :key="item.label" role="menuitem">
        <a href="#" @mouseover="setActive(index)" @mouseleave="clearActive" :class="{ active: activeIndex === index }">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface MenuItem {
  label: string;
}

export default defineComponent({
  name: 'DropdownMenu',
  data() {
    return {
      isExpanded: false,
      activeIndex: -1,
    };
  },
  props: {
    menuItems: {
      type: Array as () => MenuItem[],
      required: true,
    },
  },
  methods: {
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
    },
    collapseMenu() {
      this.isExpanded = false;
    },
    setActive(index: number) {
      this.activeIndex = index;
    },
    clearActive() {
      this.activeIndex = -1;
    },
  },
});
</script>

<style lang="css">
@import './DropdownMenu.css';
</style>