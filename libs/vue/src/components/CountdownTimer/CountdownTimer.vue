<template>
  <div class="countdown-timer" role="timer" :aria-live="isRunning ? 'assertive' : 'polite'" :aria-label="status">
    <div class="time-display">{{ formattedTime }}</div>
    <button @click="toggleRunning">{{ isRunning ? 'Pause' : 'Start' }}</button>
    <button @click="resetTimer">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

export default defineComponent({
  name: 'CountdownTimer',
  props: {
    initialTime: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const timeLeft = ref(props.initialTime);
    const isRunning = ref(false);
    const interval = ref<number | null>(null);

    const formattedTime = computed(() => {
      const minutes = Math.floor(timeLeft.value / 60);
      const seconds = timeLeft.value % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    });

    const status = computed(() => {
      if (timeLeft.value === 0) return 'Completed';
      return isRunning.value ? 'Running' : 'Paused';
    });

    const toggleRunning = () => {
      if (isRunning.value) {
        clearInterval(interval.value!);
        interval.value = null;
      } else {
        interval.value = setInterval(() => {
          if (timeLeft.value > 0) timeLeft.value -= 1;
        }, 1000);
      }
      isRunning.value = !isRunning.value;
    };

    const resetTimer = () => {
      timeLeft.value = props.initialTime;
      if (isRunning.value) toggleRunning();
    };

    watch(timeLeft, (newTime) => {
      if (newTime === 0) {
        clearInterval(interval.value!);
        isRunning.value = false;
      }
    });

    return {
      formattedTime,
      toggleRunning,
      resetTimer,
      isRunning,
      status,
    };
  },
});
</script>

<style lang="css">
@import './CountdownTimer.css';
</style>