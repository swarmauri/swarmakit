<script lang="ts">
  export type Chat = { id: number; name: string; lastMessage: string; isSelected: boolean };
  export let chats: Chat[] = [];
  export let onSelect: (id: number) => void = () => {};
  
  const handleKeyPress = (event: KeyboardEvent, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSelect(id);
    }
  };
</script>

<div class="chat-list" role="list">
  {#if chats.length > 0}
    {#each chats as { id, name, lastMessage, isSelected }}
      <div 
        class="chat-item {isSelected ? 'selected' : ''}" 
        role="listitem" 
        tabindex="0"
        aria-selected={isSelected}
        on:click={() => onSelect(id)}
        on:keydown={(event) => handleKeyPress(event, id)}
      >
        <div class="chat-name">{name}</div>
        <div class="chat-message">{lastMessage}</div>
      </div>
    {/each}
  {:else}
    <div class="empty-message" role="listitem">No chats available</div>
  {/if}
</div>

<style lang="css">
  @import './ChatList.css';
</style>