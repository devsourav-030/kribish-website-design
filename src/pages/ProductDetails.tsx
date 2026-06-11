import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, Truck, RotateCcw } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!product) {
    return <div className="container section">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container section"
    >
      <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
        <ArrowLeft size={16} /> Back
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        {/* Images */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Details */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{product.category}</p>
          <h1 className="heading-2" style={{ marginBottom: '1rem' }}>{product.name}</h1>
          <p className="heading-3" style={{ marginBottom: '2rem' }}>${product.price.toFixed(2)}</p>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {product.description}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 600 }}>Select Size</span>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'underline', fontSize: '0.9rem' }}>Size Guide</a>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    width: '3rem', height: '3rem',
                    border: `1px solid ${selectedSize === size ? 'var(--color-primary)' : 'var(--border-color)'}`,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: selectedSize === size ? 'var(--color-primary)' : 'transparent',
                    color: selectedSize === size ? '#000' : 'var(--text-color)',
                    fontWeight: 600,
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}
            onClick={handleAddToCart}
          >
            <ShoppingBag /> ADD TO CART
          </button>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontWeight: 600 }}>Features</h3>
            <ul style={{ listStyle: 'inside', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {product.features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <Truck size={20} /> <span>Free Express Delivery</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <RotateCcw size={20} /> <span>30-Day Returns</span>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
