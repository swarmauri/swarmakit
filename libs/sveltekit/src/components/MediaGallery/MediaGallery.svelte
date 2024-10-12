<script lang="ts">
  export let isThumbnail: boolean = true;
  export let isExpanded: boolean = false;
  export let isSlideshow: boolean = false;
  export let isZoomed: boolean = false;
  export let currentImageIndex: number = 0;
  export let images: string[] = [];

  function toggleExpand() {
    isExpanded = !isExpanded;
  }

  function toggleSlideshow() {
    isSlideshow = !isSlideshow;
  }

  function toggleZoom() {
    isZoomed = !isZoomed;
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }
</script>

<div class="gallery-container" role="region" aria-label="Media Gallery">
  <div class="gallery-view" aria-hidden={isSlideshow}>
    {#if isThumbnail}
      <img src={images[currentImageIndex]} alt="thumbnail" class="thumbnail" on:click={toggleExpand} on:keydown={toggleExpand} tabindex="0" />
    {/if}
    {#if isExpanded}
      <img src={images[currentImageIndex]} alt="expanded view" class={isZoomed ? 'zoomed' : ''} on:click={toggleZoom} on:keydown={toggleZoom} tabindex="0" />
    {/if}
  </div>
  {#if isSlideshow}
    <div class="slideshow">
      <button on:click={previousImage} on:keydown={previousImage} tabindex="0">Previous</button>
      <img src={images[currentImageIndex]} alt="slideshow image" />
      <button on:click={nextImage} on:keydown={nextImage} tabindex="0">Next</button>
    </div>
  {/if}
  <div class="controls">
    <button on:click={toggleExpand} aria-pressed={isExpanded}>Toggle Expand</button>
    <button on:click={toggleSlideshow} aria-pressed={isSlideshow}>Toggle Slideshow</button>
    <button on:click={toggleZoom} aria-pressed={isZoomed}>Toggle Zoom</button>
  </div>
</div>

<style lang="css">
  @import './MediaGallery.css';
</style>