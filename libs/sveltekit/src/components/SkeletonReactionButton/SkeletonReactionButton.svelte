<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-reaction-button" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading reaction button"
>
  {#if state === 'loading'}
    <div class="skeleton-icon"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonReactionButton.css';
</style>