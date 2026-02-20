import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onView: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onView, onAddToCart }) => {
  return (
    <div className="card-rounded group">
      <div className="relative aspect-square overflow-hidden bg-brand-beige-dark">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 space-x-3">
          <button 
            onClick={() => onView(product.id)}
            className="bg-white p-3 rounded-full text-brand-green-dark hover:bg-brand-green hover:text-white transition-all shadow-lg"
          >
            <Eye size={20} />
          </button>
          <button 
            onClick={() => onAddToCart(product.id)}
            className="bg-brand-green p-3 rounded-full text-white hover:bg-brand-green-dark transition-all shadow-lg"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-serif font-semibold text-brand-green-dark leading-tight group-hover:text-brand-green transition-colors">
            {product.name}
          </h3>
        </div>
        <p className="text-xs text-brand-green-light font-medium mb-3">{product.benefit}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-bold text-brand-green-dark">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-brand-green-light line-through">₹{product.originalPrice}</span>
            )}
          </div>
          <span className="text-[10px] font-bold text-brand-green-light uppercase tracking-widest">{product.weight}</span>
        </div>
        <button 
          onClick={() => onAddToCart(product.id)}
          className="w-full mt-4 py-2 text-xs font-bold uppercase tracking-widest border border-brand-green text-brand-green rounded-lg hover:bg-brand-green hover:text-white transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
