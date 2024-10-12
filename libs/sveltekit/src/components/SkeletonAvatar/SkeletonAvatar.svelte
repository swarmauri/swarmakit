<script lang="ts">
  export type LoadingState = 'loading' | 'hidden';
  export let state: LoadingState = 'loading';
</script>

<div
  class="skeleton-avatar"
  aria-hidden={state === 'hidden'}
  role="img"
  aria-label="Loading avatar"
>
  {#if state === 'loading'}
    <div class="skeleton"></div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonAvatar.css';
</style>