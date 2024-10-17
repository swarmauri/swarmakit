import Button from './Button.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Button> = {
  title: 'component/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
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
    label: 'Button',
    type: 'primary',
    disabled: false,
  }
};

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    type: 'primary',
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  }
};

export const Hover: Story = {
  args: {
    label: 'Hover Button',
  }
};

export const Active: Story = {
  args: {
    label: 'Active Button',
  }
};