import React from 'react';
import { Meta, Story } from '@storybook/react';
import TagFilter, { TagFilterProps } from './TagFilter';

export default {
  title: 'component/UI Layout/TagFilter',
  component: TagFilter,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TagFilterProps> = (args) => <TagFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: ['JavaScript', 'React', 'TypeScript', 'CSS'],
  activeTags: [],
  onTagAdd: (tag: string) => console.log(`${tag} added`),
  onTagRemove: (tag: string) => console.log(`${tag} removed`),
};

export const Added = Template.bind({});
Added.args = {
  tags: ['JavaScript', 'React', 'TypeScript', 'CSS'],
  activeTags: ['JavaScript'],
  onTagAdd: (tag: string) => console.log(`${tag} added`),
  onTagRemove: (tag: string) => console.log(`${tag} removed`),
};

export const Removed = Template.bind({});
Removed.args = {
  tags: ['JavaScript', 'React', 'TypeScript', 'CSS'],
  activeTags: [],
  onTagAdd: (tag: string) => console.log(`${tag} added`),
  onTagRemove: (tag: string) => console.log(`${tag} removed`),
};

export const Active = Template.bind({});
Active.args = {
  tags: ['JavaScript', 'React', 'TypeScript', 'CSS'],
  activeTags: ['JavaScript', 'React'],
  onTagAdd: (tag: string) => console.log(`${tag} added`),
  onTagRemove: (tag: string) => console.log(`${tag} removed`),
};

export const Inactive = Template.bind({});
Inactive.args = {
  tags: ['JavaScript', 'React', 'TypeScript', 'CSS'],
  activeTags: [],
  onTagAdd: (tag: string) => console.log(`${tag} added`),
  onTagRemove: (tag: string) => console.log(`${tag} removed`),
};