import DatePicker from './DatePicker.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<DatePicker> = {
  title: 'component/Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'date' },
    startDate: { control: 'date' },
    endDate: { control: 'date' },
    time: { control: 'text' },
    mode: { control: { type: 'select', options: ['single', 'range', 'time'] } },
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

export const SingleDate: Story = {
  args: {
    date: '',
    mode: 'single',
  }
};

export const DateRange: Story = {
  args: {
    startDate: '',
    endDate: '',
    mode: 'range',
  }
};

export const TimePicker: Story = {
  args: {
    time: '',
    mode: 'time',
  }
};