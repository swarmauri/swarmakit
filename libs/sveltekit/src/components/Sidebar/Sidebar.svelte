<script lang="ts">
  export type SidebarState = 'visible' | 'hidden' | 'collapsed' | 'expanded' | 'hovered';
  export let state: SidebarState = 'visible';
  export let items: string[] = [];
</script>

<aside
  class="sidebar"
  class:hidden={state === 'hidden'}
  class:collapsed={state === 'collapsed'}
  class:expanded={state === 'expanded'}
  class:hovered={state === 'hovered'}
  role="navigation"
>
  <ul>
    {#each items as item}
      <li>
        <button on:click={() => alert(`${item} Clicked!`)} aria-label={`Navigate to ${item}`}>{item}</button>
      </li>
    {/each}
  </ul>
</aside>

<style lang="css">
  @import './Sidebar.css';
</style>