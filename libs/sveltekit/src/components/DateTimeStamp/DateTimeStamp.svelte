<script lang="ts">
  export let isVisible: boolean = true;
  export let timestamp: string = new Date().toISOString();
</script>

<div class="date-time-stamp" aria-hidden="{!isVisible}" role="note">
  {#if isVisible}
    <time datetime={timestamp}>{new Date(timestamp).toLocaleString()}</time>
  {/if}
</div>

<style lang="css">
  @import './DateTimeStamp.css';
</style>