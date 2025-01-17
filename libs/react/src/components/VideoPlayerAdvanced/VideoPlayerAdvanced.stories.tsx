import React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoPlayerAdvanced, { VideoPlayerAdvancedProps } from './VideoPlayerAdvanced';

export default {
  title: 'component/Media/VideoPlayerAdvanced',
  component: VideoPlayerAdvanced,
  tags: ['autodocs'],
} as Meta;

const Template: Story<VideoPlayerAdvancedProps> = (args) => <VideoPlayerAdvanced {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  title: 'Sample Video',
  subtitlesUrl: 'https://sample-videos.com/srt/SampleVideo_720x480_5mb.srt',
};

export const Play = Template.bind({});
Play.args = {
  ...Default.args,
};

export const Pause = Template.bind({});
Pause.args = {
  ...Default.args,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
};

export const SubtitlesOn = Template.bind({});
SubtitlesOn.args = {
  ...Default.args,
  subtitlesUrl: 'https://sample-videos.com/srt/SampleVideo_720x480_5mb.srt',
};

export const SubtitlesOff = Template.bind({});
SubtitlesOff.args = {
  ...Default.args,
  subtitlesUrl: undefined,
};

export const PiPMode = Template.bind({});
PiPMode.args = {
  ...Default.args,
};