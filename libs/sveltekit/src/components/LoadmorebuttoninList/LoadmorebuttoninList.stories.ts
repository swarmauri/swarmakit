import LoadMoreButtonInList from './LoadMoreButtonInList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/LoadMoreButtonInList',
  component: LoadMoreButtonInList,
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
    endOfList: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: LoadMoreButtonInList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  loading: false,
  endOfList: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  endOfList: false,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  loading: false,
  endOfList: true,
};