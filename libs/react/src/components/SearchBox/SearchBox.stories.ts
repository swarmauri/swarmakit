import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchBox, { SearchBoxProps } from './SearchBox';

export default {
  title: 'component/Chat/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SearchBoxProps> = (args) => <SearchBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  onSearch: (query: string) => console.log(`Searching for: ${query}`),
};

export const Focused = Template.bind({});
Focused.args = {
  ...Default.args,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  ...Default.args,
};

export const Typing = Template.bind({});
Typing.args = {
  ...Default.args,
  placeholder: 'Typing...',
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  placeholder: '',
};