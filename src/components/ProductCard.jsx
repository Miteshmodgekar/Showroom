import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Star } from 'lucide-react';
import { getProductWhatsAppLink, getProductWhatsAppMessage, openWhatsApp } from '../config/business';
import ProductImage from './ProductImage';

export default function ProductCard({ product }) {
  const { id, name, category, shortDescription, images, subcategory, price, rating, reviewsCount, colors } = product;
  const imageSrc = images && images.length > 0 ? images[0] : '';

  return (
    <article className="product-card fade-up">

      <div className="product-card__image">
        <ProductImage src={imageSrc} alt={name} category={category} />
        {subcategory && <span className="product-card__badge">{subcategory}</span>}
        {rating && (
          <span className="product-card__rating">
            <Star size={13} fill="#c4a35a" color="#c4a35a" />
            <span>{rating}</span>
            {reviewsCount && <span className="rating-count">({reviewsCount})</span>}
          </span>
        )}
      </div>

      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__category">{category.replace('-', ' ')}</span>
          {price && <span className="product-card__price-badge">{price}</span>}
        </div>

        <h3 className="product-card__name">
          <Link to={`/products/${id}`}>{name}</Link>
        </h3>
        <p className="product-card__desc">{shortDescription}</p>

        {colors && colors.length > 0 && (
          <div className="product-card__colors">
            <span className="colors-label">Options:</span>
            <span className="colors-text">{colors.slice(0, 3).join(', ')}{colors.length > 3 ? ' +' : ''}</span>
          </div>
        )}

        <div className="product-card__actions">
          <Link to={`/products/${id}`} className="btn btn--outline btn--sm">
            <span>Details</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href={getProductWhatsAppLink(name, price)}
            onClick={(e) => openWhatsApp(getProductWhatsAppMessage(name, price), null, e)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa btn--sm"
          >
            <MessageCircle size={15} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}
