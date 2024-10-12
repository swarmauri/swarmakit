import VideoPlayer from './VideoPlayer.vue';

export default {
  title: 'Media/VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Play', 'Pause', 'Buffering', 'Fullscreen'],
    },
    videoSource: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { VideoPlayer },
  setup() {
    return { args };
  },
  template: '<VideoPlayer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  state: 'Pause',
  videoSource: 'path/to/your/video.mp4',
};

export const Play = Template.bind({});
Play.args = {
  state: 'Play',
  videoSource: 'path/to/your/video.mp4',
};

export const Buffering = Template.bind({});
Buffering.args = {
  state: 'Buffering',
  videoSource: 'path/to/your/video.mp4',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  state: 'Fullscreen',
  videoSource: 'path/to/your/video.mp4',
};