import LiveStreamPlayer from './LiveStreamPlayer.vue';

export default {
  title: 'Media/LiveStreamPlayer',
  component: LiveStreamPlayer,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['Live', 'Paused', 'Buffering', 'Muted'] },
    videoSrc: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { LiveStreamPlayer },
  setup() {
    return { args };
  },
  template: '<LiveStreamPlayer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  state: 'Live',
  videoSrc: 'https://www.example.com/live-stream.mp4',
};

export const Paused = Template.bind({});
Paused.args = {
  state: 'Paused',
  videoSrc: 'https://www.example.com/live-stream.mp4',
};

export const Buffering = Template.bind({});
Buffering.args = {
  state: 'Buffering',
  videoSrc: 'https://www.example.com/live-stream.mp4',
};

export const Muted = Template.bind({});
Muted.args = {
  state: 'Muted',
  videoSrc: 'https://www.example.com/live-stream.mp4',
};