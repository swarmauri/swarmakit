<script lang="ts">
  export let count: number = 0;
  export let isDisplayed: boolean = true;

  function increment() {
    count += 1;
  }

  function decrement() {
    if (count > 0) {
      count -= 1;
    }
  }
</script>

<div
  class="message-counter"
  aria-hidden={!isDisplayed}
  role="status"
>
  {isDisplayed ? count : ''}
</div>

<style lang="css">
  @import './ThreadUnreadMessageCounter.css';
</style>