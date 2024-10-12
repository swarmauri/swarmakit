<script lang="ts">
  export let items: { label: string; href?: string; dropdown?: { label: string; href: string }[] }[] = [];
  let activeDropdownIndex: number | null = null;

  const toggleDropdown = (index: number) => {
    activeDropdownIndex = activeDropdownIndex === index ? null : index;
  };

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown(index);
    }
  };
</script>

<nav class="breadcrumb-nav" aria-label="Breadcrumb">
  {#each items as item, index}
    <div class="breadcrumb-item" role="listitem">
      <a href={item.href} class="breadcrumb-link">{item.label}</a>
      {#if item.dropdown}
        <div
          class="dropdown-trigger"
          role="button"
          tabindex="0"
          on:click={() => toggleDropdown(index)}
          on:keydown={(event) => handleKeyDown(event, index)}
          aria-expanded={activeDropdownIndex === index}
        >
          &#x25BC;
        </div>
        {#if activeDropdownIndex === index}
          <ul class="dropdown-menu" role="menu">
            {#each item.dropdown as dropdownItem}
              <li role="menuitem">
                <a href={dropdownItem.href} class="dropdown-link">{dropdownItem.label}</a>
              </li>
            {/each}
          </ul>
        {/if}
      {/if}
    </div>
  {/each}
</nav>

<style lang="css">
  @import './BreadcrumbWithDropdowns.css';
</style>