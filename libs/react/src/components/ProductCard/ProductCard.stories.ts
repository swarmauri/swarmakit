import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProductCard, { ProductCardProps } from './ProductCard';

export default {
  title: 'component/Card Types/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/150',
  productName: 'Sample Product',
  price: '$99.99',
  onAddToCart: () => alert('Added to cart'),
};

export const Hovered = Template.bind({});
Hovered.args = {
  imageUrl: 'https://via.placeholder.com/150',
  productName: 'Hovered Product',
  price: '$79.99',
  onAddToCart: () => alert('Added to cart'),
};

export const WithDiscountBadge = Template.bind({});
WithDiscountBadge.args = {
  imageUrl: 'https://via.placeholder.com/150',
  productName: 'Discounted Product',
  price: '$49.99',
  onAddToCart: () => alert('Added to cart'),
  discountBadge: '20% OFF',
};