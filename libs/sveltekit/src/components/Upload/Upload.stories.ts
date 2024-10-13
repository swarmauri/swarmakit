import Upload from './Upload.svelte';

export default {
  title: 'Indicators/Upload',
  component: Upload,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    status: 'completed',
    progress: 100,
  },
};

export const Uploading = {
  args: {
    status: 'uploading',
    progress: 50,
  },
};

export const Downloading = {
  args: {
    status: 'downloading',
    progress: 30,
  },
};

export const Completed = {
  args: {
    status: 'completed',
    progress: 100,
  },
};

export const Paused = {
  args: {
    status: 'paused',
    progress: 70,
  },
};

export const Failed = {
  args: {
    status: 'failed',
    progress: 0,
  },
};