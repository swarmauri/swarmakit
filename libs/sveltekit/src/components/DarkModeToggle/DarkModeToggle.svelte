<script lang="ts">
  import { writable } from 'svelte/store';

  export let isDarkMode: boolean = false;
  const theme = writable(isDarkMode ? 'dark' : 'light');

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    theme.set(isDarkMode ? 'dark' : 'light');
  }
</script>

<div class="dark-mode-toggle" role="switch" aria-checked={isDarkMode} tabindex="0" on:click={toggleTheme} on:keypress={(e) => e.key === 'Enter' && toggleTheme()}>
  <span class={isDarkMode ? 'dark' : 'light'}>
    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
  </span>
</div>

<style lang="css">
  @import './DarkModeToggle.css';
</style>