import Accordion from './Accordion.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['open', 'closed', 'hover'],
    },
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: Accordion,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'closed',
  title: 'Accordion Title',
  content: 'Accordion Content',
};

export const Open = Template.bind({});
Open.args = {
  state: 'open',
  title: 'Accordion Title',
  content: 'Accordion Content',
};

export const Closed = Template.bind({});
Closed.args = {
  state: 'closed',
  title: 'Accordion Title',
  content: 'Accordion Content',
};

export const Hover = Template.bind({});
Hover.args = {
  state: 'hover',
  title: 'Accordion Title',
  content: 'Accordion Content',
};