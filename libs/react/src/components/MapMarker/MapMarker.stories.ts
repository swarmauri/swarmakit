import React from 'react';
import { Meta, Story } from '@storybook/react';
import MapMarker, { MapMarkerProps } from './MapMarker';

export default {
  title: 'component/Map Navigation/MapMarker',
  component: MapMarker,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MapMarkerProps> = (args) => <MapMarker {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'default',
  label: 'Default Marker',
};

export const Hovered = Template.bind({});
Hovered.args = {
  status: 'hovered',
  label: 'Hovered Marker',
};
Hovered.parameters = {
  pseudo: { hover: true },
};

export const Selected = Template.bind({});
Selected.args = {
  status: 'selected',
  label: 'Selected Marker',
};

export const Clustered = Template.bind({});
Clustered.args = {
  status: 'clustered',
  label: 'Clustered Marker',
};

export const Disabled = Template.bind({});
Disabled.args = {
  status: 'disabled',
  label: 'Disabled Marker',
};