<script lang="ts">
  export let rating: number = 0;
  export let maxRating: number = 5;
  export let status: 'hover' | 'selected' | 'inactive' = 'inactive';

  const handleClick = (value: number) => {
    if (status !== 'inactive') {
      rating = value;
    }
  };
</script>

<div class="rating-stars" role="radiogroup" aria-label="Rating">
  {#each Array(maxRating).fill(0) as _, index}
    <svg
      class="star {status === 'hover' ? 'hover' : ''} {status === 'selected' && index < rating ? 'selected' : ''}"
      viewBox="0 0 24 24"
      aria-checked="{index < rating}"
      role="radio"
      tabindex="0"
      on:click={() => handleClick(index + 1)}
    >
      <path d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.91L19.336 24 12 19.771 4.664 24l1.4-8.923L0 9.167l8.332-1.151z" />
    </svg>
  {/each}
</div>

<style lang="css">
  .rating-stars {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .star {
    width: 24px;
    height: 24px;
    fill: #ccc;
    cursor: pointer;
    transition: fill 0.2s;
  }

  .star:hover,
  .star.hover {
    fill: #ffc107;
  }

  .star.selected {
    fill: #ff9800;
  }

  .rating-stars[aria-disabled='true'] .star {
    cursor: default;
    fill: #e0e0e0;
  }
</style>