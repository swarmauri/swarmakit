import DateAndTimePicker from './DateAndTimePicker.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<DateAndTimePicker> = {
  title: 'component/Forms/DateAndTimePicker',
  component: DateAndTimePicker,
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'date' },
    time: { control: 'text' },
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
    date: '',
    time: '',
    disabled: false,
  }
};

export const DateSelected: Story = {
  args: {
    date: '2023-10-01',
    time: '',
    disabled: false,
  }
};

export const TimeSelected: Story = {
  args: {
    date: '',
    time: '12:00',
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    date: '',
    time: '',
    disabled: true,
  }
};