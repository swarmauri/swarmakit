import DragAndDropFileArea from './DragAndDropFileArea.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<DragAndDropFileArea> = {
  title: 'component/Forms/DragAndDropFileArea',
  component: DragAndDropFileArea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    acceptedTypes: { control: 'text' },
    errorMessage: { control: 'text' },
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
    disabled: false,
    multiple: true,
    acceptedTypes: '',
    errorMessage: '',
  }
};

export const Dragging: Story = {
  args: {
    disabled: false,
    multiple: true,
    acceptedTypes: '',
    errorMessage: '',
  }
};

export const FileHover: Story = {
  args: {
    disabled: false,
    multiple: true,
    acceptedTypes: '',
    errorMessage: '',
  }
};

export const FileDropped: Story = {
  args: {
    disabled: false,
    multiple: true,
    acceptedTypes: '',
    errorMessage: '',
  }
};

export const FileUploading: Story = {
  args: {
    disabled: false,
    multiple: true,
    acceptedTypes: '',
    errorMessage: '',
  }
};

export const Error: Story = {
  args: {
    disabled: false,
    multiple: true,
    acceptedTypes: '',
    errorMessage: 'Invalid file type.',
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    multiple: false,
    acceptedTypes: '',
    errorMessage: '',
  }
};