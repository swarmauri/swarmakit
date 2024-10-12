<script lang="ts">
  export let items: { label: string; action: () => void }[] = [];
  export let activeIndex: number | null = null;

  const activateItem = (index: number) => {
    activeIndex = index;
    items[index].action();
  };
</script>

<div class="scrollable-horizontal-navigation" role="navigation">
  <div class="nav-container">
    <ul class="nav-items" role="menubar">
      {#each items as item, index}
        <li class={`nav-item ${activeIndex === index ? 'active' : ''}`} role="menuitem">
          <button class="item-link" on:click={() => activateItem(index)}>{item.label}</button>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="css">
  @import './ScrollableHorizontalNavigation.css';
</style>