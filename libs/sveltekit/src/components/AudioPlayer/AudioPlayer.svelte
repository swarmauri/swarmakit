<script lang="ts">
  import { onMount } from 'svelte';

  export let src: string;
  export let isPlaying: boolean = false;
  export let isMuted: boolean = false;
  export let volume: number = 1;

  let audio: HTMLAudioElement;

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function toggleMute() {
    isMuted = !isMuted;
    audio.muted = isMuted;
  }

  function handleVolumeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    volume = parseFloat(target.value);
    audio.volume = volume;
  }

  onMount(() => {
    audio.volume = volume;
    audio.muted = isMuted;
  });
</script>

<div class="audio-player">
  <audio bind:this={audio} src={src} />

  <button on:click={togglePlay} aria-label="Play/Pause">
    {isPlaying ? 'Pause' : 'Play'}
  </button>

  <button on:click={toggleMute} aria-label="Mute/Unmute">
    {isMuted ? 'Unmute' : 'Mute'}
  </button>
  
  <input type="range" min="0" max="1" step="0.01" value={volume} on:input={handleVolumeChange} aria-label="Volume Control" />
</div>

<style lang="css">
  @import './AudioPlayer.css';
</style>