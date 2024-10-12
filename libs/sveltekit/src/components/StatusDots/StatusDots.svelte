<script lang="ts">
  export enum Status {
    Online = 'online',
    Offline = 'offline',
    Busy = 'busy',
    Idle = 'idle'
  }

  export let status: Status = Status.Offline;
</script>

<div role="img" aria-label="Status Indicator" class={`status-dot ${status}`}></div>

<style lang="css">
  @import './StatusDots.css';
</style>