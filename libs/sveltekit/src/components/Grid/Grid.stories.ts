import Grid from './Grid.svelte';
import type { GridState } from './Grid.svelte';

export default {
  title: 'UI Layout/Grid',
  component: Grid,
  argTypes: {
    state: {
      control: 'select',
      options: ['empty', 'populated', 'responsive', 'stretched', 'aligned'],
    },
    items: { control: 'array' },
  },
};

const Template = (args: { state: GridState; items: string[] }) => ({
  Component: Grid,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'populated',
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  items: [],
};

export const Populated = Template.bind({});
Populated.args = {
  state: 'populated',
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const Responsive = Template.bind({});
Responsive.args = {
  state: 'responsive',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const Stretched = Template.bind({});
Stretched.args = {
  state: 'stretched',
  items: ['Item 1', 'Item 2'],
};

export const Aligned = Template.bind({});
Aligned.args = {
  state: 'aligned',
  items: ['Item 1', 'Item 2', 'Item 3'],
};