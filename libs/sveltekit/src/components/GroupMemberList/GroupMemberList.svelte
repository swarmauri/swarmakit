<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export type Member = {
    id: string;
    name: string;
  };

  export let members: Member[] = [];
  export let expanded: boolean = false;

  const dispatch = createEventDispatcher();

  const toggleExpanded = () => {
    expanded = !expanded;
    dispatch('toggle', expanded);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggleExpanded();
    }
  };
</script>

<div class="group-member-list" role="button" tabindex="0" on:click={toggleExpanded} on:keypress={handleKeyPress} aria-expanded={expanded}>
  <div class="header">
    <h3>Group Members ({members.length})</h3>
    <span>{expanded ? '▲' : '▼'}</span>
  </div>
  {#if expanded}
    <ul>
      {#if members.length > 0}
        {#each members as member}
          <li>{member.name}</li>
        {/each}
      {:else}
        <li>No members</li>
      {/if}
    </ul>
  {/if}
</div>

<style lang="css">
  @import './GroupMemberList.css';
</style>