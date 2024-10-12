import Avatar from './Avatar.svelte';

export default {
  title: 'Miscellaneous/Avatar',
  component: Avatar,
  argTypes: {
    imageUrl: { control: 'text' },
    altText: { control: 'text' },
    isGrouped: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Avatar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  imageUrl: null,
  altText: 'Avatar',
  isGrouped: false,
};

export const WithImage = Template.bind({});
WithImage.args = {
  imageUrl: 'https://via.placeholder.com/150',
  altText: 'User Avatar',
  isGrouped: false,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  imageUrl: null,
  altText: 'Avatar',
  isGrouped: false,
};

export const Grouped = Template.bind({});
Grouped.args = {
  imageUrl: 'https://via.placeholder.com/150',
  altText: 'User Avatar',
  isGrouped: true,
};