import VideoPlayer from './VideoPlayer.svelte';

export default {
  title: 'Media/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
    isPlaying: { control: 'boolean' },
    isPaused: { control: 'boolean' },
    isBuffering: { control: 'boolean' },
    isFullscreen: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: VideoPlayer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isPlaying: false,
  isPaused: true,
  isBuffering: false,
  isFullscreen: false,
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