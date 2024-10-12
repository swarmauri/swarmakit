<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="onClick"
    aria-pressed="active"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        'button-primary': this.variant === 'primary',
        'button-secondary': this.variant === 'secondary',
        'button-disabled': this.disabled,
        'button-active': this.active,
      };
    },
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
});
</script>

<style lang="css">
@import './Button.css';
</style>