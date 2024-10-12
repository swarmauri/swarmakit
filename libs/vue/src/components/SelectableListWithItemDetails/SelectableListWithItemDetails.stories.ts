import SelectableListWithItemDetails from './SelectableListWithItemDetails.vue';

export default {
  title: 'Lists/SelectableListWithItemDetails',
  component: SelectableListWithItemDetails,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { SelectableListWithItemDetails },
  setup() {
    return { args };
  },
  template: '<SelectableListWithItemDetails v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    details: `Details about Item ${i + 1}`,
  })),
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  ...Default.args,
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  ...Default.args,
};

export const DetailsOpened = Template.bind({});
DetailsOpened.args = {
  ...Default.args,
};

export const DetailsClosed = Template.bind({});
DetailsClosed.args = {
  ...Default.args,
};