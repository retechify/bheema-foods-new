import React, { useState, useMemo } from 'react';
import { PRODUCTS, FAQS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ShoppingCart, MessageCircle, ChevronDown, Star, CheckCircle2, Info, Leaf, Activity, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (id: string, quantity?: number) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = useMemo(() => PRODUCTS.find(p => p.id === productId), [productId]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-serif text-brand-green-dark">Product not found</h2>
        <button onClick={() => onNavigate('shop')} className="btn-primary mt-6">Back to Shop</button>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-green-light mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-brand-green">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('shop')} className="hover:text-brand-green">Shop</button>
          <span>/</span>
          <span className="text-brand-green-dark">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-brand-beige border border-brand-beige-dark shadow-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-brand-beige border border-brand-beige-dark cursor-pointer hover:border-brand-green transition-all">
                  <img 
                    src={`https://picsum.photos/seed/thumb${i}/400/400`} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-brand-accent mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                <span className="text-xs font-bold text-brand-green-light uppercase tracking-widest">(120+ Reviews)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-brand-green-dark mb-4 leading-tight">{product.name}</h1>
              <p className="text-xl text-brand-green italic mb-6">{product.benefit}</p>
              
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-4xl font-bold text-brand-green-dark">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-brand-green-light line-through">₹{product.originalPrice}</span>
                )}
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-green-light mb-3">Select Weight</h4>
                  <div className="flex space-x-3">
                    {['100g', '300g'].map((w) => (
                      <button 
                        key={w}
                        className={`px-6 py-2 rounded-full border-2 text-sm font-bold transition-all ${product.weight === w ? 'border-brand-green bg-brand-green text-white' : 'border-brand-beige-dark text-brand-green-dark hover:border-brand-green'}`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border-2 border-brand-beige-dark rounded-full px-4 py-2">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 text-brand-green-dark hover:text-brand-green">
                      <span className="text-xl font-bold">−</span>
                    </button>
                    <span className="w-12 text-center font-bold text-brand-green-dark">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-1 text-brand-green-dark hover:text-brand-green">
                      <span className="text-xl font-bold">+</span>
                    </button>
                  </div>
                  <button 
                    onClick={() => onAddToCart(product.id, quantity)}
                    className="btn-primary flex-grow flex items-center justify-center space-x-3"
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>

                <button className="w-full flex items-center justify-center space-x-3 py-4 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all">
                  <MessageCircle size={20} />
                  <span>Order on WhatsApp</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-brand-beige">
                {[
                  { text: 'Sprouted 48 Hours', icon: <Activity size={18} /> },
                  { text: 'No Preservatives', icon: <Shield size={18} /> },
                  { text: 'Fresh Weekly', icon: <Leaf size={18} /> },
                  { text: 'FSSAI Certified', icon: <CheckCircle2 size={18} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-brand-green-dark/70">
                    <span className="text-brand-green">{item.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-24">
          <div className="flex border-b border-brand-beige-dark mb-10 overflow-x-auto">
            {[
              { id: 'description', label: 'Description' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'ingredients', label: 'Ingredients' },
              { id: 'nutrition', label: 'Nutrition' },
              { id: 'how-to', label: 'How to Prepare' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id ? 'border-brand-green text-brand-green' : 'border-transparent text-brand-green-light hover:text-brand-green'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="prose prose-brand max-w-none"
              >
                {activeTab === 'description' && (
                  <div className="space-y-6">
                    <p className="text-lg text-brand-green-dark/80 leading-relaxed">{product.description}</p>
                    <div className="bg-brand-beige p-6 rounded-2xl border border-brand-beige-dark">
                      <h4 className="flex items-center space-x-2 text-brand-green-dark font-bold mb-3">
                        <Info size={18} />
                        <span>Who Should Consume?</span>
                      </h4>
                      <p className="text-brand-green-dark/70">{product.whoShouldConsume}</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'benefits' && (
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {product.tags.map((tag, i) => (
                      <li key={i} className="flex items-center space-x-3 bg-brand-beige/50 p-4 rounded-xl border border-brand-beige-dark">
                        <CheckCircle2 className="text-brand-green" size={20} />
                        <span className="font-bold text-brand-green-dark">{tag}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'ingredients' && (
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {product.ingredients.map((ing, i) => (
                        <span key={i} className="bg-brand-beige text-brand-green-dark px-4 py-2 rounded-full text-sm font-medium border border-brand-beige-dark">
                          {ing}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-brand-accent font-bold uppercase tracking-widest mt-6">Allergy Disclaimer</p>
                    <p className="text-sm text-brand-green-dark/60 italic">{product.allergyDisclaimer}</p>
                  </div>
                )}

                {activeTab === 'nutrition' && (
                  <div className="bg-white border border-brand-beige-dark rounded-2xl overflow-hidden shadow-sm max-w-md">
                    <div className="bg-brand-beige p-4 border-b border-brand-beige-dark">
                      <h4 className="font-bold text-brand-green-dark uppercase tracking-widest text-center">Nutrition Facts</h4>
                      <p className="text-[10px] text-brand-green-light text-center">Per 100g Serving</p>
                    </div>
                    <div className="p-4 space-y-3">
                      {Object.entries(product.nutrition).map(([key, val]) => (
                        <div key={key} className="flex justify-between items-center border-b border-brand-beige pb-2 last:border-0">
                          <span className="text-sm font-medium text-brand-green-dark/70">{key}</span>
                          <span className="font-bold text-brand-green-dark">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'how-to' && (
                  <div className="bg-brand-beige p-8 rounded-3xl border border-brand-beige-dark">
                    <h4 className="text-xl font-serif text-brand-green-dark mb-4">Preparation Guide</h4>
                    <p className="text-brand-green-dark/80 leading-relaxed mb-6">{product.howToPrepare}</p>
                    <div className="flex items-center space-x-4 text-brand-green font-bold text-sm">
                      <div className="flex items-center space-x-1">
                        <Activity size={16} />
                        <span>5-7 Mins</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Leaf size={16} />
                        <span>100% Natural</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-serif text-brand-green-dark mb-10">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onView={(id) => onNavigate('product', { id })}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section Placeholder */}
        <div className="bg-brand-beige p-12 rounded-[3rem] text-center">
          <h2 className="text-3xl font-serif text-brand-green-dark mb-6">Customer Reviews</h2>
          <div className="flex items-center justify-center space-x-2 text-brand-accent mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            <span className="text-xl font-bold text-brand-green-dark ml-4">4.9/5</span>
          </div>
          <p className="text-brand-green-light mb-8">Join 2,000+ happy families who trust Bheema Foods.</p>
          <button className="btn-secondary">Write a Review</button>
        </div>
      </div>
    </div>
  );
};
