<script lang="ts">
  export let selectedDate: string = '';
  export let startDate: string = '';
  export let endDate: string = '';
  export let showTimePicker: boolean = false;

  function handleDateChange(event: Event, isStartDate = false) {
    const input = event.target as HTMLInputElement;
    if (isStartDate) {
      startDate = input.value;
    } else {
      selectedDate = input.value;
    }
  }

  function handleEndDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    endDate = input.value;
  }
</script>

<div class="date-picker-container">
  {#if showTimePicker}
    <label for="time-picker" aria-label="Select time">
      <input 
        type="datetime-local" 
        id="time-picker" 
        bind:value={selectedDate} 
        on:input={handleDateChange} 
      />
    </label>
  {:else if startDate && endDate}
    <label for="start-date-picker" aria-label="Select start date">
      <input 
        type="date" 
        id="start-date-picker" 
        bind:value={startDate} 
        on:input={(e) => handleDateChange(e, true)} 
      />
    </label>
    <label for="end-date-picker" aria-label="Select end date">
      <input 
        type="date" 
        id="end-date-picker" 
        bind:value={endDate} 
        on:input={handleEndDateChange} 
      />
    </label>
  {:else}
    <label for="single-date-picker" aria-label="Select date">
      <input 
        type="date" 
        id="single-date-picker" 
        bind:value={selectedDate} 
        on:input={handleDateChange} 
      />
    </label>
  {/if}
</div>

<style lang="css">
  @import './DatePicker.css';
</style>