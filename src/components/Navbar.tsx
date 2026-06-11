import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Moon, Sun, User, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartItems, openCart } = useCart();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="navbar glass-panel">
        <div className="navbar-container">
          <div className="navbar-left">
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="navbar-brand">
              <img src="/media__1781162082501.jpg" alt="KRIBISH" className="navbar-logo-img" />
              <span className="navbar-logo-text text-gold">KRIBISH</span>
            </Link>
          </div>

          <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          </div>

          <div className="navbar-actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="icon-btn" onClick={() => setIsAuthModalOpen(true)} aria-label="Account">
              <User size={20} />
            </button>
            <button className="icon-btn cart-btn" onClick={openCart} aria-label="Cart">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
    </>
  );
};

export default Navbar;
