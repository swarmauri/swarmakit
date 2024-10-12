import AudioWaveformDisplay from './AudioWaveformDisplay.svelte';

export default {
  title: 'Media/AudioWaveformDisplay',
  component: AudioWaveformDisplay,
  argTypes: {
    audioSrc: { control: 'text' },
    isPlaying: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    isScrubbing: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: AudioWaveformDisplay,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  audioSrc: 'audio-sample.mp3',
  isPlaying: false,
  isLoading: false,
  isScrubbing: false,
};

export const Playing = Template.bind({});
Playing.args = {
  ...Default.args,
  isPlaying: true,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  isPlaying: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Scrubbing = Template.bind({});
Scrubbing.args = {
  ...Default.args,
  isScrubbing: true,
};