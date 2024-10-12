<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div 
  class="skeleton-message-input-box" 
  aria-hidden={state === 'hidden'} 
  role="status" 
  aria-label="Loading message input box"
>
  {#if state === 'loading'}
    <div class="skeleton-input"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonMessageInputBox.css';
</style>