<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let selectedDate: string = '';
  export let selectedTime: string = '';
  export let isDisabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    selectedDate = input.value;
    dispatch('dateChange', { selectedDate });
  }

  function handleTimeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    selectedTime = input.value;
    dispatch('timeChange', { selectedTime });
  }
</script>

<div class="date-time-picker-container" aria-disabled={isDisabled}>
  <input
    type="date"
    bind:value={selectedDate}
    on:input={handleDateChange}
    aria-label="Date Picker"
    disabled={isDisabled}
  />
  <input
    type="time"
    bind:value={selectedTime}
    on:input={handleTimeChange}
    aria-label="Time Picker"
    disabled={isDisabled}
  />
</div>

<style lang="css">
  .date-time-picker-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  input[type='date'],
  input[type='time'] {
    padding: 0.5rem;
    font-size: 1rem;
  }

  [aria-disabled='true'] input {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
</style>