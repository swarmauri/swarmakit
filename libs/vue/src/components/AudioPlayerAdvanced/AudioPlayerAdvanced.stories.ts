import AudioPlayerAdvanced from './AudioPlayerAdvanced.vue';

export default {
  title: 'Media/AudioPlayerAdvanced',
  component: AudioPlayerAdvanced,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { AudioPlayerAdvanced },
  setup() {
    return { args };
  },
  template: '<AudioPlayerAdvanced v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'sample-audio.mp3',
};

export const Play = Template.bind({});
Play.args = {
  src: 'sample-audio.mp3',
};

export const Pause = Template.bind({});
Pause.args = {
  src: 'sample-audio.mp3',
};

export const Seek = Template.bind({});
Seek.args = {
  src: 'sample-audio.mp3',
};

export const Mute = Template.bind({});
Mute.args = {
  src: 'sample-audio.mp3',
};

export const VolumeControl = Template.bind({});
VolumeControl.args = {
  src: 'sample-audio.mp3',
};

export const SpeedControl = Template.bind({});
SpeedControl.args = {
  src: 'sample-audio.mp3',
};