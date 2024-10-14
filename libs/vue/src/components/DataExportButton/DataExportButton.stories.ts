import DataExportButton from './DataExportButton.vue';

export default {
  title: 'components/Data/DataExportButton',
  component: DataExportButton,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { DataExportButton },
  setup() {
    return { args };
  },
  template: '<DataExportButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  availableFormats: ['csv', 'excel', 'pdf'],
  dataAvailable: true,
};

export const Exporting = Template.bind({});
Exporting.args = {
  ...Default.args,
  dataAvailable: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  dataAvailable: false,
};