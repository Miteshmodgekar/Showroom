import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, PackageSearch } from 'lucide-react';
import { products as fallbackProducts, categories } from '../data/products';
import { useShowroom } from '../context/ShowroomContext';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const { products: contextProducts } = useShowroom();
  const products = (contextProducts && contextProducts.length > 0) ? contextProducts : fallbackProducts;
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Keep state synced with query parameter if present
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter products based on active category & search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="products-page">
      {/* ── TOP HERO BANNER ── */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Showroom Inventory</span>
          <h1 className="section-title">Our Products</h1>
          <p className="section-subtitle">
            Explore our curated range of sofas, foam products, and custom furniture. Direct manufacturer & dealership pricing.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* ── SEARCH & FILTER CONTROLS ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search products, styles, foam types..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>

            {/* Category pills */}
            <div className="filter-bar" role="tablist" aria-label="Filter products by category">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            <span>Showing <strong>{filteredProducts.length}</strong> items</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ color: 'var(--color-primary)', textDecoration: 'underline', fontSize: '0.85rem' }}
              >
                Clear search
              </button>
            )}
          </div>

          {/* ── PRODUCT GRID OR EMPTY STATE ── */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <PackageSearch size={54} />
              <h3>No products found</h3>
              <p>We couldn't find any products matching your search criteria. Try a different keyword or category.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); setSearchParams({}); }}
                className="btn btn--outline btn--sm"
                style={{ marginTop: '16px' }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
