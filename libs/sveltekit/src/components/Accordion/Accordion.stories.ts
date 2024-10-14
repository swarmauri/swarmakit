import Accordion from './Accordion.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Accordion> = {
  title: 'component/Lists/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' }
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
    isOpen: false,
    title: 'Accordion Title',
    content: 'Accordion content goes here.'
  }
};

export const Open: Story = {
  args: {
    isOpen: true,
    title: 'Accordion Title',
    content: 'Accordion content goes here.'
  }
};

export const Closed: Story = {
  args: {
    isOpen: false,
    title: 'Accordion Title',
    content: 'Accordion content goes here.'
  }
};

export const Hover: Story = {
  args: {
    isOpen: false,
    title: 'Accordion Title',
    content: 'Accordion content goes here.'
  },
  parameters: {
    pseudo: { hover: true }
  }
};