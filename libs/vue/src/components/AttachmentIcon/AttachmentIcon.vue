<template>
  <div
    :class="state"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
    role="button"
    aria-label="Attach file"
    :aria-disabled="state === 'disabled'"
    tabindex="0"
  >
    📎
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AttachmentIcon',
  props: {
    state: {
      type: String,
      default: 'enabled',
      validator: (value: string) => ['enabled', 'disabled', 'hovered', 'clicked'].includes(value),
    },
  },
  emits: ['update:state'],
  setup(props, { emit }) {
    const handleMouseOver = () => {
      if (props.state !== 'disabled') {
        emit('update:state', 'hovered');
      }
    };

    const handleMouseLeave = () => {
      if (props.state !== 'disabled') {
        emit('update:state', 'enabled');
      }
    };

    const handleClick = () => {
      if (props.state !== 'disabled') {
        emit('update:state', 'clicked');
        setTimeout(() => emit('update:state', 'enabled'), 200);
      }
    };

    return {
      handleMouseOver,
      handleMouseLeave,
      handleClick,
    };
  },
});
</script>

<style lang="css">
@import './AttachmentIcon.css';
</style>