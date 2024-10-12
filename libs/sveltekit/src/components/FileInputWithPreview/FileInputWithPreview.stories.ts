import FileInputWithPreview from './FileInputWithPreview.svelte';

export default {
  title: 'Components/Forms',
  component: FileInputWithPreview,
  tags: ['autodocs']
};

export const Default = {
  args: {
    file: null,
    previewUrl: '',
    errorMessage: '',
    isDisabled: false
  }
};

export const FileUploaded = {
  args: {
    ...Default.args,
    file: new File([''], 'example.png', { type: 'image/png' }),
    previewUrl: 'path/to/example.png'
  }
};

export const PreviewDisplayed = {
  args: {
    ...Default.args,
    previewUrl: 'path/to/example.png'
  }
};

export const Error = {
  args: {
    ...Default.args,
    errorMessage: 'No file selected'
  }
};

export const Disabled = {
  args: {
    ...Default.args,
    isDisabled: true
  }
};