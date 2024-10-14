import Slider from './Slider.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Slider> = {
  title: 'component/Input/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    isDisabled: { control: 'boolean' },
    step: { control: 'number' }
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
    value: 50,
    min: 0,
    max: 100,
    isDisabled: false,
    step: 1
  }
};

export const Min: Story = {
  args: {
    value: 0,
    min: 0,
    max: 100,
    isDisabled: false,
    step: 1
  }
};

export const Max: Story = {
  args: {
    value: 100,
    min: 0,
    max: 100,
    isDisabled: false,
    step: 1
  }
};

export const Disabled: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    isDisabled: true,
    step: 1
  }
};