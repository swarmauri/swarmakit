<script lang="ts">
  import { onMount } from 'svelte';

  export let audioSrc: string;
  export let isPlaying: boolean = false;
  export let isLoading: boolean = false;
  export let isScrubbing: boolean = false;
  
  let canvas: HTMLCanvasElement;
  let audioContext: AudioContext;
  let analyser: AnalyserNode;
  let dataArray: Uint8Array;
  let animationFrameId: number;

  function drawWaveform() {
    const canvasContext = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    canvasContext.clearRect(0, 0, width, height);

    analyser.getByteTimeDomainData(dataArray);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'rgb(0, 123, 255)';
    canvasContext.beginPath();

    const sliceWidth = width / dataArray.length;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      const v = dataArray[i] / 128.0;
      const y = (v * height) / 2;

      if (i === 0) {
        canvasContext.moveTo(x, y);
      } else {
        canvasContext.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasContext.lineTo(width, height / 2);
    canvasContext.stroke();
  }

  onMount(() => {
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    const audioElement = new Audio(audioSrc);
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    animationFrameId = requestAnimationFrame(drawWaveform);

    return () => {
      cancelAnimationFrame(animationFrameId);
      audioContext.close();
    };
  });
</script>

<div class="audio-waveform-display">
  <canvas bind:this={canvas} width="600" height="100" aria-label="Audio Waveform Display"></canvas>
  {#if isLoading}
    <div class="loading-indicator" aria-live="polite">Loading...</div>
  {/if}
  {#if isScrubbing}
    <div class="scrubbing-indicator" aria-live="polite">Scrubbing...</div>
  {/if}
</div>

<style lang="css">
  @import './AudioWaveformDisplay.css';
</style>