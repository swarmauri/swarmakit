import Video from './Video.svelte';

export default {
  title: 'Media/Video',
  component: Video,
  argTypes: {
    uploadState: {
      control: 'radio',
      options: ['uploading', 'paused', 'completed', 'error'],
    },
  },
};

const Template = (args) => ({
  Component: Video,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  uploadState: 'completed',
};

export const Uploading = Template.bind({});
Uploading.args = {
  uploadState: 'uploading',
};

export const Paused = Template.bind({});
Paused.args = {
  uploadState: 'paused',
};

export const Completed = Template.bind({});
Completed.args = {
  uploadState: 'completed',
};

export const Error = Template.bind({});
Error.args = {
  uploadState: 'error',
};