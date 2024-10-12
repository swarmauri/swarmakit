<script lang="ts">
  export let isLoading: boolean = true;
</script>

<div class="skeleton-container" role="status" aria-live="polite">
  {#if isLoading}
    <div class="skeleton skeleton-title"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text"></div>
  {:else}
    <div class="content">
      <h2>Loaded Title</h2>
      <p>This is some example text that is displayed when loading is complete.</p>
      <p>Additional content can go here.</p>
      <p>And here is some more content.</p>
    </div>
  {/if}
</div>

<style lang="css">
  @import './SkeletonLoading.css';
</style>