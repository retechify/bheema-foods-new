import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Filter, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShopProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (id: string, quantity?: number) => void;
  initialCategory?: string;
}

export const Shop: React.FC<ShopProps> = ({ onNavigate, onAddToCart, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);
  const [selectedBenefit, setSelectedBenefit] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const benefits = [
    'High Iron', 'Diabetic Friendly', 'Bone Strength', 'Protein Rich', 'Immunity Boost', 'Weight Management'
  ];

  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesBenefit = selectedBenefit === 'all' || p.tags.includes(selectedBenefit);
      return matchesCategory && matchesBenefit;
    });

    if (sortBy === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, selectedBenefit, sortBy]);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif text-brand-green-dark mb-4">
            {selectedCategory === 'all' ? 'Entire Collection' : CATEGORIES.find(c => c.id === selectedCategory)?.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <button onClick={() => onNavigate('home')} className="hover:text-brand-green">Home</button>
            <span>/</span>
            <span className="text-brand-green-dark">
              {selectedCategory === 'all' ? 'Entire Collection' : CATEGORIES.find(c => c.id === selectedCategory)?.name} | Bheema Foods
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-end gap-4 mb-12">
          <div className="flex gap-2">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-md border border-gray-200 font-bold text-[11px] uppercase tracking-widest text-brand-green-dark hover:bg-gray-50 transition-colors"
            >
              <Filter size={16} />
              <span>Filter</span>
            </button>
            
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white px-6 py-3 pr-10 rounded-md border border-gray-200 font-bold text-[11px] uppercase tracking-widest text-brand-green-dark focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Filter Drawer / Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-white p-6 rounded-md border border-gray-200 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">By Category</h4>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${selectedCategory === 'all' ? 'bg-brand-green-dark text-white' : 'bg-gray-50 text-brand-green-dark hover:bg-gray-100'}`}
                    >
                      All Categories
                    </button>
                    {CATEGORIES.map(cat => (
                      <button 
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${selectedCategory === cat.id ? 'bg-brand-green-dark text-white' : 'bg-gray-50 text-brand-green-dark hover:bg-gray-100'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">By Health Benefit</h4>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setSelectedBenefit('all')}
                      className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${selectedBenefit === 'all' ? 'bg-brand-green-dark text-white' : 'bg-gray-50 text-brand-green-dark hover:bg-gray-100'}`}
                    >
                      All Benefits
                    </button>
                    {benefits.map(benefit => (
                      <button 
                        key={benefit}
                        onClick={() => setSelectedBenefit(benefit)}
                        className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${selectedBenefit === benefit ? 'bg-brand-green-dark text-white' : 'bg-gray-50 text-brand-green-dark hover:bg-gray-100'}`}
                      >
                        {benefit}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onView={(id) => onNavigate('product', { id })}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-lg border border-gray-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300 shadow-sm">
              <Filter size={32} />
            </div>
            <h3 className="text-xl font-serif text-brand-green-dark mb-2">No products found</h3>
            <p className="text-sm text-gray-400 mb-8">Try adjusting your filters.</p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBenefit('all');
              }}
              className="bg-brand-green-dark text-white px-8 py-3 rounded-md text-[11px] font-bold uppercase tracking-widest"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
