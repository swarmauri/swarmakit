import React from 'react';
import { Meta, Story } from '@storybook/react';
import Video, { VideoProps } from './Video';

export default {
  title: 'component/Media/Video',
  component: Video,
  tags: ['autodocs'],
} as Meta;

const Template: Story<VideoProps> = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  title: 'Sample Video',
};

export const Uploading = Template.bind({});
Uploading.args = {
  ...Default.args,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
};

export const Completed = Template.bind({});
Completed.args = {
  ...Default.args,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
};