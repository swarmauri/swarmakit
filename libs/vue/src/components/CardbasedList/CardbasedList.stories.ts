import CardbasedList from './CardbasedList.vue';

export default {
  title: 'Lists/CardbasedList',
  component: CardbasedList,
  tags: ['autodocs'],
  argTypes: {
    cards: { control: 'object' },
    'card-selected': { action: 'card-selected' },
  },
};

const Template = (args: any) => ({
  components: { CardbasedList },
  setup() {
    return { args };
  },
  template: '<CardbasedList v-bind="args" @card-selected="args[\'card-selected\']" />',
});

export const Default = Template.bind({});
Default.args = {
  cards: [
    { title: 'Card 1', description: 'Description 1', selected: false, disabled: false },
    { title: 'Card 2', description: 'Description 2', selected: false, disabled: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  cards: [
    { title: 'Card 1', description: 'Description 1', selected: false, disabled: false },
    { title: 'Card 2', description: 'Description 2', selected: false, disabled: false },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  cards: [
    { title: 'Card 1', description: 'Description 1', selected: true, disabled: false },
    { title: 'Card 2', description: 'Description 2', selected: false, disabled: false },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  cards: [
    { title: 'Card 1', description: 'Description 1', selected: false, disabled: true },
    { title: 'Card 2', description: 'Description 2', selected: false, disabled: true },
  ],
};