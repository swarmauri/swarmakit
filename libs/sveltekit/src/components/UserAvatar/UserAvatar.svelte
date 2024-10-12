<script lang="ts">
  export let status: 'online' | 'offline' | 'active' | 'away' | 'busy' = 'offline';

  function getStatusClass() {
    return `status-${status}`;
  }
</script>

<div class="user-avatar {getStatusClass()}" aria-label="{status}">
  <img src="/path/to/avatar.png" alt="User Avatar" />
</div>

<style lang="css">
  @import './UserAvatar.css';
</style>