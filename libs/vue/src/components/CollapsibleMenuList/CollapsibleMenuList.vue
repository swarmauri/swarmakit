
<template>
  <ul class="collapsible-menu-list" role="menu">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="menu-item"
      :class="{ expanded: item.expanded, active: item.active }"
      @mouseenter="hoverItem(index)"
      @mouseleave="unhoverItem(index)"
    >
      <button
        class="menu-button"
        :aria-expanded="item.expanded"
        @click="toggleExpand(index)"
      >
        {{ item.label }}
      </button>
      <ul v-if="item.expanded" class="submenu" role="menu">
        <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" role="menuitem">
          {{ subItem }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface MenuItem {
  label: string;
  expanded: boolean;
  active: boolean;
  subItems: string[];
}

export default defineComponent({
  name: 'CollapsibleMenuList',
  props: {
    items: {
      type: Array as () => MenuItem[],
      required: true,
    },
  },
  setup(props) {
    const toggleExpand = (index: number) => {
      props.items[index].expanded = !props.items[index].expanded;
    };

    const hoverItem = (index: number) => {
      props.items[index].active = true;
    };

    const unhoverItem = (index: number) => {
      props.items[index].active = false;
    };

    return { toggleExpand, hoverItem, unhoverItem };
  },
});
</script>




<style scoped lang="css">
@import './CollapsibleMenuList.css';
</style>
