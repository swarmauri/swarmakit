import ActionSheet from './ActionSheet.svelte';

export default {
  title: 'Overlays/ActionSheet',
  component: ActionSheet,
  argTypes: {
    isOpen: { control: 'boolean' },
    actions: { control: 'array' },
  },
};

const Template = (args) => ({
  Component: ActionSheet,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  actions: [
    { label: 'Action 1', action: () => console.log('Action 1 executed') },
    { label: 'Action 2', action: () => console.log('Action 2 executed') },
  ],
};

export const Opened = Template.bind({});
Opened.args = {
  isOpen: true,
  actions: [
    { label: 'Action 1', action: () => console.log('Action 1 executed') },
    { label: 'Action 2', action: () => console.log('Action 2 executed') },
  ],
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  actions: [
    { label: 'Action 1', action: () => console.log('Action 1 executed') },
    { label: 'Action 2', action: () => console.log('Action 2 executed') },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  isOpen: true,
  actions: [
    { label: 'Action 1', action: () => console.log('Action 1 executed') },
    { label: 'Action 2', action: () => console.log('Action 2 executed') },
  ],
};