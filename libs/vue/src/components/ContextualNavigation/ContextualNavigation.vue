
<template>
  <div class="contextual-navigation" :aria-hidden="!isVisible">
    <button @click="toggleMenu" class="contextual-toggle" :aria-expanded="isVisible">
      <span v-if="isVisible">Close Menu</span>
      <span v-else>Open Menu</span>
    </button>
    <div v-if="isVisible" class="contextual-menu" role="menu">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" role="menuitem">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface MenuItem {
  name: string;
  link: string;
}

export default defineComponent({
  name: 'ContextualNavigation',
  props: {
    menuItems: {
      type: Array as () => MenuItem[],
      required: true,
    },
  },
  setup() {
    const isVisible = ref(false);
    const toggleMenu = () => {
      isVisible.value = !isVisible.value;
    };

    return {
      isVisible,
      toggleMenu,
    };
  },
});
</script>




<style scoped lang="css">
@import './ContextualNavigation.css';
</style>
