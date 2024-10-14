import RangeSlider from './RangeSlider.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<RangeSlider> = {
  title: 'component/Forms/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'number' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    labelPosition: { control: 'select', options: ['left', 'center', 'right'] },
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
    min: 0,
    max: 100,
    value: 50,
    disabled: false,
    label: 'Default',
    labelPosition: 'right',
  }
};

export const Min: Story = {
  args: {
    min: 0,
    max: 100,
    value: 0,
    disabled: false,
    label: 'Min',
    labelPosition: 'right',
  }
};

export const Max: Story = {
  args: {
    min: 0,
    max: 100,
    value: 100,
    disabled: false,
    label: 'Max',
    labelPosition: 'right',
  }
};

export const Hover: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    disabled: false,
    label: 'Hover',
    labelPosition: 'right',
  }
};

export const Active: Story = {
  args: {
    min: 0,
    max: 100,
    value: 75,
    disabled: false,
    label: 'Active',
    labelPosition: 'right',
  }
};

export const Disabled: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    disabled: true,
    label: 'Disabled',
    labelPosition: 'right',
  }
};