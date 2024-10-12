<script lang="ts">
  export type CardState = 'visible' | 'hidden' | 'hovered' | 'clicked' | 'expanded' | 'collapsed';
  export let state: CardState = 'visible';
  export let title: string = 'Card Title';
  export let content: string = 'Card content goes here.';
  
  const handleClick = () => {
    if (state === 'clicked') {
      state = 'expanded';
    } else if (state === 'expanded') {
      state = 'collapsed';
    }
  };
</script>

<div
  class="card"
  class:visible={state === 'visible'}
  class:hidden={state === 'hidden'}
  class:hovered={state === 'hovered'}
  class:clicked={state === 'clicked'}
  class:expanded={state === 'expanded'}
  class:collapsed={state === 'collapsed'}
  role="button"
  tabindex="0"
  on:click={handleClick}
  on:keydown={(e) => e.key === 'Enter' && handleClick()}
>
  <h2>{title}</h2>
  <p>{content}</p>
</div>

<style lang="css">
  @import './Card.css';
</style>