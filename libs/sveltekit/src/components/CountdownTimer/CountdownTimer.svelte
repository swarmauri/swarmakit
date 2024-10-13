<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let duration: number = 60;
  export let isPaused: boolean = false;

  const timeLeft = writable(duration);
  let interval: NodeJS.Timeout;

  const startTimer = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      if (!isPaused) {
        timeLeft.update(n => {
          if (n <= 1) {
            clearInterval(interval);
            return 0;
          }
          return n - 1;
        });
      }
    }, 1000);
  };

  onMount(() => {
    startTimer();
    return () => clearInterval(interval);
  });
</script>

<div class="countdown-timer" aria-live="polite" role="timer">
  <span class="time" aria-label="Time left">
    {#if $timeLeft > 0}
      {$timeLeft}s
    {:else}
      Time's up!
    {/if}
  </span>
  <button on:click={() => isPaused = !isPaused} aria-label="{isPaused ? 'Resume' : 'Pause'}">
    {isPaused ? 'Resume' : 'Pause'}
  </button>
</div>

<style lang="css">
  .countdown-timer {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 6px;
    background-color: #e0e0e0;
    color: #000;
    font-size: 1rem;
    font-weight: 600;
  }

  .time {
    min-width: 60px;
    text-align: center;
  }

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #6200ea;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #3700b3;
  }
</style>