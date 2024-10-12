<script lang="ts">
  export let imageUrl: string = '';
  export let status: 'online' | 'offline' | 'active' | 'away' | 'busy' = 'offline';
</script>

<div class="group-member-avatar" role="img" aria-label="Group member avatar">
  <img src={imageUrl} alt="Group member" class="avatar-image" />
  <span class="status-indicator {status}" aria-label={status}></span>
</div>

<style lang="css">
  @import './GroupMemberAvatar.css';
</style>