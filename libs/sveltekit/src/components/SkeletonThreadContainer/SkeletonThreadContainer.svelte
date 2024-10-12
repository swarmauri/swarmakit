<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-thread-container" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading thread container"
>
  {#if state === 'loading'}
    <div class="skeleton-thread"></div>
    <div class="skeleton-thread"></div>
    <div class="skeleton-thread"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonThreadContainer.css';
</style>