<script lang="ts">
  export let markers: { id: number; label: string; lat: number; lng: number }[] = [];
  export let selectedMarkerId: number | null = null;
  export let loading: boolean = false;

  function selectMarker(markerId: number) {
    selectedMarkerId = markerId;
  }
</script>

<div class="map-container" role="application" aria-label="Interactive Media Map">
  {#if loading}
    <div class="loading" role="status" aria-live="polite">Loading...</div>
  {:else}
    <div class="map" aria-hidden={loading}>
      {#each markers as marker}
        <div 
          class="marker" 
          on:click={() => selectMarker(marker.id)} 
          aria-label={`Marker ${marker.label}`} 
          tabindex="0"
          role="button"
          on:keydown={(e) => e.key === 'Enter' && selectMarker(marker.id)}
          style="top: {marker.lat}%; left: {marker.lng}%"
        >
          {marker.label}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="css">
  @import './InteractiveMediaMap.css';
</style>