import React from 'react';
import { Meta, Story } from '@storybook/react';
import MapLegend, { MapLegendProps } from './MapLegend';

export default {
  title: 'component/Map Navigation/MapLegend',
  component: MapLegend,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MapLegendProps> = (args) => <MapLegend {...args} />;

export const Default = Template.bind({});
Default.args = {
  visibility: 'visible',
  expandState: 'collapsed',
  items: [
    { symbol: '🟢', description: 'Park' },
    { symbol: '🔴', description: 'Restricted Area' },
  ],
};

export const Visible = Template.bind({});
Visible.args = {
  visibility: 'visible',
  expandState: 'expanded',
  items: [
    { symbol: '🟢', description: 'Park' },
    { symbol: '🔴', description: 'Restricted Area' },
    { symbol: '🔵', description: 'Water Body' },
  ],
};

export const Hidden = Template.bind({});
Hidden.args = {
  visibility: 'hidden',
  expandState: 'collapsed',
  items: [],
};

export const Expanded = Template.bind({});
Expanded.args = {
  visibility: 'visible',
  expandState: 'expanded',
  items: [
    { symbol: '🟢', description: 'Park' },
    { symbol: '🔴', description: 'Restricted Area' },
    { symbol: '🔵', description: 'Water Body' },
    { symbol: '🟡', description: 'Construction Zone' },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  visibility: 'visible',
  expandState: 'collapsed',
  items: [
    { symbol: '🟢', description: 'Park' },
    { symbol: '🔴', description: 'Restricted Area' },
  ],
};