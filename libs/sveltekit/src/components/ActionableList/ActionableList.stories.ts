import ActionableList from './ActionableList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/ActionableList',
  component: ActionableList,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['hover', 'action-triggered', 'disabled', 'loading'],
    },
    items: {
      control: { type: 'array' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: ActionableList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'hover',
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  state: 'hover',
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  state: 'action-triggered',
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  items: ['Item 1', 'Item 2', 'Item 3'],
  disabled: false,
};