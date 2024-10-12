<script lang="ts">
  import { onMount } from 'svelte';

  export let images: string[] = [];
  export let isRotating: boolean = false;
  export let isZoomedIn: boolean = false;
  export let isLoading: boolean = true;
  
  let currentIndex = 0;
  let timer;
  let viewer: HTMLDivElement;

  function startRotation() {
    if (isRotating) {
      timer = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
      }, 100);
    }
  }

  function stopRotation() {
    clearInterval(timer);
  }

  function toggleZoom() {
    isZoomedIn = !isZoomedIn;
  }

  onMount(() => {
    isLoading = false;
    if (isRotating) startRotation();
    return () => stopRotation();
  });
</script>

<div class="image-viewer" bind:this={viewer}>
  {#if isLoading}
    <div class="loading">Loading...</div>
  {:else}
    <img src={images[currentIndex]} alt="360-degree view" class:is-zoomed-in={isZoomedIn} />
    <button on:click={toggleZoom} aria-label="Toggle Zoom">{isZoomedIn ? 'Zoom Out' : 'Zoom In'}</button>
  {/if}
</div>

<style lang="css">
  @import './360-DegreeImageViewer.css';
</style>