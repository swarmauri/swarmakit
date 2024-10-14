import SystemAlertGlobalNotificationBar from './SystemAlertGlobalNotificationBar.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<SystemAlertGlobalNotificationBar> = {
  title: 'component/Indicators/SystemAlertGlobalNotificationBar',
  component: SystemAlertGlobalNotificationBar,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    type: { 
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info']
    },
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
    message: 'This is an information alert!',
    type: 'info'
  }
};

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success'
  }
};

export const Error: Story = {
  args: {
    message: 'An error has occurred!',
    type: 'error'
  }
};

export const Warning: Story = {
  args: {
    message: 'Please be aware of the following warning.',
    type: 'warning'
  }
};

export const Info: Story = {
  args: {
    message: 'This is an information alert!',
    type: 'info'
  }
};