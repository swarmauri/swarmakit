<script lang="ts">
  export let images: string[] = [];
  export let activeIndex: number = 0;

  function nextImage() {
    activeIndex = (activeIndex + 1) % images.length;
  }

  function prevImage() {
    activeIndex = (activeIndex - 1 + images.length) % images.length;
  }
</script>

<div class="slider" role="region" aria-live="polite">
  <button on:click={prevImage} aria-label="Previous Image">Prev</button>
  {#if images.length > 0}
    <img src={images[activeIndex]} alt="Image Slider" class="slide" />
  {/if}
  <button on:click={nextImage} aria-label="Next Image">Next</button>
</div>

<style lang="css">
  @import './ImageSlider.css';
</style>