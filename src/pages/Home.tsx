
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', backgroundColor: '#111' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '2rem', alignItems: 'center' }}>
          
          {/* Left Column - Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>NEW</span>
              <h1 className="heading-1" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', margin: '0.5rem 0', lineHeight: 1.1 }}>
                CYBERNETIC<br/>GOLD TEE
              </h1>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>$55.00</p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>DESCRIPTION</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '280px' }}>
                A masterpiece of design. This premium black tee features an intricate cybernetic gold "K" emblem, symbolizing the intersection of tech and streetwear.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', borderTop: '1px solid #333', paddingTop: '1.5rem', maxWidth: '280px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>PRODUCT DETAILS</span>
                <span>v</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid #333', paddingTop: '1rem' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>SHIPPING INFO</span>
                <span>v</span>
              </div>
            </div>
          </div>

          {/* Center Column - Floating Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <motion.img 
              src="/hero-apparel.png" 
              alt="Cybernetic Gold Tee" 
              style={{ width: '130%', maxWidth: '700px', objectFit: 'contain', zIndex: 2, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, opacity: { duration: 1 } }}
            />
          </div>

          {/* Right Column - Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'flex-end', textAlign: 'right' }}>
            
            <div>
              <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>SIZE</h4>
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button 
                    key={size}
                    style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      backgroundColor: size === 'M' ? 'var(--color-primary)' : 'transparent',
                      color: size === 'M' ? '#000' : 'var(--text-color)',
                      border: size === 'M' ? 'none' : '1px solid #333',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'underline', marginTop: '1rem', display: 'inline-block' }}>SIZE GUIDE</a>
            </div>

            <div>
              <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>COLOR</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#222', borderRadius: '8px', marginBottom: '0.5rem', border: '1px solid var(--color-primary)' }}></div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>GOLD</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#333', borderRadius: '8px', marginBottom: '0.5rem', border: '1px solid transparent' }}></div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>STEALTH</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '250px' }}>
              <button className="btn btn-outline" style={{ width: '100%', padding: '1rem', borderColor: '#444', color: '#fff', borderRadius: '40px' }}>
                FAVORITE
              </button>
              <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '40px', fontWeight: 700 }}>
                ADD TO BAG
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="section container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 className="heading-2">LATEST DROPS</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Secure them before they're gone.</p>
          </div>
          <Link to="/shop" className="btn btn-outline">View All</Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="section" style={{ backgroundColor: 'var(--surface-color)', marginTop: '4rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ order: 1 }}>
            <img src="/media__1781162083305.jpg" alt="Brand Manifesto" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
          </div>
          <div style={{ order: 2 }}>
            <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>ENGINEERED FOR THE BOLD</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              We don't just make clothing; we forge armor for the modern world. Our signature gold emblems and meticulous fabric engineering ensure that you stand out in any environment. This is KRIBISH.
            </p>
            <Link to="/shop" className="btn btn-primary">Discover the Tech</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
