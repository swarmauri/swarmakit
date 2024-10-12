<script lang="ts">
  export type MenuItem = {
    label: string;
    action?: () => void;
    disabled?: boolean;
    children?: MenuItem[];
  };

  export let menus: MenuItem[] = [];
  let expandedIndex: number | null = null;

  const toggleMenu = (index: number) => {
    expandedIndex = expandedIndex === index ? null : index;
  };

  const activateItem = (item: MenuItem) => {
    if (!item.disabled && item.action) {
      item.action();
    }
  };
</script>

<div class="sidebar" role="navigation">
  <ul class="menu-list">
    {#each menus as menu, index}
      <li class="menu-item" role="menuitem" aria-expanded={expandedIndex === index}>
        <div
          class="menu-header"
          on:click={() => toggleMenu(index)}
          on:keydown={(e) => e.key === 'Enter' ? toggleMenu(index) : null}
          tabindex="0"
        >
          {menu.label}
        </div>
        {#if expandedIndex === index}
          <ul class="submenu-list">
            {#each menu.children as child}
              <li
                class={`submenu-item ${child.disabled ? 'disabled' : ''}`}
                on:click={() => activateItem(child)}
                on:keydown={(e) => e.key === 'Enter' ? activateItem(child) : null}
                tabindex="0"
              >
                {child.label}
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style lang="css">
  @import './SidebarWithAccordionMenus.css';
</style>