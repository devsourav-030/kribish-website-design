import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, Truck, RotateCcw, Heart, Star, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>('Charcoal Gray');
  const [activeTab, setActiveTab] = useState<string>('Details');

  const isVideo = (path: string) => {
    return path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.ogg');
  };

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

  const colors = [
    { name: 'Charcoal Gray', hex: '#333333' },
    { name: 'Heather Gray', hex: '#888888' },
    { name: 'Bone', hex: '#E2DFD2' },
    { name: 'Onyx', hex: '#000000' }
  ];

  const suggestedProducts = products.filter(p => p.id !== id).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container section"
    >
      <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: 'none' }}>
        <ArrowLeft size={16} /> Back
      </button>

      {/* Top 3-Column Section */}
      <div className="product-details-container">
        
        {/* Left Col: Thumbnails */}
        <div className="product-thumbnails-col">
          {product.images.map((media, index) => {
            const isVid = isVideo(media);
            return (
              <button
                key={index}
                onClick={() => setActiveMediaIndex(index)}
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: `2px solid ${activeMediaIndex === index ? 'var(--color-primary)' : 'transparent'}`,
                  padding: 0,
                  backgroundColor: 'var(--surface-color)',
                  cursor: 'pointer',
                  position: 'relative',
                  flexShrink: 0,
                  transition: 'border-color var(--transition-fast)'
                }}
              >
                {isVid ? (
                  <>
                    <video src={media} muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </>
                ) : (
                  <img src={media} alt={`${product.name} gallery ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Center Col: Main Media */}
        <div className="product-main-media-col">
          {isVideo(product.images[activeMediaIndex]) ? (
            <video 
              src={product.images[activeMediaIndex]} 
              controls 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          ) : (
            <img src={product.images[activeMediaIndex]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
        </div>
        
        {/* Right Col: Details */}
        <div className="product-info-col">
          <span style={{ backgroundColor: 'var(--surface-color)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', alignSelf: 'flex-start', marginBottom: '1rem', color: 'var(--text-muted)' }}>
            New Arrival
          </span>
          <h1 className="heading-2" style={{ marginBottom: '0.5rem', lineHeight: 1.2 }}>{product.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', color: 'var(--color-primary)' }}>
              {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>4.8 (128 reviews)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="heading-2">${product.price.toFixed(2)}</span>
            <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through', fontSize: '1.1rem' }}>${(product.price * 1.5).toFixed(2)}</span>
            <span style={{ backgroundColor: '#fff', color: '#000', padding: '0.25rem 0.5rem', fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '4px' }}>33% OFF</span>
          </div>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {product.description}
          </p>

          {/* Color Selector */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 600 }}>Color:</span> <span style={{ color: 'var(--text-muted)' }}>{selectedColor}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    backgroundColor: color.hex,
                    border: `2px solid ${selectedColor === color.name ? 'var(--color-primary)' : 'transparent'}`,
                    outline: `2px solid ${selectedColor === color.name ? 'transparent' : 'var(--border-color)'}`,
                    outlineOffset: '-4px',
                    cursor: 'pointer'
                  }}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 600 }}>Size: <span style={{color: 'var(--text-muted)'}}>{selectedSize || 'Select'}</span></span>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'underline', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0-0z"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Size Guide
              </a>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    minWidth: '3.5rem', height: '3rem', padding: '0 0.5rem',
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

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button 
              className="btn btn-primary" 
              style={{ flex: 1, padding: '1rem', fontSize: '1.1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
              onClick={handleAddToCart}
            >
              <ShoppingBag /> Add to Cart
            </button>
            <button className="btn btn-outline" style={{ width: '3.5rem', height: '3.5rem', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)' }}>
              <Heart size={20} />
            </button>
          </div>

          {/* Value Props */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}><Truck size={14} /> Free Shipping</div>
              <span style={{ color: 'var(--text-muted)' }}>On orders over $99</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}><RotateCcw size={14} /> Easy Returns</div>
              <span style={{ color: 'var(--text-muted)' }}>30-day return policy</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}><ShieldCheck size={14} /> Secure Payment</div>
              <span style={{ color: 'var(--text-muted)' }}>100% secure checkout</span>
            </div>
          </div>

        </div>
      </div>

      {/* Tabs Section */}
      <div className="product-tabs-section">
        <div>
          <div className="product-tabs-nav">
            {['Details', 'Materials', 'Size & Fit', 'Shipping & Returns'].map(tab => (
              <button 
                key={tab} 
                className={`product-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div style={{ paddingRight: '2rem' }}>
            {activeTab === 'Details' && (
              <>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Crafted from high-quality materials, this product delivers unmatched comfort and durability. The design makes it a versatile staple for any wardrobe.
                </p>
                <ul className="product-tab-content-list">
                  {product.features.map((feature, i) => (
                    <li key={i}>
                      <div style={{ marginTop: '4px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                  <li>
                    <div style={{ marginTop: '4px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    Unisex style
                  </li>
                </ul>
              </>
            )}
            {activeTab === 'Materials' && (
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Our heavyweight cotton blend is custom-milled to provide structure without sacrificing softness. Pre-shrunk to minimize shrinkage.</p>
            )}
            {activeTab === 'Size & Fit' && (
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Designed for a relaxed, oversized fit. We recommend taking your normal size for the intended look, or sizing down for a more standard fit.</p>
            )}
            {activeTab === 'Shipping & Returns' && (
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Free express shipping on all orders over $99. Hassle-free 30-day returns with pre-paid return labels included in every domestic package.</p>
            )}
          </div>
        </div>
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', backgroundColor: 'var(--surface-color)' }}>
          {/* We reuse the last product image for the tab section visualization */}
          <img src={product.images[product.images.length - 1]} alt="Detail texture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* You May Also Like */}
      {suggestedProducts.length > 0 && (
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 className="heading-2" style={{ fontSize: '1.5rem' }}>You May Also Like</h2>
            <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              View All <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
            {suggestedProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>
      )}

    </motion.div>
  );
};

export default ProductDetails;
