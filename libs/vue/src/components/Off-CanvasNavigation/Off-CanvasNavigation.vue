<template>
  <div>
    <button @click="toggle" :aria-expanded="visible" aria-controls="off-canvas-menu" class="toggle-button">
      {{ visible ? 'Close' : 'Open' }} Menu
    </button>
    <aside :class="{ visible }" id="off-canvas-menu" role="navigation">
      <ul>
        <li v-for="(item, index) in navItems" :key="item.label" @click="setActive(index)" :aria-current="isActive(index)" role="menuitem">
          <a href="#" :class="{ active: activeIndex === index }">{{ item.label }}</a>
        </li>
      </ul>
    </aside>
    <div v-if="visible" class="backdrop" @click="dismiss"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface NavItem {
  label: string;
}

export default defineComponent({
  name: 'OffCanvasNavigation',
  data() {
    return {
      visible: false,
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
      this.visible = !this.visible;
    },
    dismiss() {
      this.visible = false;
    },
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
@import './Off-CanvasNavigation.css';
</style>