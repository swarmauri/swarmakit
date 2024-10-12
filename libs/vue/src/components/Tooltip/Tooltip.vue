<template>
  <div class="tooltip-container" @mouseover="showTooltip" @mouseleave="hideTooltip">
    <slot name="trigger"></slot>
    <div v-if="isVisible" :class="['tooltip-content', type]" role="tooltip">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Tooltip',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'information',
      validator: (value: string) => ['information', 'error'].includes(value),
    },
  },
  setup(props) {
    const isVisible = ref(props.visible);

    const showTooltip = () => {
      isVisible.value = true;
    };

    const hideTooltip = () => {
      isVisible.value = false;
    };

    return {
      isVisible,
      showTooltip,
      hideTooltip,
    };
  },
});
</script>

<style lang="css">
@import './Tooltip.css';
</style>