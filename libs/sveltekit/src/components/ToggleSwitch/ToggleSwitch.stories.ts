import ToggleSwitch from './ToggleSwitch.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<ToggleSwitch> = {
  title: 'component/Forms/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
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
    checked: false,
    disabled: false,
  }
};

export const On: Story = {
  args: {
    checked: true,
    disabled: false,
  }
};

export const Off: Story = {
  args: {
    checked: false,
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  }
};