<template>
  <div role="tablist" class="tabs">
    <button
      v-for="(tab, index) in tabs"
      :key="tab.id"
      class="tab"
      :class="{ active: index === activeIndex, disabled: tab.disabled }"
      role="tab"
      :aria-selected="index === activeIndex"
      :aria-disabled="tab.disabled"
      @click="selectTab(index)"
      @mouseover="onHover(index)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Tab {
  id: number;
  label: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'Tabs',
  props: {
    tabs: {
      type: Array as () => Tab[],
      required: true,
    },
    defaultActiveIndex: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const activeIndex = ref(props.defaultActiveIndex);

    const selectTab = (index: number) => {
      if (!props.tabs[index].disabled) {
        activeIndex.value = index;
      }
    };

    const onHover = (index: number) => {
      if (!props.tabs[index].disabled) {
        // handle hover effect
      }
    };

    return { activeIndex, selectTab, onHover };
  },
});
</script>

<style lang="css">
@import './Tabs.css';
</style>