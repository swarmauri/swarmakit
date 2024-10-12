import Card from './Card.svelte';
import type { CardState } from './Card.svelte';

export default {
  title: 'UI Layout/Card',
  component: Card,
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'hovered', 'clicked', 'expanded', 'collapsed'],
    },
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template = (args: { state: CardState; title: string; content: string }) => ({
  Component: Card,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  title: 'Default Card',
  content: 'This is the default card content.',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  title: 'Visible Card',
  content: 'This card is visible.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  title: 'Hidden Card',
  content: 'This card is hidden.',
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  title: 'Hovered Card',
  content: 'This card is hovered.',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  title: 'Clicked Card',
  content: 'This card has been clicked.',
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
  title: 'Expanded Card',
  content: 'This card is expanded.',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  title: 'Collapsed Card',
  content: 'This card is collapsed.',
};