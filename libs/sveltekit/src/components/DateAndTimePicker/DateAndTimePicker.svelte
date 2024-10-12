<script lang="ts">
  export let selectedDate: string = '';
  export let selectedTime: string = '';
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

<div class="date-time-picker-container">
  <label for="date-picker" aria-label="Select date">
    <input 
      type="date" 
      id="date-picker" 
      bind:value={selectedDate} 
      on:input={handleDateChange} 
      disabled={disabled} 
    />
  </label>
  <label for="time-picker" aria-label="Select time">
    <input 
      type="time" 
      id="time-picker" 
      bind:value={selectedTime} 
      on:input={handleTimeChange} 
      disabled={disabled} 
    />
  </label>
</div>

<style lang="css">
  @import './DateAndTimePicker.css';
</style>