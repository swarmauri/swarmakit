import React from 'react';
import { Meta, Story } from '@storybook/react';
import DragAndDropFileArea from './DragAndDropFileArea';

export default {
  title: 'component/Forms/DragAndDropFileArea',
  component: DragAndDropFileArea,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <DragAndDropFileArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Dragging = Template.bind({});
Dragging.args = {
  disabled: false,
};

export const FileHover = Template.bind({});
FileHover.args = {
  disabled: false,
};

export const FileDropped = Template.bind({});
FileDropped.args = {
  disabled: false,
};

export const FileUploading = Template.bind({});
FileUploading.args = {
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};