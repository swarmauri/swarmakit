import VideoPlayerAdvanced from './VideoPlayerAdvanced.vue';

export default {
  title: 'Media/VideoPlayerAdvanced',
  component: VideoPlayerAdvanced,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Play', 'Pause', 'Fullscreen', 'Buffering', 'Subtitles On', 'Subtitles Off', 'PiP Mode'],
    },
    videoSource: { control: 'text' },
    subtitles: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { VideoPlayerAdvanced },
  setup() {
    return { args };
  },
  template: '<VideoPlayerAdvanced v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  state: 'Pause',
  videoSource: 'path/to/your/video.mp4',
  subtitles: false,
};

export const Play = Template.bind({});
Play.args = {
  state: 'Play',
  videoSource: 'path/to/your/video.mp4',
  subtitles: false,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  state: 'Fullscreen',
  videoSource: 'path/to/your/video.mp4',
  subtitles: false,
};

export const Buffering = Template.bind({});
Buffering.args = {
  state: 'Buffering',
  videoSource: 'path/to/your/video.mp4',
  subtitles: false,
};

export const SubtitlesOn = Template.bind({});
SubtitlesOn.args = {
  state: 'Subtitles On',
  videoSource: 'path/to/your/video.mp4',
  subtitles: true,
};

export const SubtitlesOff = Template.bind({});
SubtitlesOff.args = {
  state: 'Subtitles Off',
  videoSource: 'path/to/your/video.mp4',
  subtitles: false,
};

export const PiPMode = Template.bind({});
PiPMode.args = {
  state: 'PiP Mode',
  videoSource: 'path/to/your/video.mp4',
  subtitles: false,
};