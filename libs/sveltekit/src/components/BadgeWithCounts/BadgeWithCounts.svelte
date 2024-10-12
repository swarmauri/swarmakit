<script lang="ts">
  export let count: number = 0;
  export let maxCount: number = 99;
</script>

<div class="badge-with-counts" role="status" aria-live="polite">
  {count > maxCount ? `${maxCount}+` : count}
</div>

<style lang="css">
  @import './BadgeWithCounts.css';
</style>