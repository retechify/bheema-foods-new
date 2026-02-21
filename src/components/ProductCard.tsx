import React from 'react';
import { Product } from '../types';
import { Eye, Star, ChevronDown, Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onView: (id: string) => void;
  onAddToCart: (id: string, quantity?: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onView, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedWeight, setSelectedWeight] = React.useState(product.weight);

  return (
    <div className="bg-white rounded-3xl group border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-brand-beige/30">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-brand-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
        <div className="absolute inset-0 bg-brand-green-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => onView(product.id)}
            className="bg-white p-4 rounded-full text-brand-green-dark hover:scale-110 transition-transform shadow-xl"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 text-brand-accent mb-3">
          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          <span className="text-[10px] text-gray-400 font-bold ml-2 uppercase tracking-widest">4.8</span>
        </div>
        <h3 className="text-lg font-serif font-bold text-brand-green-dark leading-tight group-hover:text-brand-green transition-colors mb-2">
          {product.name}
        </h3>
        <p className="text-brand-green font-bold mb-4">₹{product.price}</p>
        
        <div className="mt-auto space-y-4">
          <div className="relative">
            <select 
              value={selectedWeight}
              onChange={(e) => setSelectedWeight(e.target.value)}
              className="w-full appearance-none bg-brand-beige/20 border border-brand-beige-dark rounded-xl py-3 px-4 text-[11px] font-bold text-brand-green-dark focus:outline-none cursor-pointer"
            >
              <option value="100g">100g Pack</option>
              <option value="300g">300g Pack</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-green pointer-events-none" />
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-brand-beige/30 rounded-xl p-1 border border-brand-beige-dark">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-brand-green-dark hover:text-brand-green transition-colors">
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-bold text-brand-green-dark text-xs">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-brand-green-dark hover:text-brand-green transition-colors">
                <Plus size={14} />
              </button>
            </div>
            <button 
              onClick={() => onAddToCart(product.id, quantity)}
              className="flex-grow py-3 text-[11px] font-bold uppercase tracking-widest bg-brand-green text-white rounded-xl hover:bg-brand-green-dark transition-all shadow-md active:scale-95"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
