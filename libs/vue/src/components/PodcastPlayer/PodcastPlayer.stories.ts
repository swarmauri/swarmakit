import PodcastPlayer from './PodcastPlayer.vue';

export default {
  title: 'Media/PodcastPlayer',
  component: PodcastPlayer,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Playing', 'Paused', 'Episode List', 'Downloading'],
    },
    episodes: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { PodcastPlayer },
  setup() {
    return { args };
  },
  template: '<PodcastPlayer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  state: 'Paused',
  episodes: ['Episode 1', 'Episode 2', 'Episode 3'],
};

export const Playing = Template.bind({});
Playing.args = {
  state: 'Playing',
  episodes: ['Episode 1', 'Episode 2', 'Episode 3'],
};

export const EpisodeList = Template.bind({});
EpisodeList.args = {
  state: 'Episode List',
  episodes: ['Episode 1', 'Episode 2', 'Episode 3'],
};

export const Downloading = Template.bind({});
Downloading.args = {
  state: 'Downloading',
  episodes: ['Episode 1', 'Episode 2', 'Episode 3'],
};