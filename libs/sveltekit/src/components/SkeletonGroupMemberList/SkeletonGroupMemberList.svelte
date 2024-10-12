<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-group-member-list" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading group member list"
>
  {#if state === 'loading'}
    <div class="skeleton-member" aria-label="Skeleton member"></div>
    <div class="skeleton-member" aria-label="Skeleton member"></div>
    <div class="skeleton-member" aria-label="Skeleton member"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonGroupMemberList.css';
</style>