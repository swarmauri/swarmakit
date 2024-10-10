import React from 'react';
import SelectableListWithItemDetails from './SelectableListWithItemDetails';

export default {
  title: 'Lists/SelectableListWithItemDetails',
  component: SelectableListWithItemDetails,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <SelectableListWithItemDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 5 }, (_, i) => ({
    name: `Item ${i + 1}`,
    details: `Details of Item ${i + 1}`,
  })),
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  items: Array.from({ length: 5 }, (_, i) => ({
    name: `Item ${i + 1}`,
    details: `Details of Item ${i + 1}`,
  })),
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  items: Array.from({ length: 5 }, (_, i) => ({
    name: `Item ${i + 1}`,
    details: `Details of Item ${i + 1}`,
  })),
};

export const DetailsOpened = Template.bind({});
DetailsOpened.args = {
  items: Array.from({ length: 5 }, (_, i) => ({
    name: `Item ${i + 1}`,
    details: `Details of Item ${i + 1}`,
  })),
};

export const DetailsClosed = Template.bind({});
DetailsClosed.args = {
  items: Array.from({ length: 5 }, (_, i) => ({
    name: `Item ${i + 1}`,
    details: `Details of Item ${i + 1}`,
  })),
};