import React from 'react';
import ComponentCardTitleDescriptionAction from './ComponentCardTitleDescriptionAction';

export default {
  title: 'Components/ComponentCardTitleDescriptionAction',
  component: ComponentCardTitleDescriptionAction,
};

const Template = (args) => <ComponentCardTitleDescriptionAction {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a description of the card content.',
  actionLabel: 'Click Me',
  onActionClick: () => alert('Action clicked!'),
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  title: 'Card Title',
  description: 'This is a longer description of the card content. It provides more detailed information about what the card is about and what it represents.',
  actionLabel: 'Learn More',
  onActionClick: () => alert('Learn more clicked!'),
};

export const CustomActionLabel = Template.bind({});
CustomActionLabel.args = {
  title: 'Special Offer',
  description: 'Get 50% off on your first purchase. Limited time offer!',
  actionLabel: 'Grab Offer',
  onActionClick: () => alert('Offer grabbed!'),
};