<script lang="ts">
  export type SectionState = 'visible' | 'hidden' | 'expanded' | 'collapsed';
  export let state: SectionState = 'visible';
  export let title: string = 'Section Title';
  export let content: string = 'This is the section content.';

  const toggleVisibility = () => {
    state = state === 'visible' ? 'hidden' : 'visible';
  };

  const toggleExpansion = () => {
    state = state === 'expanded' ? 'collapsed' : 'expanded';
  };
</script>

<div
  class="section"
  class:visible={state === 'visible' || state === 'expanded'}
  class:hidden={state === 'hidden'}
  class:expanded={state === 'expanded'}
  class:collapsed={state === 'collapsed'}
  role="region"
>
  <h2 on:click={toggleExpansion} tabindex="0" on:keydown={(e) => e.key === 'Enter' && toggleExpansion()}>
    {title}
  </h2>
  <div class="content" aria-hidden={state === 'collapsed'}>
    {content}
  </div>
  <button on:click={toggleVisibility} aria-label={state === 'visible' ? 'Hide section' : 'Show section'}>
    {state === 'visible' ? 'Hide' : 'Show'}
  </button>
</div>

<style lang="css">
  @import './Section.css';
</style>