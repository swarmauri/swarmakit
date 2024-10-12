<script lang="ts">
  export let imageUrl: string | null = null;
  export let altText: string = 'Avatar';
  export let isGrouped: boolean = false;
</script>

<div class="avatar" role="img" aria-label={altText}>
  {#if imageUrl}
    <img src={imageUrl} alt={altText} />
  {:else}
    <div class="placeholder">{altText.charAt(0)}</div>
  {/if}
  {#if isGrouped}
    <div class="group-indicator" aria-hidden="true"></div>
  {/if}
</div>

<style lang="css">
  @import './Avatar.css';
</style>