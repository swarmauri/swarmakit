import Upload from './Upload.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Indicators/Upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['uploading', 'downloading', 'completed', 'paused', 'failed'],
    },
    fileName: {
      control: { type: 'text' },
    },
    progress: {
      control: { type: 'number' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: Upload,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'uploading',
  fileName: 'example.txt',
  progress: 50,
};

export const Uploading = Template.bind({});
Uploading.args = {
  state: 'uploading',
  fileName: 'uploading_file.txt',
  progress: 65,
};

export const Downloading = Template.bind({});
Downloading.args = {
  state: 'downloading',
  fileName: 'downloading_file.txt',
  progress: 30,
};

export const Completed = Template.bind({});
Completed.args = {
  state: 'completed',
  fileName: 'completed_file.txt',
  progress: 100,
};

export const Paused = Template.bind({});
Paused.args = {
  state: 'paused',
  fileName: 'paused_file.txt',
  progress: 45,
};

export const Failed = Template.bind({});
Failed.args = {
  state: 'failed',
  fileName: 'failed_file.txt',
  progress: 0,
};