import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Filter, X, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShopProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (id: string, quantity?: number) => void;
  initialCategory?: string;
}

export const Shop: React.FC<ShopProps> = ({ onNavigate, onAddToCart, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedBenefit, setSelectedBenefit] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const benefits = [
    'High Iron', 'Diabetic Friendly', 'Bone Strength', 'Protein Rich', 'Immunity Boost', 'Weight Management'
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesBenefit = selectedBenefit === 'all' || p.tags.includes(selectedBenefit);
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.benefit.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesBenefit && matchesSearch;
    });
  }, [selectedCategory, selectedBenefit, searchQuery]);

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-green-dark mb-4">Shop All Products</h1>
          <p className="text-brand-green-light">Traditional nutrition, delivered fresh to your doorstep.</p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green-light" size={20} />
            <input 
              type="text" 
              placeholder="Search for products, benefits, or ingredients..." 
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-brand-beige-dark focus:outline-none focus:ring-2 focus:ring-brand-green/20 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 bg-white px-6 py-4 rounded-2xl border border-brand-beige-dark font-bold text-brand-green-dark hover:bg-brand-beige transition-colors shadow-sm"
            >
              <Filter size={20} />
              <span>Filters</span>
              { (selectedCategory !== 'all' || selectedBenefit !== 'all') && (
                <span className="bg-brand-green text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                  {(selectedCategory !== 'all' ? 1 : 0) + (selectedBenefit !== 'all' ? 1 : 0)}
                </span>
              )}
            </button>
            
            <div className="relative group">
              <select className="appearance-none bg-white px-8 py-4 pr-12 rounded-2xl border border-brand-beige-dark font-bold text-brand-green-dark focus:outline-none shadow-sm cursor-pointer">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-green-light pointer-events-none" size={20} />
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
              <div className="bg-white p-8 rounded-3xl border border-brand-beige-dark shadow-inner grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-green-light mb-6">By Category</h4>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'all' ? 'bg-brand-green text-white' : 'bg-brand-beige text-brand-green-dark hover:bg-brand-beige-dark'}`}
                    >
                      All Categories
                    </button>
                    {CATEGORIES.map(cat => (
                      <button 
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat.id ? 'bg-brand-green text-white' : 'bg-brand-beige text-brand-green-dark hover:bg-brand-beige-dark'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-green-light mb-6">By Health Benefit</h4>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => setSelectedBenefit('all')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedBenefit === 'all' ? 'bg-brand-green text-white' : 'bg-brand-beige text-brand-green-dark hover:bg-brand-beige-dark'}`}
                    >
                      All Benefits
                    </button>
                    {benefits.map(benefit => (
                      <button 
                        key={benefit}
                        onClick={() => setSelectedBenefit(benefit)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedBenefit === benefit ? 'bg-brand-green text-white' : 'bg-brand-beige text-brand-green-dark hover:bg-brand-beige-dark'}`}
                      >
                        {benefit}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-2 flex justify-end pt-6 border-t border-brand-beige">
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedBenefit('all');
                    }}
                    className="text-brand-green-light hover:text-brand-accent text-sm font-bold uppercase tracking-widest flex items-center space-x-2"
                  >
                    <X size={16} />
                    <span>Clear All Filters</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
          <div className="text-center py-24 bg-white rounded-3xl border border-brand-beige-dark">
            <div className="w-20 h-20 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green-light">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-serif text-brand-green-dark mb-2">No products found</h3>
            <p className="text-brand-green-light mb-8">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBenefit('all');
                setSearchQuery('');
              }}
              className="btn-primary"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
