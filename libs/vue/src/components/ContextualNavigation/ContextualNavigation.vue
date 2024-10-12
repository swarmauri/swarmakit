<template>
  <div class="contextual-navigation" :aria-expanded="isVisible" role="navigation">
    <button @click="toggleVisibility" :aria-expanded="isVisible" aria-controls="contextual-menu">
      Toggle Navigation
    </button>
    <ul v-if="isVisible" id="contextual-menu">
      <li v-for="(item, index) in navigationItems" :key="item.label">
        <span @click="navigateTo(item)">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface NavigationItem {
  label: string;
}

export default defineComponent({
  name: 'ContextualNavigation',
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    navigationItems: {
      type: Array as Array<NavigationItem>,
      required: true,
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    navigateTo(item: NavigationItem) {
      this.$emit('navigate', item);
    },
  },
});
</script>

<style lang="css">
@import './ContextualNavigation.css';
</style>