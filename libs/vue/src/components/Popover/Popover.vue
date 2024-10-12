<template>
  <div class="popover-container" @click="toggleVisibility" role="button" aria-expanded="isVisible">
    <slot name="trigger"></slot>
    <div v-if="isVisible" class="popover-content" role="dialog" aria-hidden="false">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Popover',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isVisible = ref(props.visible);

    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

    return {
      isVisible,
      toggleVisibility,
    };
  },
});
</script>

<style lang="css">
@import './Popover.css';
</style>