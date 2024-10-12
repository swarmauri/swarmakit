<script lang="ts">
  export let isPlaying: boolean = false;
  export let isPaused: boolean = true;
  export let isEpisodeListVisible: boolean = false;
  export let isDownloading: boolean = false;
  export let episodes: string[] = [];
  export let currentEpisodeIndex: number = 0;

  function togglePlayPause() {
    isPlaying = !isPlaying;
    isPaused = !isPaused;
  }

  function toggleEpisodeList() {
    isEpisodeListVisible = !isEpisodeListVisible;
  }

  function downloadEpisode() {
    isDownloading = true;
    setTimeout(() => {
      isDownloading = false;
    }, 3000);
  }

  function selectEpisode(index: number) {
    currentEpisodeIndex = index;
    isPlaying = true;
    isPaused = false;
  }
</script>

<div class="podcast-player" role="region" aria-label="Podcast Player">
  <div class="player-controls">
    <button on:click={togglePlayPause} aria-pressed={isPlaying}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
    <button on:click={toggleEpisodeList} aria-expanded={isEpisodeListVisible}>
      {isEpisodeListVisible ? 'Hide Episodes' : 'Show Episodes'}
    </button>
    <button on:click={downloadEpisode} disabled={isDownloading}>
      {isDownloading ? 'Downloading...' : 'Download'}
    </button>
  </div>
  {#if isEpisodeListVisible}
    <ul class="episode-list">
      {#each episodes as episode, index}
        <li>
          <button on:click={() => selectEpisode(index)} class={index === currentEpisodeIndex ? 'active' : ''}>
            {episode}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="css">
  @import './PodcastPlayer.css';
</style>