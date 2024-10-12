<script lang="ts">
  export interface Tab {
    id: number;
    title: string;
    disabled?: boolean;
  }

  export let tabs: Tab[] = [];
  export let activeTabId: number;
  export let onTabChange: (activeTab: Tab) => void;

  function activateTab(tab: Tab) {
    if (tab.disabled) return;
    activeTabId = tab.id;
    onTabChange(tab);
  }
</script>

<div role="tablist" aria-label="Sample Tabs">
  {#each tabs as tab (tab.id)}
    <button
      role="tab"
      class="tab-button"
      aria-selected={tab.id === activeTabId}
      aria-disabled={tab.disabled ? 'true' : 'false'}
      on:click={() => activateTab(tab)}
    >
      {tab.title}
    </button>
  {/each}
</div>

<style lang="css">
  @import './Tabs.css';
</style>