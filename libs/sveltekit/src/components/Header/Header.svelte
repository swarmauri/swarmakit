<script lang="ts">
  export type HeaderState = 'visible' | 'hidden' | 'sticky' | 'collapsed' | 'expanded';
  export let state: HeaderState = 'visible';
  export let title: string = 'My Website';
</script>

<header class="header" class:hidden={state === 'hidden'} class:sticky={state === 'sticky'}>
  <div class="header-content" class:collapsed={state === 'collapsed'} class:expanded={state === 'expanded'}>
    <h1>{title}</h1>
    <button on:click={() => alert('Menu Clicked!')} aria-label="Toggle Menu">☰</button>
  </div>
</header>

<style lang="css">
  @import './Header.css';
</style>