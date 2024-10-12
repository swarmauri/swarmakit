<script lang="ts">
  export let rating: number = 0;
  export let maxRating: number = 5;
  export let interactive: boolean = false;

  let currentHover: number | null = null;

  const handleMouseEnter = (index: number) => {
    if (interactive) currentHover = index;
  };

  const handleMouseLeave = () => {
    if (interactive) currentHover = null;
  };

  const handleClick = (index: number) => {
    if (interactive) rating = index;
  };
</script>

<div role="group" aria-label="Rating Stars" class="rating-stars">
  {#each Array(maxRating) as _, index}
    <span
      class="star"
      aria-hidden="true"
      on:mouseenter={() => handleMouseEnter(index + 1)}
      on:mouseleave={handleMouseLeave}
      on:click={() => handleClick(index + 1)}
      on:keydown={(e) => e.key === 'Enter' && handleClick(index + 1)}
      tabindex={interactive ? 0 : -1}
      class:selected={rating >= index + 1}
      class:hover={currentHover !== null && currentHover >= index + 1}
      class:inactive={!interactive}
    >
      ★
    </span>
  {/each}
</div>

<style lang="css">
  @import './RatingStars.css';
</style>