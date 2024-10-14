import Captcha from './Captcha.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Captcha> = {
  title: 'component/Forms/Captcha',
  component: Captcha,
  tags: ['autodocs'],
  argTypes: {
    question: { control: 'text' },
    errorMessage: { control: 'text' },
    solved: { control: 'boolean' },
    onSolve: { action: 'solved' },
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
    question: 'What is 2 + 2?',
    errorMessage: '',
    solved: false,
  }
};

export const Solved: Story = {
  args: {
    question: 'What is 2 + 2?',
    solved: true,
  }
};

export const Error: Story = {
  args: {
    question: 'What is 2 + 2?',
    errorMessage: 'Incorrect answer, please try again.',
    solved: false,
  }
};