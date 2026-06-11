import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="container section" 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}
      >
        <CheckCircle size={80} color="var(--color-primary)" style={{ marginBottom: '2rem' }} />
        <h1 className="heading-2" style={{ marginBottom: '1rem' }}>ORDER CONFIRMED</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Your gear is being prepped for deployment. We've sent a confirmation to your email.
        </p>
        <Link to="/" className="btn btn-outline">Return to Base</Link>
      </motion.div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container section" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 className="heading-3" style={{ marginBottom: '1rem' }}>Your Cart is Empty</h2>
        <Link to="/shop" className="btn btn-primary">Go to Shop</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container section"
    >
      <h1 className="heading-2" style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>CHECKOUT</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '4rem' }}>
        {/* Form Details */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 className="heading-3" style={{ marginBottom: '1.5rem' }}>1. Contact Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input type="email" placeholder="Email Address" className="input-field" style={{ gridColumn: '1 / -1' }} required />
              <input type="text" placeholder="First Name" className="input-field" required />
              <input type="text" placeholder="Last Name" className="input-field" required />
            </div>
          </div>

          <div>
            <h3 className="heading-3" style={{ marginBottom: '1.5rem' }}>2. Shipping Address</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input type="text" placeholder="Street Address" className="input-field" style={{ gridColumn: '1 / -1' }} required />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="input-field" style={{ gridColumn: '1 / -1' }} />
              <input type="text" placeholder="City" className="input-field" required />
              <input type="text" placeholder="State / Province" className="input-field" required />
              <input type="text" placeholder="Postal Code" className="input-field" required />
              <input type="text" placeholder="Country" className="input-field" required />
            </div>
          </div>

          <div>
            <h3 className="heading-3" style={{ marginBottom: '1.5rem' }}>3. Payment Method</h3>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>Mock checkout active. No payment required.</p>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '1rem', fontSize: '1.1rem' }}>
                COMPLETE ORDER
              </button>
            </div>
          </div>
        </form>

        {/* Order Summary */}
        <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }} className="glass-panel">
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
            <h3 className="heading-3">Order Summary</h3>
          </div>
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
            {cartItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                <img src={item.product.images[0]} alt={item.product.name} style={{ width: '60px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.product.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Size: {item.selectedSize} | Qty: {item.quantity}</p>
                  <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginTop: '0.25rem' }}>${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.25rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed var(--border-color)' }}>
              <span>Total</span>
              <span className="text-gold">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
