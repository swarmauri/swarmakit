import React from 'react';
import PodcastPlayer from './PodcastPlayer';

export default {
  title: 'Media/PodcastPlayer',
  component: PodcastPlayer,
};

const Template = (args) => <PodcastPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  episodes: [
    { title: 'Episode 1', description: 'Description for episode 1' },
    { title: 'Episode 2', description: 'Description for episode 2' },
    { title: 'Episode 3', description: 'Description for episode 3' },
  ],
};

export const Playing = Template.bind({});
Playing.args = {
  ...Default.args,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
};

export const EpisodeList = Template.bind({});
EpisodeList.args = {
  ...Default.args,
};

export const Downloading = Template.bind({});
Downloading.args = {
  ...Default.args,
};