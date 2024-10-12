import ScrollableList from './ScrollableList.vue';

export default {
  title: 'Lists/ScrollableList',
  component: ScrollableList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { ScrollableList },
  setup() {
    return { args };
  },
  template: '<ScrollableList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })),
  disabled: false,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
  ...Default.args,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: Array.from({ length: 5 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })),
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};