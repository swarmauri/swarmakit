import CardbasedList from './CardbasedList.svelte';
import type { CardbasedListState } from './CardbasedList.svelte';

export default {
  title: 'Lists/CardbasedList',
  component: CardbasedList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(CardbasedListState),
    },
    cards: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: CardbasedList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: CardbasedListState.Hover,
  cards: [
    { title: 'Card 1', content: 'Content 1', disabled: false },
    { title: 'Card 2', content: 'Content 2', disabled: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  state: CardbasedListState.Hover,
  cards: [
    { title: 'Card 1', content: 'Content 1', disabled: false },
    { title: 'Card 2', content: 'Content 2', disabled: false },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  state: CardbasedListState.Selected,
  cards: [
    { title: 'Card 1', content: 'Content 1', disabled: false },
    { title: 'Card 2', content: 'Content 2', disabled: false },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: CardbasedListState.Disabled,
  cards: [
    { title: 'Card 1', content: 'Content 1', disabled: true },
    { title: 'Card 2', content: 'Content 2', disabled: true },
  ],
};