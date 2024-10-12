<template>
  <div
    v-if="isOpen"
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <button class="close-button" @click="closeModal" aria-label="Close modal">×</button>
      <h2 id="modal-title"><slot name="title"></slot></h2>
      <div id="modal-description">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isOpen = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newVal) => {
        if (!props.disabled) {
          isOpen.value = newVal;
        }
      }
    );

    const closeModal = () => {
      if (!props.disabled) {
        isOpen.value = false;
        emit('update:modelValue', false);
      }
    };

    return {
      isOpen,
      closeModal,
    };
  },
});
</script>

<style lang="css">
@import './Modal.css';
</style>