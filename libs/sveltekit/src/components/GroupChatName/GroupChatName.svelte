<script lang="ts">
  export let name: string = '';
  export let state: 'displayed' | 'hidden' | 'edited' = 'displayed';
</script>

<div class="group-chat-name {state}" role="heading" aria-label="Group chat name">
  {#if state !== 'hidden'}
    <span>{name}</span>
  {/if}
</div>

<style lang="css">
  @import './GroupChatName.css';
</style>