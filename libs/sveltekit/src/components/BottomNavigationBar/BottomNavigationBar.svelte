<script lang="ts">
  export let items: { label: string; icon: string; selected?: boolean; disabled?: boolean }[] = [];
  export let onSelect: (index: number) => void = () => {};

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelect(index);
    }
  };

  const handleSelect = (index: number) => {
    if (!items[index].disabled) {
      onSelect(index);
    }
  };
</script>

<nav class="bottom-nav" aria-label="Bottom Navigation">
  {#each items as item, index}
    <div
      class="nav-item {item.selected ? 'selected' : ''} {item.disabled ? 'disabled' : ''}"
      role="button"
      tabindex={item.disabled ? '-1' : '0'}
      aria-disabled={item.disabled}
      on:click={() => handleSelect(index)}
      on:keydown={(event) => handleKeyDown(event, index)}
    >
      <img src={item.icon} alt={item.label} class="icon" />
      <span>{item.label}</span>
    </div>
  {/each}
</nav>

<style lang="css">
  @import './BottomNavigationBar.css';
</style>