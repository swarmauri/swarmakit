import Upload from './Upload.vue';

export default {
  title: 'Indicators/Upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select', options: ['uploading', 'downloading', 'completed', 'paused', 'failed'] },
      description: 'Current status of the upload process',
    },
  },
};

const Template = (args: any) => ({
  components: { Upload },
  setup() {
    return { args };
  },
  template: '<Upload v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  status: 'uploading',
};

export const Uploading = Template.bind({});
Uploading.args = {
  status: 'uploading',
};

export const Downloading = Template.bind({});
Downloading.args = {
  status: 'downloading',
};

export const Completed = Template.bind({});
Completed.args = {
  status: 'completed',
};

export const Paused = Template.bind({});
Paused.args = {
  status: 'paused',
};

export const Failed = Template.bind({});
Failed.args = {
  status: 'failed',
};