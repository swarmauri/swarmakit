import Video from './Video.vue';

export default {
  title: 'Media/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Uploading', 'Paused', 'Completed', 'Error'],
    },
    videoSource: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { Video },
  setup() {
    return { args };
  },
  template: '<Video v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  state: 'Paused',
  videoSource: 'path/to/your/video.mp4',
};

export const Uploading = Template.bind({});
Uploading.args = {
  state: 'Uploading',
  videoSource: '',
};

export const Completed = Template.bind({});
Completed.args = {
  state: 'Completed',
  videoSource: 'path/to/your/video.mp4',
};

export const Error = Template.bind({});
Error.args = {
  state: 'Error',
  videoSource: '',
};