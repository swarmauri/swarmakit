<script lang="ts">
  export let password: string = '';
  export let confirmPassword: string = '';
  export let disabled: boolean = false;

  $: isMatching = password === confirmPassword;
</script>

<div class="password-confirmation-field">
  <input 
    type="password" 
    bind:value={password} 
    placeholder="Enter password" 
    {disabled} 
    aria-label="Password" 
  />
  <input 
    type="password" 
    bind:value={confirmPassword} 
    placeholder="Confirm password" 
    {disabled} 
    aria-label="Confirm password" 
    aria-describedby="password-match-status"
  />
  <span id="password-match-status" class:isMatching={isMatching}>
    {isMatching ? 'Passwords match' : 'Passwords do not match'}
  </span>
</div>

<style lang="css">
  .password-confirmation-field {
    display: flex;
    flex-direction: column;
  }

  .password-confirmation-field input[type="password"] {
    padding: 5px;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    font-size: 16px;
  }

  .password-confirmation-field span {
    font-size: 14px;
    color: red;
  }

  .password-confirmation-field span.isMatching {
    color: green;
  }
</style>