import PodcastPlayer from './PodcastPlayer.svelte';

export default {
  title: 'Media/PodcastPlayer',
  component: PodcastPlayer,
  argTypes: {
    isPlaying: { control: 'boolean' },
    isPaused: { control: 'boolean' },
    isEpisodeListVisible: { control: 'boolean' },
    isDownloading: { control: 'boolean' },
    currentEpisodeIndex: { control: 'number' },
    episodes: { control: 'array' },
  },
};

const Template = (args) => ({
  Component: PodcastPlayer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isPlaying: false,
  isPaused: true,
  isEpisodeListVisible: false,
  isDownloading: false,
  currentEpisodeIndex: 0,
  episodes: ['Episode 1', 'Episode 2', 'Episode 3'],
};

export const Playing = Template.bind({});
Playing.args = {
  ...Default.args,
  isPlaying: true,
  isPaused: false,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  isPlaying: false,
  isPaused: true,
};

export const EpisodeList = Template.bind({});
EpisodeList.args = {
  ...Default.args,
  isEpisodeListVisible: true,
};

export const Downloading = Template.bind({});
Downloading.args = {
  ...Default.args,
  isDownloading: true,
};