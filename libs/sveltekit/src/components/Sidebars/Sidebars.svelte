<script lang="ts">
  export let expanded: boolean = false;

  const toggleSidebar = () => {
    expanded = !expanded;
  };
</script>

<div class={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} role="complementary">
  <button on:click={toggleSidebar} aria-expanded={expanded}>
    Toggle
  </button>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style lang="css">
  @import './Sidebars.css';
</style>