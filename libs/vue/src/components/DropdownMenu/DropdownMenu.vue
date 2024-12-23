
<template>
  <div class="dropdown-menu">
    <button @click="toggleDropdown" class="dropdown-toggle" :aria-expanded="isExpanded">
      Menu
    </button>
    <ul v-if="isExpanded" role="menu" class="dropdown-list">
      <li v-for="(item, index) in menuItems" :key="index" role="menuitem">
        <a :href="item.link" @mouseover="hoverItem(index)" @mouseleave="leaveItem" :class="{ active: activeIndex === index }">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface MenuItem {
  name: string;
  link: string;
}

export default defineComponent({
  name: 'DropdownMenu',
  props: {
    menuItems: {
      type: Array as () => MenuItem[],
      required: true,
    },
  },
  setup() {
    const isExpanded = ref(false);
    const activeIndex = ref<number | null>(null);

    const toggleDropdown = () => {
      isExpanded.value = !isExpanded.value;
    };

    const hoverItem = (index: number) => {
      activeIndex.value = index;
    };

    const leaveItem = () => {
      activeIndex.value = null;
    };

    return {
      isExpanded,
      toggleDropdown,
      activeIndex,
      hoverItem,
      leaveItem,
    };
  },
});
</script>




<style scoped lang="css">
@import './DropdownMenu.css';
</style>
