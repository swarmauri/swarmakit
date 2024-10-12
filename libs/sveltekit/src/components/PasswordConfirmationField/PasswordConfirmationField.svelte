<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let password: string = '';
  export let confirmPassword: string = '';
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handlePasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    dispatch('passwordChange', target.value);
  }

  function handleConfirmPasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    dispatch('confirmPasswordChange', target.value);
  }

  $: passwordsMatch = password === confirmPassword;
</script>

<div class="password-confirmation-container">
  <input
    type="password"
    placeholder="Password"
    bind:value={password}
    on:input={handlePasswordChange}
    disabled={disabled}
  />
  <input
    type="password"
    placeholder="Confirm Password"
    bind:value={confirmPassword}
    on:input={handleConfirmPasswordChange}
    disabled={disabled}
  />
  {#if password && confirmPassword}
    <p class={passwordsMatch ? 'match' : 'not-match'}>
      {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
    </p>
  {/if}
</div>

<style lang="css">
  @import './PasswordConfirmationField.css';
</style>