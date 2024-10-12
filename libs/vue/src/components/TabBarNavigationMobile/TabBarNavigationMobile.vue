<template>
  <nav class="tab-bar" role="navigation" aria-label="Mobile Tab Bar">
    <ul class="tab-list">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-item"
        :class="{ active: tab.isActive, disabled: tab.isDisabled }"
        :aria-disabled="tab.isDisabled"
      >
        <button
          @click="selectTab(index)"
          @mouseover="hoverTab(index)"
          :disabled="tab.isDisabled"
          :aria-pressed="tab.isActive"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'TabBarNavigationMobile',
  setup() {
    const tabs = reactive([
      { label: 'Home', isActive: true, isDisabled: false },
      { label: 'Search', isActive: false, isDisabled: false },
      { label: 'Notifications', isActive: false, isDisabled: false },
      { label: 'Profile', isActive: false, isDisabled: false },
    ]);

    const selectTab = (index: number) => {
      if (!tabs[index].isDisabled) {
        tabs.forEach((tab, i) => {
          tab.isActive = i === index;
        });
      }
    };

    const hoverTab = (index: number) => {
      if (!tabs[index].isActive && !tabs[index].isDisabled) {
        // Handle hover state if necessary
      }
    };

    return {
      tabs,
      selectTab,
      hoverTab,
    };
  },
});
</script>

<style lang="css">
@import './TabBarNavigationMobile.css';
</style>