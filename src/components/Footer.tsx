const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 2rem 2rem', marginTop: 'auto', backgroundColor: 'var(--surface-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <h3 className="heading-3 text-gold" style={{ marginBottom: '1rem', fontFamily: 'var(--font-secondary)' }}>KRIBISH</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>BUILT DIFFERENT. Premium streetwear intersecting with cybernetic aesthetics.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>IG</a>
            <a href="#" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>X</a>
            <a href="#" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>FB</a>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem', fontWeight: 600 }}>Shop</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="/shop" style={{ color: 'var(--text-muted)' }}>All Products</a></li>
            <li><a href="/shop?category=Tees" style={{ color: 'var(--text-muted)' }}>Tees</a></li>
            <li><a href="/shop?category=Sleeveless" style={{ color: 'var(--text-muted)' }}>Sleeveless</a></li>
            <li><a href="/shop?category=Premium" style={{ color: 'var(--text-muted)' }}>Premium</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem', fontWeight: 600 }}>Support</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="#" style={{ color: 'var(--text-muted)' }}>FAQ</a></li>
            <li><a href="#" style={{ color: 'var(--text-muted)' }}>Shipping & Returns</a></li>
            <li><a href="#" style={{ color: 'var(--text-muted)' }}>Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem', fontWeight: 600 }}>Join the Cult</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>Subscribe for exclusive drops and early access.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="Email Address" className="input-field" style={{ padding: '0.5rem' }} />
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Join</button>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
        &copy; {new Date().getFullYear()} KRIBISH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
