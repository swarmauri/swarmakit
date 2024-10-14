import PasswordConfirmationField from './PasswordConfirmationField.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<PasswordConfirmationField> = {
  title: 'component/Forms/PasswordConfirmationField',
  component: PasswordConfirmationField,
  tags: ['autodocs'],
  argTypes: {
    password: { control: 'text' },
    confirmPassword: { control: 'text' },
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
    password: '',
    confirmPassword: '',
    disabled: false,
  }
};

export const Matching: Story = {
  args: {
    password: 'password123',
    confirmPassword: 'password123',
    disabled: false,
  }
};

export const NotMatching: Story = {
  args: {
    password: 'password123',
    confirmPassword: 'password321',
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    password: 'password123',
    confirmPassword: 'password123',
    disabled: true,
  }
};