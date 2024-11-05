import VisualCueForAccessibilityFocusIndicator from './VisualCueForAccessibilityFocusIndicator.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<VisualCueForAccessibilityFocusIndicator> = {
  title: 'component/Indicators/VisualCueForAccessibilityFocusIndicator',
  component: VisualCueForAccessibilityFocusIndicator,
  tags: ['autodocs'],
  argTypes: {
    isFocused: { control: 'boolean' }
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
    isFocused: false
  }
};

export const Focused: Story = {
  args: {
    isFocused: true
  }
};

export const Unfocused: Story = {
  args: {
    isFocused: false
  }
};