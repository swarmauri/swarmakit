<template>
  <div class="date-picker-container">
    <input
      v-if="!range && !timePicker"
      type="date"
      :value="modelValue"
      :aria-disabled="disabled"
      :disabled="disabled"
      @input="updateDate"
    />
    <div v-if="range" class="date-range-picker">
      <input
        type="date"
        :value="startDate"
        :aria-disabled="disabled"
        :disabled="disabled"
        @input="updateStartDate"
      />
      <span>to</span>
      <input
        type="date"
        :value="endDate"
        :aria-disabled="disabled"
        :disabled="disabled"
        @input="updateEndDate"
      />
    </div>
    <input
      v-if="timePicker"
      type="datetime-local"
      :value="modelValue"
      :aria-disabled="disabled"
      :disabled="disabled"
      @input="updateDateTime"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DatePicker',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Boolean,
      default: false,
    },
    timePicker: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:startDate', 'update:endDate'],
  setup(props, { emit }) {
    const updateDate = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!props.disabled) {
        emit('update:modelValue', target.value);
      }
    };

    const updateStartDate = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!props.disabled) {
        emit('update:startDate', target.value);
      }
    };

    const updateEndDate = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!props.disabled) {
        emit('update:endDate', target.value);
      }
    };

    const updateDateTime = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!props.disabled) {
        emit('update:modelValue', target.value);
      }
    };

    return {
      updateDate,
      updateStartDate,
      updateEndDate,
      updateDateTime,
    };
  },
});
</script>

<style lang="css">
@import './DatePicker.css';
</style>