import ActionableList from './ActionableList.vue';

export default {
  title: 'Lists/ActionableList',
  component: ActionableList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    'action-triggered': { action: 'action-triggered' },
  },
};

const Template = (args: any) => ({
  components: { ActionableList },
  setup() {
    return { args };
  },
  template: '<ActionableList v-bind="args" @action-triggered="args[\'action-triggered\']" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Item 1', disabled: false, loading: false },
    { label: 'Item 2', disabled: false, loading: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { label: 'Item 1', disabled: false, loading: false },
    { label: 'Item 2', disabled: false, loading: false },
  ],
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  items: [
    { label: 'Item 1', disabled: false, loading: false },
    { label: 'Item 2', disabled: false, loading: false },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Item 1', disabled: true, loading: false },
    { label: 'Item 2', disabled: true, loading: false },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  items: [
    { label: 'Item 1', disabled: false, loading: true },
    { label: 'Item 2', disabled: false, loading: true },
  ],
};