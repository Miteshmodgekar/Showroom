import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <div className="container text-center" style={{ maxWidth: '600px' }}>
        <span style={{ fontSize: '4rem', display: 'block', marginBottom: '16px' }}>🛋️</span>
        <span className="section-label">404 Error</span>
        <h1 className="section-title" style={{ fontSize: '2.4rem' }}>Page Not Found</h1>
        <p className="section-subtitle" style={{ margin: '16px auto 32px' }}>
          The page you are looking for might have been moved, renamed, or does not exist. Browse our sofa catalogue or return to the showroom home page.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn--primary">
            <Home size={18} />
            <span>Go to Home</span>
          </Link>
          <Link to="/products" className="btn btn--outline">
            <ArrowLeft size={18} />
            <span>Browse Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
