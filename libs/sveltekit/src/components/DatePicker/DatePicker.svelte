<script lang="ts">
  export let selectedDate: string = "";
  export let startDate: string = "";
  export let endDate: string = "";
  export let time: string = "";
  export let rangePicker: boolean = false;
  export let timePicker: boolean = false;

  function handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    selectedDate = input.value;
  }

  function handleStartDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    startDate = input.value;
  }

  function handleEndDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    endDate = input.value;
  }

  function handleTimeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    time = input.value;
  }
</script>

<div class="date-picker">
  {#if rangePicker}
    <input 
      type="date" 
      bind:value={startDate} 
      on:input={handleStartDateChange} 
      aria-label="Start Date"
    />
    <span>to</span>
    <input 
      type="date" 
      bind:value={endDate} 
      on:input={handleEndDateChange} 
      aria-label="End Date"
    />
  {:else}
    <input 
      type="date" 
      bind:value={selectedDate} 
      on:input={handleDateChange} 
      aria-label="Select Date"
    />
  {/if}

  {#if timePicker}
    <input 
      type="time" 
      bind:value={time} 
      on:input={handleTimeChange} 
      aria-label="Select Time"
    />
  {/if}
</div>

<style lang="css">
  .date-picker input[type="date"],
  .date-picker input[type="time"] {
    margin: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .date-picker span {
    margin: 0 5px;
  }
</style>