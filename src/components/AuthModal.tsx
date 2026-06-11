import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
      display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="glass-panel"
        style={{ width: '100%', maxWidth: '400px', padding: '2rem', position: 'relative' }}
      >
        <button onClick={onClose} className="icon-btn" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <X />
        </button>
        
        <h2 className="heading-2 text-gold" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {isLogin ? 'WELCOME BACK' : 'JOIN THE CREW'}
        </h2>

        <div style={{ display: 'flex', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
          <button 
            style={{ flex: 1, padding: '0.5rem', fontWeight: 600, color: isLogin ? 'var(--color-primary)' : 'var(--text-muted)', borderBottom: isLogin ? '2px solid var(--color-primary)' : 'none' }}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            style={{ flex: 1, padding: '0.5rem', fontWeight: 600, color: !isLogin ? 'var(--color-primary)' : 'var(--text-muted)', borderBottom: !isLogin ? '2px solid var(--color-primary)' : 'none' }}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="input-field" required />
          )}
          <input type="email" placeholder="Email Address" className="input-field" required />
          <input type="password" placeholder="Password" className="input-field" required />
          
          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

      </motion.div>
    </div>
  );
};

export default AuthModal;
