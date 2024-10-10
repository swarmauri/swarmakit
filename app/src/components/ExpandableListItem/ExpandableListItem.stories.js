import React from 'react';
import ExpandableListItem from './ExpandableListItem';

export default {
  title: 'Components/ExpandableListItem',
  component: ExpandableListItem,
};

const Template = (args) => <ExpandableListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Expandable List Item',
  content: 'This is the content of the expandable list item.',
};

export const ExpandedByDefault = Template.bind({});
ExpandedByDefault.args = {
  title: 'Expanded List Item',
  content: 'This list item is expanded by default.',
  isExpanded: true,
};