<script lang="ts">
  export let label: string = 'Admin';
  export let visible: boolean = true;
</script>

{#if visible}
  <div class="group-admin-badge" role="status" aria-label="Group Admin Badge">
    {label}
  </div>
{/if}

<style lang="css">
  @import './GroupAdminBadge.css';
</style>