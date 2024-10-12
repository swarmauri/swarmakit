<template>
  <button
    :class="state"
    :disabled="state === 'disabled'"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
    aria-label="Send message"
  >
    Send
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SendButton',
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
@import './SendButton.css';
</style>