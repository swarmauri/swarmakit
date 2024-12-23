import React from 'react';
import { Meta, Story } from '@storybook/react';
import FileUpload from './FileUpload';

export default {
  title: 'component/Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  multiple: false,
};

export const SingleFile = Template.bind({});
SingleFile.args = {
  multiple: false,
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multiple: true,
};

export const DragAndDrop = Template.bind({});
DragAndDrop.args = {
  multiple: true,
};

export const Progress = Template.bind({});
Progress.args = {
  multiple: true,
};