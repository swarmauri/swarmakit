<script lang="ts">
  export type SplitViewState = 'visible' | 'hidden' | 'resized' | 'collapsed';
  export let state: SplitViewState = 'visible';
  export let leftContent: string = 'Left Pane';
  export let rightContent: string = 'Right Pane';
  let leftPaneWidth = state === 'resized' ? '30%' : '50%';

  const toggleCollapse = () => {
    state = state === 'collapsed' ? 'visible' : 'collapsed';
    leftPaneWidth = state === 'collapsed' ? '0%' : '50%';
  };
</script>

{#if state !== 'hidden'}
  <div class="split-view">
    <div class="left-pane" style="width: {leftPaneWidth}">{leftContent}</div>
    <div class="right-pane">{rightContent}</div>
    <button on:click={toggleCollapse} aria-label="Toggle collapse">Toggle</button>
  </div>
{/if}

<style lang="css">
  @import './SplitView.css';
</style>