<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let images: string[] = [];
  export let autoPlay: boolean = false;
  export let interval: number = 3000;

  let currentIndex = writable(0);
  let autoPlayInterval: any;

  function next() {
    currentIndex.update(n => (n + 1) % images.length);
  }

  function prev() {
    currentIndex.update(n => (n - 1 + images.length) % images.length);
  }

  function startAutoPlay() {
    if (autoPlay) {
      autoPlayInterval = setInterval(next, interval);
    }
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  onMount(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  });
</script>

<div class="carousel" role="region" aria-label="Image Carousel" on:mouseenter={stopAutoPlay} on:mouseleave={startAutoPlay}>
  <button on:click={prev} aria-label="Previous Image">‹</button>
  {#each images as image, index (image)}
    <img src={image} alt={`Carousel Image ${index + 1}`} class:hidden={index !== $currentIndex} />
  {/each}
  <button on:click={next} aria-label="Next Image">›</button>
</div>

<style lang="css">
  @import './Carousel.css';
</style>