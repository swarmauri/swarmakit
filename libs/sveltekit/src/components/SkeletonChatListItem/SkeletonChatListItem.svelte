<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-chat-list-item" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading chat list item"
>
  {#if state === 'loading'}
    <div class="avatar-skeleton"></div>
    <div class="text-skeleton"></div>
    <div class="text-skeleton short"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonChatListItem.css';
</style>