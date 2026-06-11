
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartDrawer.css';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="cart-overlay"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="cart-drawer glass-panel"
          >
            <div className="cart-header">
              <h2 className="heading-3 text-gold">Your Cart</h2>
              <button onClick={closeCart} className="icon-btn"><X /></button>
            </div>

            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty.</p>
                  <button onClick={closeCart} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${index}`} className="cart-item animate-fade-in">
                    <img src={item.product.images[0]} alt={item.product.name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{item.product.name}</h4>
                      <p className="cart-item-size">Size: {item.selectedSize}</p>
                      <p className="cart-item-price">${item.product.price.toFixed(2)}</p>
                      
                      <div className="cart-item-actions">
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}><Minus size={14} /></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}><Plus size={14} /></button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="remove-btn"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Subtotal</span>
                  <span className="text-gold">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
