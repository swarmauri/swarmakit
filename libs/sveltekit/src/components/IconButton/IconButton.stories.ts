import IconButton from './IconButton.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<IconButton> = {
  title: 'component/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
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
    icon: 'path/to/icon.svg',
    disabled: false,
    ariaLabel: 'Default Icon Button',
  }
};

export const Active: Story = {
  args: {
    icon: 'path/to/icon.svg',
    ariaLabel: 'Active Icon Button',
  }
};

export const Hover: Story = {
  args: {
    icon: 'path/to/icon.svg',
    ariaLabel: 'Hover Icon Button',
  }
};

export const Disabled: Story = {
  args: {
    icon: 'path/to/icon.svg',
    disabled: true,
    ariaLabel: 'Disabled Icon Button',
  }
};