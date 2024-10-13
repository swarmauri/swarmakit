<script lang="ts">
  export let selectedDate: string = "";
  export let selectedTime: string = "";
  export let disabled: boolean = false;

  function handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    selectedDate = input.value;
  }

  function handleTimeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    selectedTime = input.value;
  }
</script>

<div class="date-time-picker">
  <input 
    type="date" 
    bind:value={selectedDate} 
    on:input={handleDateChange} 
    aria-label="Select Date" 
    {disabled}
  />
  <input 
    type="time" 
    bind:value={selectedTime} 
    on:input={handleTimeChange} 
    aria-label="Select Time" 
    {disabled}
  />
</div>

<style lang="css">
  .date-time-picker input[type="date"],
  .date-time-picker input[type="time"] {
    margin: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }

  .date-time-picker input[disabled] {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
</style>