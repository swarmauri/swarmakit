<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div
  class="skeleton-message-bubble"
  aria-hidden={state === 'hidden'}
  role="status"
  aria-live="polite"
>
  {#if state === 'loading'}
    <div class="skeleton"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonMessageBubble.css';
</style>