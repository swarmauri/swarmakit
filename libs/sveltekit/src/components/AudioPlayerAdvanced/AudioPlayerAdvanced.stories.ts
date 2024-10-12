import AudioPlayerAdvanced from './AudioPlayerAdvanced.svelte';

export default {
  title: 'Media/AudioPlayerAdvanced',
  component: AudioPlayerAdvanced,
  argTypes: {
    src: { control: 'text' },
    isPlaying: { control: 'boolean' },
    isMuted: { control: 'boolean' },
    volume: { control: 'number' },
    playbackRate: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: AudioPlayerAdvanced,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  src: 'audio-sample.mp3',
  isPlaying: false,
  isMuted: false,
  volume: 1,
  playbackRate: 1,
};

export const Play = Template.bind({});
Play.args = {
  ...Default.args,
  isPlaying: true,
};

export const Pause = Template.bind({});
Pause.args = {
  ...Default.args,
  isPlaying: false,
};

export const Mute = Template.bind({});
Mute.args = {
  ...Default.args,
  isMuted: true,
};

export const VolumeControl = Template.bind({});
VolumeControl.args = {
  ...Default.args,
  volume: 0.5,
};

export const SpeedControl = Template.bind({});
SpeedControl.args = {
  ...Default.args,
  playbackRate: 1.5,
};

export const Seek = Template.bind({});
Seek.args = {
  ...Default.args,
  currentTime: 30,
};