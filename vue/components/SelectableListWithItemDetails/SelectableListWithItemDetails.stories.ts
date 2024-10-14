import { Meta, StoryFn } from '@storybook/vue3';
import SelectableListWithItemDetails from './SelectableListWithItemDetails.vue';

export default {
  title: 'component/Lists/SelectableListWithItemDetails',
  component: SelectableListWithItemDetails,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof SelectableListWithItemDetails>;

const Template: StoryFn<typeof SelectableListWithItemDetails> = (args) => ({
  components: { SelectableListWithItemDetails },
  setup() {
    return { args };
  },
  template: `
    <SelectableListWithItemDetails v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 5 }, (_, i) => ({
    id: i,
    label: `Item ${i + 1}`,
    details: `Details for item ${i + 1}`,
  })),
  disabled: false,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  ...Default.args,
};
ItemSelected.play = async ({ args, canvasElement }) => {
  const item = canvasElement.querySelector('.selectable-list-item:nth-child(2)');
  item.click();
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  ...Default.args,
};
ItemDeselected.play = async ({ args, canvasElement }) => {
  const item = canvasElement.querySelector('.selectable-list-item:nth-child(2)');
  item.click();
  item.click();
};

export const DetailsOpened = Template.bind({});
DetailsOpened.args = {
  ...Default.args,
};
DetailsOpened.play = async ({ args, canvasElement }) => {
  const button = canvasElement.querySelector('.selectable-list-item:nth-child(2) .details-button');
  button.click();
};

export const DetailsClosed = Template.bind({});
DetailsClosed.args = {
  ...Default.args,
};
DetailsClosed.play = async ({ args, canvasElement }) => {
  const button = canvasElement.querySelector('.selectable-list-item:nth-child(2) .details-button');
  button.click();
  button.click();
};