
<template>
  <div class="countdown-timer" role="timer" :aria-live="isCompleted ? 'off' : 'assertive'">
    <span :class="timerState">{{ formattedTime }}</span>
    <button @click="togglePause" aria-label="Pause or resume countdown">
      {{ isPaused ? 'Resume' : 'Pause' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'CountdownTimer',
  props: {
    duration: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const timeLeft = ref(props.duration);
    const isPaused = ref(false);
    const intervalId = ref<number | null>(null);

    const formattedTime = computed(() => {
      const minutes = Math.floor(timeLeft.value / 60).toString().padStart(2, '0');
      const seconds = (timeLeft.value % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    });

    const timerState = computed(() => {
      if (timeLeft.value <= 0) return 'completed';
      return isPaused.value ? 'paused' : 'running';
    });

    const isCompleted = computed(() => timeLeft.value <= 0);

    const togglePause = () => {
      if (isCompleted.value) return;
      isPaused.value = !isPaused.value;
      if (!isPaused.value) startTimer();
    };

    const startTimer = () => {
      if (intervalId.value !== null) clearInterval(intervalId.value);
      intervalId.value = window.setInterval(() => {
        if (!isPaused.value && timeLeft.value > 0) {
          timeLeft.value -= 1;
        }
      }, 1000);
    };

    onMounted(() => {
      startTimer();
    });

    onUnmounted(() => {
      if (intervalId.value !== null) clearInterval(intervalId.value);
    });

    return { formattedTime, timerState, isPaused, togglePause, isCompleted };
  },
});
</script>




<style scoped lang="css">
@import './CountdownTimer.css';
</style>
