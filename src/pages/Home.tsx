import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Truck, RotateCcw, ShieldCheck, Heart, ArrowRight, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  // We'll reuse existing images until the AI image generation is available
  const bannerImage = "/media__1781162083305.jpg";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-page"
    >
      {/* Section 1: Typography Hero */}
      <section className="hero-section">
        <div className="hero-typography-bg">
          KRIBISH
        </div>
        
        <div className="hero-content-wrapper">
          <div className="hero-left-text">
            <p>FASHION<br/>THAT MOVES<br/>WITH YOU.</p>
          </div>
          
          <div className="hero-center-image">
            <motion.img 
              src="/hero-apparel.png" 
              alt="KRIBISH Model" 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          
          <div className="hero-right-text">
            <p>NEW<br/>COLLECTION<br/>2024</p>
          </div>
        </div>

        <div className="hero-actions">
          <Link to="/shop" className="btn-black">SHOP NOW</Link>
          <Link to="/shop" className="link-underline">EXPLORE NEW IN</Link>
        </div>
      </section>

      {/* Section 2: Category Strip */}
      <section className="category-strip">
        <div className="category-grid">
          <div className="category-item">
            <img src="/media__1781162082497.jpg" alt="Men's Collection" />
            <div className="category-info">
              <h3>MEN</h3>
              <p>Elevated everyday<br/>essentials.</p>
              <Link to="/shop" className="category-link">SHOP MEN <ArrowRight size={14}/></Link>
            </div>
          </div>
          <div className="category-item">
            <img src="/media__1781162082499.jpg" alt="Women's Collection" />
            <div className="category-info">
              <h3>WOMEN</h3>
              <p>Effortless style<br/>for every you.</p>
              <Link to="/shop" className="category-link">SHOP WOMEN <ArrowRight size={14}/></Link>
            </div>
          </div>
          <div className="category-item">
            <img src="/media__1781162082501.jpg" alt="Kids' Collection" />
            <div className="category-info">
              <h3>KIDS</h3>
              <p>Comfort meets<br/>cool everyday.</p>
              <Link to="/shop" className="category-link">SHOP KIDS <ArrowRight size={14}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: New Season Banner */}
      <section className="new-season-banner">
        <div className="banner-content">
          <span className="banner-tag">NEW SEASON</span>
          <h2 className="banner-title">NEW<br/>VIBES</h2>
          <p className="banner-desc">Discover everything<br/>new and now.</p>
          <Link to="/shop" className="btn-black">EXPLORE COLLECTION</Link>
        </div>
        <div>
          <img src={bannerImage} alt="New Vibes Collection" className="banner-image" />
        </div>
      </section>

      {/* Section 4: Value Props */}
      <section className="value-props-section">
        <div className="value-props-grid">
          <div className="value-prop-item">
            <Truck size={24} strokeWidth={1.5} />
            <div className="value-prop-text">
              <h4>FAST DELIVERY</h4>
              <p>Quick & safe delivery</p>
            </div>
          </div>
          <div className="value-prop-item">
            <RotateCcw size={24} strokeWidth={1.5} />
            <div className="value-prop-text">
              <h4>EASY RETURNS</h4>
              <p>Within 15 days</p>
            </div>
          </div>
          <div className="value-prop-item">
            <Star size={24} strokeWidth={1.5} />
            <div className="value-prop-text">
              <h4>QUALITY ASSURED</h4>
              <p>Best fashion, best quality</p>
            </div>
          </div>
          <div className="value-prop-item">
            <ShieldCheck size={24} strokeWidth={1.5} />
            <div className="value-prop-text">
              <h4>SECURE PAYMENT</h4>
              <p>100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Best of KRIBISH */}
      <section className="best-sellers-section">
        <div className="best-sellers-header">
          <h2>BEST OF KRIBISH</h2>
          <Link to="/shop" className="link-underline">VIEW ALL</Link>
        </div>
        
        <div className="best-sellers-grid">
          {products.slice(0, 4).map(product => (
            <div key={product.id} className="light-theme-card" style={{ position: 'relative' }}>
              <ProductCard product={product} />
              <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                <Heart size={16} color="#111" />
              </button>
            </div>
          ))}
        </div>
      </section>

    </motion.div>
  );
};

export default Home;
