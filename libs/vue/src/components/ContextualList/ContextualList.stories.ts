import ContextualList from './ContextualList.vue';

export default {
  title: 'Lists/ContextualList',
  component: ContextualList,
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text' },
    items: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { ContextualList },
  setup() {
    return { args };
  },
  template: '<ContextualList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Open List',
  items: ['Action 1', 'Action 2', 'Action 3'],
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  buttonText: 'Open List',
  items: ['Action 1', 'Action 2', 'Action 3'],
};
ActionTriggered.parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  buttonText: 'Open List',
  items: ['Action 1', 'Action 2', 'Action 3'],
};
Dismissed.parameters = {
  pseudo: { dismissed: true },
};