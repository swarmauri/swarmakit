import SortControl from './SortControl.vue';

export default {
  title: 'components/Data/SortControl',
  component: SortControl,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { SortControl },
  setup() {
    return { args };
  },
  template: '<SortControl v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'Date'],
};

export const Ascending = Template.bind({});
Ascending.args = {
  ...Default.args,
};

export const Descending = Template.bind({});
Descending.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};