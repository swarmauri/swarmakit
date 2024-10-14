import Upload from './Upload.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Upload> = {
  title: 'component/Indicators/Upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['uploading', 'downloading', 'completed', 'paused', 'failed'] },
    fileName: { control: 'text' },
    progress: { control: 'number' }
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
    fileName: 'example.txt',
    status: 'uploading',
    progress: 50
  }
};

export const Uploading: Story = {
  args: {
    fileName: 'uploading_file.txt',
    status: 'uploading',
    progress: 30
  }
};

export const Downloading: Story = {
  args: {
    fileName: 'downloading_file.txt',
    status: 'downloading',
    progress: 60
  }
};

export const Completed: Story = {
  args: {
    fileName: 'completed_file.txt',
    status: 'completed',
    progress: 100
  }
};

export const Paused: Story = {
  args: {
    fileName: 'paused_file.txt',
    status: 'paused',
    progress: 70
  }
};

export const Failed: Story = {
  args: {
    fileName: 'failed_file.txt',
    status: 'failed',
    progress: 0
  }
};