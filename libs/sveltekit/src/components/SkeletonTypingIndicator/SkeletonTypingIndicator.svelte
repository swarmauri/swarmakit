<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-typing-indicator" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading typing indicator"
>
  {#if state === 'loading'}
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonTypingIndicator.css';
</style>