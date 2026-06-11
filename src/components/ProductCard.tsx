
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.sizes[0]);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card animate-fade-in">
      <div className="product-image-container">
        <img src={product.images[0]} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="btn btn-primary quick-add-btn" onClick={handleQuickAdd}>
            Quick Add
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price text-gold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
