import CheckList from './CheckList.svelte';
import type { CheckListState } from './CheckList.svelte';

export default {
  title: 'Lists/CheckList',
  component: CheckList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(CheckListState),
    },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: CheckList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: CheckListState.Unchecked,
  items: [
    { label: 'Item 1', checked: false, disabled: false },
    { label: 'Item 2', checked: false, disabled: false },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  state: CheckListState.Checked,
  items: [
    { label: 'Item 1', checked: true, disabled: false },
    { label: 'Item 2', checked: true, disabled: false },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  state: CheckListState.Unchecked,
  items: [
    { label: 'Item 1', checked: false, disabled: false },
    { label: 'Item 2', checked: false, disabled: false },
  ],
};

export const PartiallyChecked = Template.bind({});
PartiallyChecked.args = {
  state: CheckListState.PartiallyChecked,
  items: [
    { label: 'Item 1', checked: true, disabled: false },
    { label: 'Item 2', checked: false, disabled: false },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: CheckListState.Disabled,
  items: [
    { label: 'Item 1', checked: false, disabled: true },
    { label: 'Item 2', checked: true, disabled: true },
  ],
};