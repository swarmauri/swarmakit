import FileUpload from './FileUpload.svelte';

export default {
  title: 'Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
};

export const SingleFile = {
  args: {
    multiple: false,
    progress: 0,
  },
};

export const MultipleFiles = {
  args: {
    multiple: true,
    progress: 0,
  },
};

export const DragAndDrop = {
  args: {
    multiple: true,
    progress: 0,
  },
};

export const Progress = {
  args: {
    multiple: true,
    progress: 50,
  },
};