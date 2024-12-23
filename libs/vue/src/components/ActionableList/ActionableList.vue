
<template>
  <ul class="actionable-list" role="list">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="actionable-list-item"
      :class="{ hovered: hoveredIndex === index, disabled: item.disabled, loading: item.loading }"
      @mouseenter="hoveredIndex = index"
      @mouseleave="hoveredIndex = null"
    >
      <span>{{ item.label }}</span>
      <button
        v-if="!item.disabled && !item.loading"
        @click="triggerAction(index)"
        :disabled="item.disabled"
        :aria-disabled="item.disabled ? 'true' : 'false'"
        class="action-button"
      >
        {{ item.actionLabel }}
      </button>
      <span v-if="item.loading" class="loading-spinner">Loading...</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ListItem {
  label: string;
  actionLabel: string;
  disabled?: boolean;
  loading?: boolean;
}

export default defineComponent({
  name: 'ActionableList',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
  },
  setup() {
    const hoveredIndex = ref<number | null>(null);

    const triggerAction = (index: number) => {
      console.log(`Action triggered for item at index: ${index}`);
    };

    return { hoveredIndex, triggerAction };
  },
});
</script>




<style scoped lang="css">
@import './ActionableList.css';
</style>
