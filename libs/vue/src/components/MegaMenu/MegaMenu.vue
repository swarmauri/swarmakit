<template>
  <nav class="mega-menu">
    <ul>
      <li v-for="(item, index) in menuItems" :key="item.label" @mouseover="setActive(index)" @mouseleave="clearActive" :aria-expanded="isExpanded(index)" role="menuitem">
        <a href="#" :class="{ active: activeIndex === index }">{{ item.label }}</a>
        <div v-if="activeIndex === index" class="submenu" role="menu">
          <ul>
            <li v-for="subItem in item.subItems" :key="subItem.label" role="menuitem">
              <a href="#">{{ subItem.label }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface SubMenuItem {
  label: string;
}

interface MenuItem {
  label: string;
  subItems: SubMenuItem[];
}

export default defineComponent({
  name: 'MegaMenu',
  data() {
    return {
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
    setActive(index: number) {
      this.activeIndex = index;
    },
    clearActive() {
      this.activeIndex = -1;
    },
    isExpanded(index: number) {
      return this.activeIndex === index;
    },
  },
});
</script>

<style lang="css">
@import './MegaMenu.css';
</style>