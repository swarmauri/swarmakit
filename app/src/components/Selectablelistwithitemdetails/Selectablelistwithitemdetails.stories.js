import React from 'react';
import Selectablelistwithitemdetails from './Selectablelistwithitemdetails';

export default {
  title: 'Lists/Selectablelistwithitemdetails',
  component: Selectablelistwithitemdetails,
};

const Template = (args) => <Selectablelistwithitemdetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Item 1', details: 'Details for Item 1' },
    { title: 'Item 2', details: 'Details for Item 2' },
    { title: 'Item 3', details: 'Details for Item 3' },
  ],
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  ...Default.args,
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  ...Default.args,
};

export const DetailsOpened = Template.bind({});
DetailsOpened.args = {
  ...Default.args,
};

export const DetailsClosed = Template.bind({});
DetailsClosed.args = {
  ...Default.args,
};