<script lang="ts">
  import { onMount } from 'svelte';

  export let src: string;
  export let isPlaying: boolean = false;
  export let isMuted: boolean = false;
  export let volume: number = 1;
  export let playbackRate: number = 1;

  let audio: HTMLAudioElement;
  let currentTime: number = 0;

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

  function handleSpeedChange(event: Event) {
    const target = event.target as HTMLInputElement;
    playbackRate = parseFloat(target.value);
    audio.playbackRate = playbackRate;
  }

  function handleSeek(event: Event) {
    const target = event.target as HTMLInputElement;
    currentTime = parseFloat(target.value);
    audio.currentTime = currentTime;
  }

  function updateCurrentTime() {
    currentTime = audio.currentTime;
  }

  onMount(() => {
    audio.volume = volume;
    audio.muted = isMuted;
    audio.playbackRate = playbackRate;
    audio.addEventListener('timeupdate', updateCurrentTime);
  });
</script>

<div class="audio-player-advanced">
  <audio bind:this={audio} src={src} />

  <button on:click={togglePlay} aria-label="Play/Pause">
    {isPlaying ? 'Pause' : 'Play'}
  </button>

  <button on:click={toggleMute} aria-label="Mute/Unmute">
    {isMuted ? 'Unmute' : 'Mute'}
  </button>
  
  <input type="range" min="0" max="1" step="0.01" value={volume} on:input={handleVolumeChange} aria-label="Volume Control" />
  
  <input type="range" min="0.5" max="2" step="0.1" value={playbackRate} on:input={handleSpeedChange} aria-label="Speed Control" />
  
  <input type="range" min="0" max={audio?.duration || 0} step="0.1" value={currentTime} on:input={handleSeek} aria-label="Seek Control" />
</div>

<style lang="css">
  @import './AudioPlayerAdvanced.css';
</style>