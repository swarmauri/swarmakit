import React from 'react';
import VideoPlayerAdvanced from './VideoPlayerAdvanced';

export default {
  title: 'Media/VideoPlayerAdvanced',
  component: VideoPlayerAdvanced,
};

const Template = (args) => <VideoPlayerAdvanced {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
  subtitlesSrc: 'https://example.com/subtitles.vtt',
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

export const SubtitlesOnOff = Template.bind({});
SubtitlesOnOff.args = {
  ...Default.args,
};

export const PiPMode = Template.bind({});
PiPMode.args = {
  ...Default.args,
};