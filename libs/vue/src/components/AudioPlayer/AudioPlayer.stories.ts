import AudioPlayer from './AudioPlayer.vue';

export default {
  title: 'Media/AudioPlayer',
  component: AudioPlayer,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { AudioPlayer },
  setup() {
    return { args };
  },
  template: '<AudioPlayer v-bind="args" />',
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

export const Mute = Template.bind({});
Mute.args = {
  src: 'sample-audio.mp3',
};

export const VolumeControl = Template.bind({});
VolumeControl.args = {
  src: 'sample-audio.mp3',
};