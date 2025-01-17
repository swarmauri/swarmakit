import React from 'react';
import { Meta, Story } from '@storybook/react';
import SelectableListWithItemDetails, { SelectableListWithItemDetailsProps } from './SelectableListWithItemDetails';

export default {
  title: 'component/Lists/SelectableListWithItemDetails',
  component: SelectableListWithItemDetails,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SelectableListWithItemDetailsProps> = (args) => <SelectableListWithItemDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: '1', title: 'Item 1', details: 'Details for item 1' },
    { id: '2', title: 'Item 2', details: 'Details for item 2' },
    { id: '3', title: 'Item 3', details: 'Details for item 3' },
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