import ValidationMessages from './ValidationMessages.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<ValidationMessages> = {
  title: 'component/Forms/ValidationMessages',
  component: ValidationMessages,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    type: { 
      control: { type: 'select' },
      options: ['success', 'error', 'warning']
    },
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
    message: 'This is a validation message.',
    type: 'success',
  }
};

export const Success: Story = {
  args: {
    message: 'Operation was successful!',
    type: 'success',
  }
};

export const Error: Story = {
  args: {
    message: 'There was an error processing your request.',
    type: 'error',
  }
};

export const Warning: Story = {
  args: {
    message: 'This is a warning. Please check your input.',
    type: 'warning',
  }
};