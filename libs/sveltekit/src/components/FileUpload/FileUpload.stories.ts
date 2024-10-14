import FileUpload from './FileUpload.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<FileUpload> = {
  title: 'component/Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    uploadProgress: { control: 'number', min: 0, max: 100 },
    isDragAndDrop: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        smallMobile: { name: 'Small Mobile', styles: { width: '320px', height: '568px' } },
        largeMobile: { name: 'Large Mobile', styles: { width: '414px', height: '896px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    multiple: false,
    uploadProgress: 0,
    isDragAndDrop: false,
  }
};

export const SingleFile: Story = {
  args: {
    multiple: false,
    uploadProgress: 0,
    isDragAndDrop: false,
  }
};

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    uploadProgress: 0,
    isDragAndDrop: false,
  }
};

export const DragAndDrop: Story = {
  args: {
    multiple: false,
    uploadProgress: 0,
    isDragAndDrop: true,
  }
};

export const Progress: Story = {
  args: {
    multiple: false,
    uploadProgress: 50,
    isDragAndDrop: false,
  }
};