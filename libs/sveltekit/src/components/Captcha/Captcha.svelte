<script lang="ts">
  export let label: string = "Please solve the captcha";
  export let errorMessage: string = "Incorrect, please try again";
  export let solved: boolean = false;
  export let error: boolean = false;

  function handleSolve() {
    // Logic to solve the captcha
    solved = true;
    error = false;
  }
</script>

<div class="captcha">
  <label class="captcha-label" for="captcha-input">{label}</label>
  <div class="captcha-content">
    <input
      id="captcha-input"
      type="text"
      aria-invalid={error}
      aria-describedby="captcha-error"
      class:solved
    />
    <button on:click={handleSolve} aria-label="Submit captcha">Verify</button>
  </div>
  {#if error}
    <p id="captcha-error" class="captcha-error" role="alert">{errorMessage}</p>
  {/if}
</div>

<style lang="css">
  .captcha {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .captcha-label {
    font-size: 16px;
  }

  .captcha-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  #captcha-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  #captcha-input.solved {
    border-color: green;
  }

  .captcha-error {
    color: red;
    font-size: 14px;
  }
</style>