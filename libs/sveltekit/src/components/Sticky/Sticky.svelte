<script lang="ts">
  export let expanded: boolean = false;
  export let scrolled: boolean = false;

  const toggleExpanded = () => {
    expanded = !expanded;
  };
</script>

<div class={`sticky ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : 'collapsed'}`} role="navigation">
  <button on:click={toggleExpanded} aria-expanded={expanded}>
    Toggle
  </button>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style lang="css">
  @import './Sticky.css';
</style>