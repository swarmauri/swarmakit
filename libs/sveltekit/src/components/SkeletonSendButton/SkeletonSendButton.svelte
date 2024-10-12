<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-send-button" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading send button"
>
  {#if state === 'loading'}
    <div class="skeleton-button"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonSendButton.css';
</style>