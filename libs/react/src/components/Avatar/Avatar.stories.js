import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Miscellaneous/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  altText: 'John Doe',
};

export const WithImage = Template.bind({});
WithImage.args = {
  imageSrc: 'https://via.placeholder.com/150',
  altText: 'John Doe',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  altText: 'John Doe',
};

export const Grouped = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Avatar imageSrc="https://via.placeholder.com/150" altText="Alice" size="small" />
    <Avatar imageSrc="https://via.placeholder.com/150" altText="Bob" size="medium" />
    <Avatar altText="Charlie" size="large" />
  </div>
);