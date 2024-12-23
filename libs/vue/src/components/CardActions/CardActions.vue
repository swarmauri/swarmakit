
<template>
  <div class="card-actions">
    <button
      v-for="(action, index) in actions"
      :key="index"
      :class="{ hovered: hoveredIndex === index, disabled: action.disabled }"
      :disabled="action.disabled"
      @mouseover="hoveredIndex = index"
      @mouseleave="hoveredIndex = -1"
      @click="action.onClick"
    >
      {{ action.label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

type Action = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export default defineComponent({
  name: 'CardActions',
  props: {
    actions: {
      type: Array as () => Action[],
      required: true,
    },
  },
  setup() {
    const hoveredIndex = ref<number | null>(-1);
    return { hoveredIndex };
  },
});
</script>




<style scoped lang="css">
@import './CardActions.css';
</style>
