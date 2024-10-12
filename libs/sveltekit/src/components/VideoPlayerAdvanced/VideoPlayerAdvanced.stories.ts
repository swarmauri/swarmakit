import VideoPlayerAdvanced from './VideoPlayerAdvanced.svelte';

export default {
  title: 'Media/VideoPlayerAdvanced',
  component: VideoPlayerAdvanced,
  argTypes: {
    isPlaying: { control: 'boolean' },
    isPaused: { control: 'boolean' },
    isBuffering: { control: 'boolean' },
    isFullscreen: { control: 'boolean' },
    areSubtitlesOn: { control: 'boolean' },
    isPiPMode: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: VideoPlayerAdvanced,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isPlaying: false,
  isPaused: true,
  isBuffering: false,
  isFullscreen: false,
  areSubtitlesOn: false,
  isPiPMode: false,
};

export const Play = Template.bind({});
Play.args = {
  ...Default.args,
  isPlaying: true,
  isPaused: false,
};

export const Pause = Template.bind({});
Pause.args = {
  ...Default.args,
  isPlaying: false,
  isPaused: true,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
  isBuffering: true,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
  isFullscreen: true,
};

export const SubtitlesOn = Template.bind({});
SubtitlesOn.args = {
  ...Default.args,
  areSubtitlesOn: true,
};

export const PiPMode = Template.bind({});
PiPMode.args = {
  ...Default.args,
  isPiPMode: true,
};