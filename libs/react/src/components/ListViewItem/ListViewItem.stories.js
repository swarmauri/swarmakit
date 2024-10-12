import React from 'react';
import ListViewItem from './ListViewItem';

export default {
  title: 'Components/ListViewItem',
  component: ListViewItem,
};

const Template = (args) => <ListViewItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'List Item Title',
  subtitle: 'This is the subtitle of the list item.',
  icon: <span role="img" aria-label="icon">📄</span>,
  onClick: () => alert('Item clicked!'),
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  title: 'List Item Title',
  icon: <span role="img" aria-label="icon">📄</span>,
  onClick: () => alert('Item clicked!'),
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: 'List Item Title',
  subtitle: 'This is the subtitle of the list item.',
  onClick: () => alert('Item clicked!'),
};