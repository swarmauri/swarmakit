<template>
  <div class="date-time-picker-container">
    <input
      type="date"
      :value="dateValue"
      :aria-disabled="disabled"
      :disabled="disabled"
      @input="updateDate"
    />
    <input
      type="time"
      :value="timeValue"
      :aria-disabled="disabled"
      :disabled="disabled"
      @input="updateTime"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DateAndTimePicker',
  props: {
    dateValue: {
      type: String,
      default: '',
    },
    timeValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:dateValue', 'update:timeValue'],
  setup(props, { emit }) {
    const updateDate = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!props.disabled) {
        emit('update:dateValue', target.value);
      }
    };

    const updateTime = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!props.disabled) {
        emit('update:timeValue', target.value);
      }
    };

    return {
      updateDate,
      updateTime,
    };
  },
});
</script>

<style lang="css">
@import './DateAndTimePicker.css';
</style>