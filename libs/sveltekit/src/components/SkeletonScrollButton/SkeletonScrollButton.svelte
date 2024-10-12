<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-scroll-button" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading scroll button"
>
  {#if state === 'loading'}
    <div class="skeleton-circle" aria-label="Skeleton button"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonScrollButton.css';
</style>