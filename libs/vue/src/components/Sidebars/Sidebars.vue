<template>
  <aside class="sidebar" role="navigation">
    <ul class="sidebar-list">
      <li v-for="(item, index) in items" :key="item.label">
        <button
          class="sidebar-button"
          @click="toggleExpand(index)"
          :aria-expanded="expandedIndex === index"
          :class="{ hover: hoverIndex === index }"
          @mouseover="setHoverIndex(index)"
          @mouseleave="setHoverIndex(-1)"
        >
          {{ item.label }}
        </button>
        <ul v-show="expandedIndex === index" class="submenu">
          <li v-for="subItem in item.subItems" :key="subItem">
            {{ subItem }}
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface SidebarItem {
  label: string;
  subItems: string[];
}

export default defineComponent({
  name: 'Sidebars',
  data() {
    return {
      expandedIndex: -1,
      hoverIndex: -1,
    };
  },
  props: {
    items: {
      type: Array as () => SidebarItem[],
      required: true,
    },
  },
  methods: {
    toggleExpand(index: number) {
      this.expandedIndex = this.expandedIndex === index ? -1 : index;
    },
    setHoverIndex(index: number) {
      this.hoverIndex = index;
    },
  },
});
</script>

<style lang="css">
@import './Sidebars.css';
</style>