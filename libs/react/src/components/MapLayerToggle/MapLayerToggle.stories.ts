import React from 'react';
import { Meta, Story } from '@storybook/react';
import MapLayerToggle, { MapLayerToggleProps } from './MapLayerToggle';

export default {
  title: 'component/Map Navigation/MapLayerToggle',
  component: MapLayerToggle,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MapLayerToggleProps> = (args) => <MapLayerToggle {...args} />;

export const Active = Template.bind({});
Active.args = {
  status: 'active',
  label: 'Satellite View',
  onClick: () => console.log('Active button clicked'),
};

export const Inactive = Template.bind({});
Inactive.args = {
  status: 'inactive',
  label: 'Terrain View',
  onClick: () => console.log('Inactive button clicked'),
};

export const Hovered = Template.bind({});
Hovered.args = {
  status: 'hovered',
  label: 'Traffic View',
  onClick: () => console.log('Hovered button clicked'),
};
Hovered.parameters = {
  pseudo: { hover: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
  status: 'disabled',
  label: 'Transit View',
  onClick: () => console.log('Disabled button clicked'),
};