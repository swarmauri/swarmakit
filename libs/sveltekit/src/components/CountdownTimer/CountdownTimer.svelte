<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let duration: number = 60;
  export let isPaused: boolean = false;

  const timeLeft = writable(duration);
  let interval: NodeJS.Timeout;

  onMount(() => {
    if (!isPaused) startTimer();
    return () => clearInterval(interval);
  });

  $: if (!isPaused && $timeLeft > 0) startTimer();

  function startTimer() {
    clearInterval(interval);
    interval = setInterval(() => {
      timeLeft.update((n) => {
        if (n > 0) return n - 1;
        clearInterval(interval);
        return n;
      });
    }, 1000);
  }

  function togglePause() {
    isPaused = !isPaused;
    if (!isPaused) startTimer();
  }
</script>

<div class="countdown-timer" role="timer" aria-live="polite">
  <span class="time-left">{$timeLeft}s</span>
  <button on:click={togglePause}>
    {isPaused ? 'Resume' : 'Pause'}
  </button>
</div>

<style lang="css">
  @import './CountdownTimer.css';
</style>