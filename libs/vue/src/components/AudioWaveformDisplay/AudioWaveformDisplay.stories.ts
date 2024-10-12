import AudioWaveformDisplay from './AudioWaveformDisplay.vue';

export default {
  title: 'Media/AudioWaveformDisplay',
  component: AudioWaveformDisplay,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    state: { control: 'select', options: ['Playing', 'Paused', 'Loading', 'Scrubbing'] },
  },
};

const Template = (args: any) => ({
  components: { AudioWaveformDisplay },
  setup() {
    return { args };
  },
  template: '<AudioWaveformDisplay v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'sample-audio.mp3',
  state: 'Loading',
};

export const Playing = Template.bind({});
Playing.args = {
  src: 'sample-audio.mp3',
  state: 'Playing',
};

export const Paused = Template.bind({});
Paused.args = {
  src: 'sample-audio.mp3',
  state: 'Paused',
};

export const Loading = Template.bind({});
Loading.args = {
  src: 'sample-audio.mp3',
  state: 'Loading',
};

export const Scrubbing = Template.bind({});
Scrubbing.args = {
  src: 'sample-audio.mp3',
  state: 'Scrubbing',
};