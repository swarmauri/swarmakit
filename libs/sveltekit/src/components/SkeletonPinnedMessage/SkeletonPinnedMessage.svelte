<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-pinned-message" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading pinned message"
>
  {#if state === 'loading'}
    <div class="skeleton-line" aria-label="Skeleton text line"></div>
    <div class="skeleton-line short" aria-label="Skeleton text line"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonPinnedMessage.css';
</style>