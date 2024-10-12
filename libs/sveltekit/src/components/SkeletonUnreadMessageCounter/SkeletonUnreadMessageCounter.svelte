<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-unread-message-counter" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading unread message counter"
>
  {#if state === 'loading'}
    <div class="skeleton-rectangle" aria-label="Skeleton unread message counter"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonUnreadMessageCounter.css';
</style>