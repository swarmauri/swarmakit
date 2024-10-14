import DataSummary from './DataSummary.vue';

export default {
  title: 'components/Data/DataSummary',
  component: DataSummary,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { DataSummary },
  setup() {
    return { args };
  },
  template: '<DataSummary v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  data: [],
};

export const SummaryCalculated = Template.bind({});
SummaryCalculated.args = {
  data: [10, 20, 30, 40],
};

export const Error = Template.bind({});
Error.args = {
  data: [],
};