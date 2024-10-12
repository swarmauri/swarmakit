<script lang="ts">
  export let timestamp: string = '';
  export let isVisible: boolean = true;
</script>

<div class="timestamp-container" aria-hidden={!isVisible}>
  {#if isVisible}
    <time class="timestamp" datetime={timestamp}>{timestamp}</time>
  {/if}
</div>

<style lang="css">
  @import './ThreadTimestamp.css';
</style>