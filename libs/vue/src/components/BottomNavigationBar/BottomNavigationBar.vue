
<template>
  <nav class="bottom-navigation-bar" role="navigation" aria-label="Bottom Navigation">
    <ul class="nav-items">
      <li 
        v-for="item in items" 
        :key="item.label" 
        :class="{ selected: item.selected, disabled: item.disabled }"
        @mouseover="item.disabled ? null : onHover(item)"
        @click="item.disabled ? null : onSelect(item)"
        :aria-disabled="item.disabled"
        tabindex="0"
      >
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface NavItem {
  label: string;
  selected: boolean;
  disabled: boolean;
}

export default defineComponent({
  name: 'BottomNavigationBar',
  props: {
    items: {
      type: Array as PropType<NavItem[]>,
      required: true,
    },
  },
  methods: {
    onSelect(item: NavItem) {
      this.$emit('update:items', this.items.map(i => ({
        ...i,
        selected: i.label === item.label,
      })));
    },
    onHover(item: NavItem) {
      // Logic for hover state can be added here
      console.log(`${item.label} is hovered`);
    },
  },
});
</script>



<style scoped lang="css">
@import './BottomNavigationBar.css';
</style>
