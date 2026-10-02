import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as defaultProducts } from '../data/products';
import { galleryItems as defaultGallery } from '../pages/Gallery';
import { business as defaultBusiness } from '../config/business';

const ShowroomContext = createContext();

export function ShowroomProvider({ children }) {
  // Load products from localStorage or fallback to default
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('cozycorner_products_v3');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load products from localStorage', e);
    }
    return defaultProducts;
  });

  // Load gallery items from localStorage or fallback to default
  const [gallery, setGallery] = useState(() => {
    try {
      const saved = localStorage.getItem('cozycorner_gallery_v3');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load gallery from localStorage', e);
    }
    return defaultGallery;
  });

  // Load business info from localStorage or fallback to default
  const [businessInfo, setBusinessInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('cozycorner_business_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = { ...defaultBusiness, ...parsed };
        if (!parsed.whatsapp || parsed.whatsapp === "919999999999") {
          merged.whatsapp = defaultBusiness.whatsapp;
        }
        if (!parsed.social?.instagram && defaultBusiness.social?.instagram) {
          merged.social = { ...(merged.social || {}), instagram: defaultBusiness.social.instagram };
        }
        if ((!parsed.phone || parsed.phone === "YOUR PHONE NUMBER") && defaultBusiness.phone) {
          merged.phone = defaultBusiness.phone;
        }
        return merged;
      }
    } catch (e) {
      console.error('Failed to load business info from localStorage', e);
    }
    return defaultBusiness;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cozycorner_products_v3', JSON.stringify(products));
    } catch (e) {
      console.warn('localStorage quota warning', e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('cozycorner_gallery_v3', JSON.stringify(gallery));
    } catch (e) {
      console.warn('localStorage quota warning', e);
    }
  }, [gallery]);

  useEffect(() => {
    try {
      localStorage.setItem('cozycorner_business_v3', JSON.stringify(businessInfo));
    } catch (e) {
      console.warn('localStorage quota warning', e);
    }
  }, [businessInfo]);

  // Real-time cross-tab synchronization
  useEffect(() => {
    const handleStorage = (e) => {
      if ((e.key === 'cozycorner_business_v3' || e.key === 'cozycorner_business') && e.newValue) {
        try {
          setBusinessInfo(JSON.parse(e.newValue));
        } catch (err) {}
      }
    };
    const handleCustomUpdate = (e) => {
      if (e.detail) {
        setBusinessInfo(e.detail);
      }
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('cozycorner_business_updated', handleCustomUpdate);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('cozycorner_business_updated', handleCustomUpdate);
    };
  }, []);

  // Product CRUD
  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: newProduct.id || `item-${Date.now()}`,
      rating: newProduct.rating || 5.0,
      reviewsCount: newProduct.reviewsCount || 1,
      featured: Boolean(newProduct.featured),
    };
    setProducts((prev) => [productWithId, ...prev]);
    return productWithId;
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  // Gallery CRUD
  const addGalleryItem = (newItem) => {
    const itemWithId = {
      ...newItem,
      id: Date.now(),
    };
    setGallery((prev) => [itemWithId, ...prev]);
    return itemWithId;
  };

  const deleteGalleryItem = (id) => {
    setGallery((prev) => prev.filter((item) => item.id !== id));
  };

  // Business info update
  const updateBusiness = (fields) => {
    setBusinessInfo((prev) => {
      const updated = { ...prev, ...fields };
      try {
        localStorage.setItem('cozycorner_business_v3', JSON.stringify(updated));
        localStorage.setItem('cozycorner_business', JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to sync to localStorage', e);
      }
      return updated;
    });
  };

  // Reset to factory defaults
  const resetToDefaults = () => {
    setProducts(defaultProducts);
    setGallery(defaultGallery);
    setBusinessInfo(defaultBusiness);
    localStorage.removeItem('cozycorner_products_v3');
    localStorage.removeItem('cozycorner_gallery_v3');
    localStorage.removeItem('cozycorner_business_v3');
    localStorage.removeItem('cozycorner_products');
    localStorage.removeItem('cozycorner_gallery');
    localStorage.removeItem('cozycorner_business');
  };

  // Export full JSON backup
  const exportData = () => {
    const fullBackup = {
      exportDate: new Date().toISOString(),
      business: businessInfo,
      products,
      gallery,
    };
    const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cozycorner-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ShowroomContext.Provider
      value={{
        products,
        featuredProducts: products.filter((p) => p.featured),
        gallery,
        businessInfo,
        addProduct,
        updateProduct,
        deleteProduct,
        addGalleryItem,
        deleteGalleryItem,
        updateBusiness,
        resetToDefaults,
        exportData,
      }}
    >
      {children}
    </ShowroomContext.Provider>
  );
}

export function useShowroom() {
  const context = useContext(ShowroomContext);
  if (!context) {
    throw new Error('useShowroom must be used within a ShowroomProvider');
  }
  return context;
}
