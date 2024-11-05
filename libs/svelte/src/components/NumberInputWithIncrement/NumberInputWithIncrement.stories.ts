import NumberInputWithIncrement from './NumberInputWithIncrement.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<NumberInputWithIncrement> = {
  title: 'component/Forms/NumberInputWithIncrement',
  component: NumberInputWithIncrement,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
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
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  }
};

export const Increment: Story = {
  args: {
    value: 5,
    min: 0,
    max: 10,
    step: 1,
    disabled: false,
  }
};

export const Decrement: Story = {
  args: {
    value: 5,
    min: 0,
    max: 10,
    step: 1,
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    value: 5,
    min: 0,
    max: 10,
    step: 1,
    disabled: true,
  }
};