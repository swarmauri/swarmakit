<template>
  <div class="podcast-player" role="region" aria-label="Podcast Player">
    <div class="controls">
      <button @click="togglePlayPause" aria-label="Play/Pause">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
      <button @click="toggleEpisodeList" aria-label="Show/Hide Episode List">
        Episodes
      </button>
      <button @click="downloadEpisode" aria-label="Download Episode">
        Download
      </button>
    </div>
    <div class="episode-list" v-if="showEpisodeList">
      <ul>
        <li v-for="(episode, index) in episodes" :key="index">
          {{ episode }}
          <button @click="selectEpisode(index)" aria-label="Play Episode">Play</button>
        </li>
      </ul>
    </div>
    <div v-if="state === 'Downloading'" class="downloading">
      Downloading...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PodcastPlayer',
  props: {
    state: {
      type: String,
      default: 'Paused',
    },
    episodes: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const isPlaying = ref(props.state === 'Playing');
    const showEpisodeList = ref(false);

    const togglePlayPause = () => {
      isPlaying.value = !isPlaying.value;
    };

    const toggleEpisodeList = () => {
      showEpisodeList.value = !showEpisodeList.value;
    };

    const downloadEpisode = () => {
      // Simulate downloading
    };

    const selectEpisode = (index: number) => {
      // Logic to play selected episode
    };

    return { isPlaying, showEpisodeList, togglePlayPause, toggleEpisodeList, downloadEpisode, selectEpisode };
  },
});
</script>

<style lang="css">
@import './PodcastPlayer.css';
</style>