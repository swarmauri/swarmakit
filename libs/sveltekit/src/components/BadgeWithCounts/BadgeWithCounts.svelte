<script lang="ts">
  export let count: number = 0;
  export let maxCount: number = 99;

  $: displayCount = count > maxCount ? `${maxCount}+` : count.toString();
</script>

<span class="badge-with-counts" role="status" aria-live="polite">
  {displayCount}
</span>

<style lang="css">
  @import './BadgeWithCounts.css';
</style>