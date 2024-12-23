
<template>
  <div class="tabs" role="tablist">
    <button
      v-for="(tab, index) in tabs"
      :key="tab.id"
      :role="'tab'"
      :aria-selected="activeIndex === index"
      :disabled="tab.disabled"
      :class="{
        active: activeIndex === index,
        disabled: tab.disabled
      }"
      @click="selectTab(index)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

interface Tab {
  id: number;
  label: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'Tabs',
  props: {
    tabs: {
      type: Array as PropType<Tab[]>,
      required: true,
    },
    initialActiveIndex: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const activeIndex = ref(props.initialActiveIndex);

    const selectTab = (index: number) => {
      if (!props.tabs[index].disabled) {
        activeIndex.value = index;
      }
    };

    return { activeIndex, selectTab };
  },
});
</script>




<style scoped lang="css">
@import './Tabs.css';
</style>
