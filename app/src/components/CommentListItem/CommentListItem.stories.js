import React from 'react';
import CommentListItem from './CommentListItem';

export default {
  title: 'Components/CommentListItem',
  component: CommentListItem,
};

const Template = (args) => <CommentListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  username: 'John Doe',
  commentText: 'This is a sample comment.',
  timestamp: '2 hours ago',
};

export const LongComment = Template.bind({});
LongComment.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  username: 'Jane Smith',
  commentText: 'This is a very long comment text example to demonstrate how the component handles longer content gracefully.',
  timestamp: '1 hour ago',
};

export const RecentComment = Template.bind({});
RecentComment.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  username: 'Emily Johnson',
  commentText: 'Just now!',
  timestamp: 'a few seconds ago',
};