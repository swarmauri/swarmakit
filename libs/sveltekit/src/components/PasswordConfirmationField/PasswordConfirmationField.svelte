<script lang="ts">
  import { writable } from 'svelte/store';

  export let password: string = '';
  export let confirmPassword: string = '';
  export let disabled: boolean = false;
  export let minLength: number = 8;

  const passwordsMatch = writable<boolean>(false);

  $: passwordsMatch.set(password === confirmPassword && password.length >= minLength);
</script>

<div class="password-confirmation-field" aria-label="Password Confirmation Field" role="group">
  <input
    type="password"
    bind:value={password}
    placeholder="Enter password"
    minlength={minLength}
    disabled={disabled}
    aria-label="Password"
    class="password-input"
  />
  <input
    type="password"
    bind:value={confirmPassword}
    placeholder="Confirm password"
    minlength={minLength}
    disabled={disabled}
    aria-label="Confirm Password"
    class="confirm-password-input"
  />
  <span class="match-indicator" aria-live="polite">
    {$passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
  </span>
</div>

<style lang="css">
  @import './PasswordConfirmationField.css';
</style>