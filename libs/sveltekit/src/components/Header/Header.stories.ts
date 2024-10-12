import Header from './Header.svelte';
import type { HeaderState } from './Header.svelte';

export default {
  title: 'UI Layout/Header',
  component: Header,
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'sticky', 'collapsed', 'expanded'],
    },
    title: { control: 'text' },
  },
};

const Template = (args: { state: HeaderState; title: string }) => ({
  Component: Header,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  title: 'My Website',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
};

export const Sticky = Template.bind({});
Sticky.args = {
  state: 'sticky',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
};