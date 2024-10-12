<template>
  <div class="collapsible-menu-list">
    <button
      class="menu-header"
      @click="toggleMenu"
      :aria-expanded="isExpanded"
      aria-controls="menu-list"
    >
      {{ title }}
    </button>
    <ul
      v-show="isExpanded"
      class="menu-list"
      id="menu-list"
      role="menu"
      aria-hidden="!isExpanded"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="menu-item"
        role="menuitem"
        tabindex="0"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CollapsibleMenuList',
  props: {
    title: {
      type: String,
      default: 'Menu',
    },
    items: {
      type: Array as () => string[],
      default: () => [],
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isExpanded = ref(props.expanded);

    const toggleMenu = () => {
      isExpanded.value = !isExpanded.value;
    };

    return {
      isExpanded,
      toggleMenu,
    };
  },
});
</script>

<style lang="css">
@import './CollapsibleMenuList.css';
</style>