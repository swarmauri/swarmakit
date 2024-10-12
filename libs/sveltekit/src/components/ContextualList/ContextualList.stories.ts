import ContextualList from './ContextualList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/ContextualList',
  component: ContextualList,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'actionTriggered', 'dismissed'],
    },
    listItems: {
      control: { type: 'array' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: ContextualList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  listItems: [
    { label: 'Edit', action: () => alert('Edit triggered') },
    { label: 'Delete', action: () => alert('Delete triggered') },
    { label: 'Share', action: () => alert('Share triggered') },
  ],
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  state: 'actionTriggered',
  listItems: [
    { label: 'Edit', action: () => alert('Edit triggered') },
    { label: 'Delete', action: () => alert('Delete triggered') },
    { label: 'Share', action: () => alert('Share triggered') },
  ],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  state: 'dismissed',
  listItems: [
    { label: 'Edit', action: () => alert('Edit triggered') },
    { label: 'Delete', action: () => alert('Delete triggered') },
    { label: 'Share', action: () => alert('Share triggered') },
  ],
};