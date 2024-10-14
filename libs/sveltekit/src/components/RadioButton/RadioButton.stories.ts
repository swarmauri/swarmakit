import RadioButton from './RadioButton.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<RadioButton> = {
  title: 'component/Forms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
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
    selected: false,
    disabled: false,
    label: 'Default',
  }
};

export const Selected: Story = {
  args: {
    selected: true,
    disabled: false,
    label: 'Selected',
  }
};

export const Unselected: Story = {
  args: {
    selected: false,
    disabled: false,
    label: 'Unselected',
  }
};

export const Disabled: Story = {
  args: {
    selected: false,
    disabled: true,
    label: 'Disabled',
  }
};