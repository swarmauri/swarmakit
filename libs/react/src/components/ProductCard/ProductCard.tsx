import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  price: string;
  onAddToCart: () => void;
  discountBadge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, productName, price, onAddToCart, discountBadge }) => {
  return (
    <div className="product-card">
      {discountBadge && <span className="product-card-badge">{discountBadge}</span>}
      <img src={imageUrl} alt={`${productName}`} className="product-card-image" />
      <div className="product-card-details">
        <div className="product-card-name">{productName}</div>
        <div className="product-card-price">{price}</div>
        <button className="product-card-button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;