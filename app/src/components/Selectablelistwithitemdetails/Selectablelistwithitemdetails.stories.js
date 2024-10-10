import React from 'react';
import Selectablelistwithitemdetails from './Selectablelistwithitemdetails';

export default {
  title: 'Lists/Selectablelistwithitemdetails',
  component: Selectablelistwithitemdetails,
};

const Template = (args) => <Selectablelistwithitemdetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 5 }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    details: `Details for Item ${i + 1}`,
  })),
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  items: [...Default.args.items],
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  items: [...Default.args.items],
};

export const DetailsOpened = Template.bind({});
DetailsOpened.args = {
  items: [...Default.args.items],
};

export const DetailsClosed = Template.bind({});
DetailsClosed.args = {
  items: [...Default.args.items],
};