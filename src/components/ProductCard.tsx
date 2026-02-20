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

  return (
    <div className="bg-white rounded-lg group border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-[#F9F9F7] rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-brand-accent text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
            Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 space-x-3">
          <button 
            onClick={() => onView(product.id)}
            className="bg-white p-3 rounded-full text-brand-green-dark hover:bg-brand-green hover:text-white transition-all shadow-lg"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center space-x-0.5 text-brand-accent mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
          <span className="text-[9px] text-gray-400 ml-1">(45)</span>
        </div>
        <h3 className="text-sm font-serif font-bold text-brand-green-dark leading-tight group-hover:text-brand-green transition-colors mb-1">
          {product.name}
        </h3>
        <p className="text-[10px] text-gray-400 font-medium mb-3">Rs. {product.price}</p>
        
        <div className="mt-auto space-y-3">
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-md py-2 px-3 text-[10px] font-bold text-brand-green-dark focus:outline-none cursor-pointer">
              <option>{product.weight}</option>
              <option>500g</option>
              <option>1kg</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center border border-gray-200 rounded-md">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 py-1 text-brand-green-dark hover:bg-gray-50">
                <Minus size={12} />
              </button>
              <span className="w-6 text-center font-bold text-brand-green-dark text-[10px]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-1 text-brand-green-dark hover:bg-gray-50">
                <Plus size={12} />
              </button>
            </div>
            <button 
              onClick={() => onAddToCart(product.id, quantity)}
              className="flex-grow py-2 text-[10px] font-bold uppercase tracking-widest bg-[#E8E8E1] text-brand-green-dark rounded-md hover:bg-brand-green hover:text-white transition-all"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
