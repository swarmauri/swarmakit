<script lang="ts">
  export let question: string;
  export let answer: string;
  export let onSolve: () => void;
  export let onError: () => void;

  let userAnswer = '';
  let error = false;

  function handleSubmit() {
    if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
      error = false;
      onSolve && onSolve();
    } else {
      error = true;
      onError && onError();
    }
  }
  
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }
</script>

<div class="captcha">
  <p>{question}</p>
  <input
    type="text"
    bind:value={userAnswer}
    on:keypress={handleKeyPress}
    aria-invalid={error}
    aria-describedby="captcha-error"
    placeholder="Enter your answer"
  />
  <button on:click={handleSubmit}>Submit</button>
  {#if error}
    <p id="captcha-error" class="error">Incorrect answer. Please try again.</p>
  {/if}
</div>

<style lang="css">
  @import './Captcha.css';
</style>