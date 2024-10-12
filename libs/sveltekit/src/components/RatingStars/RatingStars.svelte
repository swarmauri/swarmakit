<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let rating: number = 0;
  export let maxRating: number = 5;
  export let interactive: boolean = true;

  const dispatch = createEventDispatcher();

  function handleKeyDown(index: number, event: KeyboardEvent) {
    if ((event.key === 'Enter' || event.key === ' ') && interactive) {
      handleClick(index);
    }
  }

  function handleClick(index: number) {
    if (interactive) {
      rating = index;
      dispatch('rate', { rating });
    }
  }
</script>

<div class="rating-stars" role="radiogroup" aria-label="Rating">
  {#each Array(maxRating) as _, index}
    <div
      role="radio"
      aria-checked={rating > index}
      tabindex={interactive ? "0" : undefined}
      class="star {interactive ? 'interactive' : ''} {rating > index ? 'selected' : ''}"
      on:click={() => handleClick(index + 1)}
      on:keydown={(event) => handleKeyDown(index + 1, event)}>
      ★
    </div>
  {/each}
</div>

<style lang="css">
  @import './RatingStars.css';
</style>