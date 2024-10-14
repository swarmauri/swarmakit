// FileDownloader.stories.js
import React from 'react';
import FileDownloader from './FileDownloader';

export default {
  title: 'Components/FileDownloader',
  component: FileDownloader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fileUrl: { control: 'text' },
    fileName: { control: 'text' },
  },
};

const Template = (args) => <FileDownloader {...args} />;

export const Default = Template.bind({});
Default.args = {
  fileUrl: 'https://example.com/sample.pdf',
  fileName: 'sample.pdf',
};

export const ImageDownload = Template.bind({});
ImageDownload.args = {
  fileUrl: 'https://example.com/sample.jpg',
  fileName: 'sample.jpg',
};