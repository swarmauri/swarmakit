<script lang="ts">
  export let status: 'online' | 'offline' | 'active' | 'away' | 'busy' = 'offline';

  function getStatusClass() {
    return `status-${status}`;
  }
</script>

<div class="avatar-container" role="img" aria-label={`User is ${status}`}>
  <div class="avatar" class:getStatusClass()></div>
</div>

<style lang="css">
  @import './ThreadAvatar.css';
</style>