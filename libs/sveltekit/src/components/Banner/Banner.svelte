<script lang="ts">
  export type BannerState = 'displayed' | 'hidden' | 'withCTA' | 'dismissed';
  export let state: BannerState = 'displayed';
  export let message: string = 'This is a banner message.';
  export let ctaLabel: string = 'Learn More';

  const handleDismiss = () => {
    state = 'dismissed';
  };

  const handleCTA = () => {
    if (state === 'withCTA') {
      // Implement CTA action here
    }
  };
</script>

<div
  class="banner"
  class:displayed={state === 'displayed' || state === 'withCTA'}
  class:hidden={state === 'hidden' || state === 'dismissed'}
  role="alert"
>
  <p>{message}</p>
  {#if state === 'withCTA'}
    <button on:click={handleCTA}>{ctaLabel}</button>
  {/if}
  <button on:click={handleDismiss} aria-label="Dismiss banner">×</button>
</div>

<style lang="css">
  @import './Banner.css';
</style>