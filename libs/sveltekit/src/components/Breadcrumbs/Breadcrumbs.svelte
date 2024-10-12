<script lang="ts">
  export let items: { label: string; href?: string }[] = [];
  export let activeIndex: number | null = null;
  export let truncate: boolean = false;
</script>

<nav class="breadcrumbs-nav" aria-label="Breadcrumb">
  <ol class="breadcrumbs-list" role="list">
    {#each items as item, index}
      <li class="breadcrumb-item" role="listitem">
        {#if truncate && index > 0 && index < items.length - 1}
          {#if index === 1}
            <span class="breadcrumb-ellipsis">...</span>
          {/if}
        {:else}
          <a href={item.href} class="breadcrumb-link" aria-current={activeIndex === index ? 'page' : undefined}>
            {item.label}
          </a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>

<style lang="css">
  @import './Breadcrumbs.css';
</style>