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
    { id: 1, title: 'Episode 1: Introduction' },
    { id: 2, title: 'Episode 2: The Journey Begins' },
    { id: 3, title: 'Episode 3: Deep Dive' },
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