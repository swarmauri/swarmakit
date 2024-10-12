<template>
  <div
    class="context-menu"
    role="menu"
    aria-hidden="!isVisible"
    @contextmenu.prevent="openMenu"
    @click="closeMenu"
    @mouseover="handleHover"
    @mouseleave="closeMenu"
  >
    <slot name="trigger" />
    <div v-show="isVisible" class="menu-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContextMenu',
  setup() {
    const isVisible = ref(false);

    const openMenu = () => {
      isVisible.value = true;
    };

    const closeMenu = () => {
      isVisible.value = false;
    };

    const handleHover = () => {
      isVisible.value = true;
    };

    return {
      isVisible,
      openMenu,
      closeMenu,
      handleHover,
    };
  },
});
</script>

<style lang="css">
@import './ContextMenu.css';
</style>