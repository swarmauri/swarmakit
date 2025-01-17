import React from 'react';
import { Meta, Story } from '@storybook/react';
import PodcastPlayer, { PodcastPlayerProps } from './PodcastPlayer';

export default {
  title: 'component/Media/PodcastPlayer',
  component: PodcastPlayer,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PodcastPlayerProps> = (args) => <PodcastPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  episodes: [
    'Introduction to Podcasting',
    'The Future of Tech',
    'Health and Wellness Tips',
  ],
  initialEpisodeIndex: 0,
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