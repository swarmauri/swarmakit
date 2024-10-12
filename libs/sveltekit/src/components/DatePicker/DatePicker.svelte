<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let selectedDate: string = '';
  export let startDate: string = '';
  export let endDate: string = '';
  export let showTimePicker: boolean = false;

  const dispatch = createEventDispatcher();

  function handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    selectedDate = input.value;
    dispatch('dateChange', { selectedDate });
  }

  function handleStartDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    startDate = input.value;
    dispatch('startDateChange', { startDate });
  }

  function handleEndDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    endDate = input.value;
    dispatch('endDateChange', { endDate });
  }
</script>

<div class="date-picker-container">
  {#if startDate && endDate}
    <input
      type="date"
      bind:value={startDate}
      on:input={handleStartDateChange}
      aria-label="Start Date Picker"
    />
    <input
      type="date"
      bind:value={endDate}
      on:input={handleEndDateChange}
      aria-label="End Date Picker"
    />
  {:else}
    <input
      type="date"
      bind:value={selectedDate}
      on:input={handleDateChange}
      aria-label="Single Date Picker"
    />
  {/if}
  {#if showTimePicker}
    <input
      type="time"
      bind:value={selectedDate}
      on:input={handleDateChange}
      aria-label="Time Picker"
    />
  {/if}
</div>

<style lang="css">
  .date-picker-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  input[type='date'],
  input[type='time'] {
    padding: 0.5rem;
    font-size: 1rem;
  }
</style>