<template>
  <aside class="sidebar" role="complementary">
    <ul class="menu-list">
      <li v-for="(menu, index) in menus" :key="menu.label">
        <button 
          class="menu-button" 
          @click="toggleMenu(index)"
          :aria-expanded="expandedIndex === index"
          :disabled="menu.disabled"
          :class="{ active: isActive(index), disabled: menu.disabled }"
        >
          {{ menu.label }}
        </button>
        <ul v-show="expandedIndex === index" class="submenu-list">
          <li v-for="item in menu.items" :key="item.label">
            <a href="#" :class="{ active: activeItem === item.label }" @click="setActiveItem(item.label)">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface MenuItem {
  label: string;
}

interface Menu {
  label: string;
  items: MenuItem[];
  disabled?: boolean;
}

export default defineComponent({
  name: 'SidebarWithAccordionMenus',
  data() {
    return {
      expandedIndex: -1,
      activeItem: '',
    };
  },
  props: {
    menus: {
      type: Array as () => Menu[],
      required: true,
    },
  },
  methods: {
    toggleMenu(index: number) {
      this.expandedIndex = this.expandedIndex === index ? -1 : index;
    },
    setActiveItem(label: string) {
      this.activeItem = label;
    },
    isActive(index: number) {
      return this.expandedIndex === index;
    },
  },
});
</script>

<style lang="css">
@import './SidebarWithAccordionMenus.css';
</style>