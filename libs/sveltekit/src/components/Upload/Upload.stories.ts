import Upload from './Upload.svelte';
import type { UploadState } from './Upload.svelte';

export default {
  title: 'Indicators/Upload',
  component: Upload,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(UploadState),
    },
    progress: {
      control: 'number',
    },
  },
};

const Template = (args) => ({
  Component: Upload,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: UploadState.Uploading,
  progress: 50,
};

export const Uploading = Template.bind({});
Uploading.args = {
  state: UploadState.Uploading,
  progress: 30,
};

export const Downloading = Template.bind({});
Downloading.args = {
  state: UploadState.Downloading,
  progress: 60,
};

export const Completed = Template.bind({});
Completed.args = {
  state: UploadState.Completed,
  progress: 100,
};

export const Paused = Template.bind({});
Paused.args = {
  state: UploadState.Paused,
  progress: 75,
};

export const Failed = Template.bind({});
Failed.args = {
  state: UploadState.Failed,
  progress: 0,
};