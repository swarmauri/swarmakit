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
  name: 'IconButton',
  props: {
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
        'icon-button': true,
        'icon-button-disabled': this.disabled,
        'icon-button-active': this.active,
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
@import './IconButton.css';
</style>