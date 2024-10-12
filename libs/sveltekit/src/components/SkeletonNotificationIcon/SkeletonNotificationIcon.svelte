<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-notification-icon" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading notification icon"
>
  {#if state === 'loading'}
    <div class="skeleton-circle" aria-label="Skeleton icon"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonNotificationIcon.css';
</style>