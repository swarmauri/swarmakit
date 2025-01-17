import React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoPlayer, { VideoPlayerProps } from './VideoPlayer';

export default {
  title: 'component/Media/VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs'],
} as Meta;

const Template: Story<VideoPlayerProps> = (args) => <VideoPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  title: 'Sample Video',
};

export const Play = Template.bind({});
Play.args = {
  ...Default.args,
};

export const Pause = Template.bind({});
Pause.args = {
  ...Default.args,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
};