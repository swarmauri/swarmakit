import DataImportDialog from './DataImportDialog.vue';

export default {
  title: 'components/Data/DataImportDialog',
  component: DataImportDialog,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { DataImportDialog },
  setup() {
    return { args };
  },
  template: '<DataImportDialog v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const Importing = Template.bind({});
Importing.args = { importing: true };

export const Success = Template.bind({});
Success.args = { success: true };

export const Error = Template.bind({});
Error.args = { error: 'Import failed' };