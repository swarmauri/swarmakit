<script lang="ts">
  import { onMount } from 'svelte';
  export let duration: number = 60;
  export let isRunning: boolean = false;

  let timeLeft: number = duration;
  let interval;

  onMount(() => {
    if (isRunning) startTimer();
  });

  function startTimer() {
    if (!isRunning || interval) return;
    interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft -= 1;
      } else {
        clearInterval(interval);
        interval = null;
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(interval);
    interval = null;
  }

  $: if (isRunning && !interval) {
    startTimer();
  } else if (!isRunning && interval) {
    pauseTimer();
  }
</script>

<div class="countdown-timer" role="timer" aria-live="polite">
  <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
</div>

<style lang="css">
  @import './CountdownTimer.css';
</style>