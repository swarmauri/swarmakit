<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let solved: boolean = false;
  export let error: boolean = false;

  const dispatch = createEventDispatcher();

  function handleSolve() {
    if (!solved) {
      dispatch('solve', { solved: true });
    }
  }

  function handleError() {
    if (!error) {
      dispatch('error', { error: true });
    }
  }
</script>

<div
  class="captcha-container"
  role="group"
  aria-labelledby="captcha-label"
  on:click={handleSolve}
  on:keydown={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSolve();
    }
  }}
  tabindex="0"
>
  <div id="captcha-label" class="captcha-label">
    {solved ? 'Captcha Solved' : 'Please solve the captcha'}
  </div>
  {#if error}
    <div class="captcha-error" aria-live="assertive">Captcha Error</div>
  {/if}
</div>

<style lang="css">
  .captcha-container {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    background-color: #f9f9f9;
  }

  .captcha-error {
    color: red;
    margin-top: 0.5rem;
  }
</style>