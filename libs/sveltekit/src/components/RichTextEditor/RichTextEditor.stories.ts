import RichTextEditor from './RichTextEditor.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<RichTextEditor> = {
  title: 'component/Forms/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    readOnly: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
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
    content: '<p>Start writing...</p>',
    readOnly: false,
  }
};

export const Editing: Story = {
  args: {
    content: '<p>Edit this text.</p>',
    readOnly: false,
  }
};

export const ReadOnly: Story = {
  args: {
    content: '<p>This text is read-only.</p>',
    readOnly: true,
  }
};