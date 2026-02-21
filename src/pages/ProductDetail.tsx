import React, { useState, useMemo } from 'react';
import { PRODUCTS, FAQS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ShoppingCart, MessageCircle, ChevronDown, Star, CheckCircle2, Info, Leaf, Activity, Shield, Truck, Gift, Tag, ChevronUp, Share2, Plus, Minus, ChevronRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (id: string, quantity?: number) => void;
}

import { handleWhatsAppRedirect } from '../utils/whatsapp';

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [openAccordions, setOpenAccordions] = useState<string[]>(['description']);
  const [selectedWeight, setSelectedWeight] = useState('');

  const product = useMemo(() => PRODUCTS.find(p => p.id === productId), [productId]);

  React.useEffect(() => {
    if (product) {
      setSelectedWeight(product.weight);
      setQuantity(1);
      setOpenAccordions(['description']);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [productId, product]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-serif text-brand-green-dark">Product not found</h2>
        <button onClick={() => onNavigate('shop')} className="btn-primary mt-6">Back to Shop</button>
      </div>
    );
  }

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleWeightChange = (weight: string) => {
    setSelectedWeight(weight);
  };

  const handleAddToCartClick = () => {
    onAddToCart(product.id, quantity);
  };

  const handleWhatsAppOrder = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      weight: selectedWeight,
      quantity: quantity
    };
    handleWhatsAppRedirect([item]);
  };

  const relatedProducts = useMemo(() => {
    const sameCategory = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
    if (sameCategory.length >= 4) return sameCategory.slice(0, 4);
    
    const others = PRODUCTS.filter(p => p.category !== product.category && p.id !== product.id);
    return [...sameCategory, ...others].slice(0, 4);
  }, [product]);

  const trustBadges = [
    { title: 'No Palm Oil', desc: 'Prioritizing your health with every bite.', icon: <Leaf size={32} /> },
    { title: 'No Maida', desc: 'Wholesome goodness without refined flour.', icon: <Activity size={32} /> },
    { title: 'Roasted', desc: 'No Trans Fats.', icon: <Activity size={32} /> },
    { title: 'Gluten Free', desc: 'Happy Gut.', icon: <Shield size={32} /> },
    { title: 'Organic', desc: 'Pure ingredients for a cleaner, healthier you.', icon: <Leaf size={32} /> },
    { title: 'Vegan Friendly', desc: 'Nourish your body. Respect all life.', icon: <Heart size={32} /> },
  ];

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-brand-green transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('shop')} className="hover:text-brand-green transition-colors">Entire Collection | Bheema Foods</button>
          <span>/</span>
          <span className="text-brand-green-dark uppercase">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#F9F9F7] border border-gray-100 shadow-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center space-x-1 text-brand-accent mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-2">75 reviews</span>
              </div>
              <h1 className="text-4xl font-serif text-brand-green-dark mb-2 leading-tight">{product.name}</h1>
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-2xl font-bold text-brand-green-dark">₹{product.price}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">Select Weight</label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['100g', '300g'].map((w) => (
                      <button 
                        key={w}
                        onClick={() => handleWeightChange(w)}
                        className={`px-6 py-2 rounded-xl border text-[11px] font-bold transition-all ${selectedWeight === w ? 'bg-brand-green-dark text-white border-brand-green-dark' : 'bg-white text-brand-green-dark border-gray-200 hover:border-brand-green'}`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-brand-beige/30 border border-brand-beige-dark rounded-xl p-1">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-brand-green-dark hover:text-brand-green">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold text-brand-green-dark text-sm">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-brand-green-dark hover:text-brand-green">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleAddToCartClick}
                    className="flex-grow bg-brand-green hover:bg-brand-green-dark text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-lg active:scale-95"
                  >
                    ADD TO CART
                  </button>
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="flex items-center justify-center space-x-3 py-4 px-8 rounded-xl border-2 border-[#25D366] text-[#25D366] font-bold uppercase tracking-widest text-xs hover:bg-[#25D366] hover:text-white transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>

                {/* Accordions */}
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  {[
                    { id: 'description', title: 'Description', content: product.description },
                    { id: 'benefits', title: 'Benefits', content: product.benefit },
                    { id: 'ingredients', title: 'Ingredients', content: product.ingredients.join(', ') },
                    { id: 'nutrition', title: 'Nutrition', content: Object.entries(product.nutrition).map(([k, v]) => `${k}: ${v}`).join(' | ') },
                    { id: 'whoShouldConsume', title: 'Who Should Consume', content: product.whoShouldConsume },
                  ].map((item) => (
                    <div key={item.id} className="border-b border-gray-100 last:border-0">
                      <button 
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full py-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-green-dark hover:text-brand-green transition-colors"
                      >
                        <span>{item.title}</span>
                        {openAccordions.includes(item.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <AnimatePresence>
                        {openAccordions.includes(item.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 text-[11px] text-gray-500 leading-relaxed">
                              {item.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Share */}
                <div className="flex items-center space-x-4 pt-4 text-gray-400">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Share</span>
                  <div className="flex items-center space-x-3">
                    <button className="hover:text-brand-green transition-colors"><Share2 size={14} /></button>
                    <button className="hover:text-brand-green transition-colors"><MessageCircle size={14} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="py-20 border-t border-gray-100">
          <h2 className="text-3xl font-serif text-brand-green-dark mb-12 text-center italic">You will also like these....</h2>
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

        {/* Trust Badges */}
        <div className="py-16 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {trustBadges.map((badge, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="text-brand-green flex justify-center">
                {badge.icon}
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-green-dark">{badge.title}</h4>
              <p className="text-[9px] text-gray-400 leading-tight max-w-[120px] mx-auto">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="py-20 border-t border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-brand-green-dark mb-2">FAQs</h2>
            <button className="text-[10px] font-bold uppercase tracking-widest text-brand-green border-b border-brand-green">View all FAQs »</button>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-4">
            {FAQS.slice(0, 4).map((faq, i) => (
              <details key={i} className="group border-b border-gray-100 pb-4">
                <summary className="flex items-center justify-between cursor-pointer list-none py-2">
                  <h4 className="text-[11px] font-bold text-brand-green-dark uppercase tracking-widest flex items-center space-x-3">
                    <Shield size={14} />
                    <span>{faq.question}</span>
                  </h4>
                  <ChevronDown className="text-gray-300 transition-transform group-open:rotate-180" size={16} />
                </summary>
                <div className="pt-2 pl-7 text-[11px] text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="py-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-brand-green-dark mb-8">Customer Reviews</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-brand-accent mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  <span className="text-sm font-bold text-brand-green-dark ml-2">4.64 out of 5</span>
                </div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Based on 75 reviews</p>
              </div>
              
              <div className="flex-grow max-w-xs space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center space-x-3 text-[10px] font-bold text-gray-400">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={i < star ? 'currentColor' : 'none'} className={i < star ? 'text-brand-accent' : 'text-gray-200'} />)}
                    </div>
                    <div className="flex-grow h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-green" style={{ width: star === 5 ? '70%' : star === 4 ? '20%' : '5%' }} />
                    </div>
                    <span className="w-4 text-right">{star === 5 ? 52 : star === 4 ? 19 : 4}</span>
                  </div>
                ))}
              </div>

              <button className="bg-brand-green text-white px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-brand-green-dark transition-all shadow-md">
                Write a review
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { name: 'Apurva rughani', date: '20/09/2023', title: 'Unique Product', text: 'Worth repeat order. Enjoying the snacks enormously. Cost is too high.', rating: 4 },
              { name: 'Sunil Chawla', date: '31/07/2023', title: 'Excellent Product', text: 'I order this product repeatedly as this is excellent product in Roasted Namkeen category', rating: 5 },
              { name: 'Atin Dua', date: '22/07/2023', title: 'Best Chana Jor Ever', text: 'Believe me they are the best ever snack to go for when you are starving and also healthy for your gut. They are protein packed and less in calorie. I used to have it in evening daily basis without any guilt.', rating: 5 },
            ].map((review, i) => (
              <div key={i} className="border-b border-gray-100 pb-12 last:border-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-brand-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < review.rating ? 'currentColor' : 'none'} className={i < review.rating ? 'text-brand-accent' : 'text-gray-200'} />)}
                  </div>
                  <span className="text-[10px] text-gray-400">{review.date}</span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-brand-beige rounded-full flex items-center justify-center text-[10px] font-bold text-brand-green-dark">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-brand-green-dark">{review.name} <span className="text-[9px] text-brand-green ml-2 font-normal italic">Verified</span></h4>
                  </div>
                </div>
                <h5 className="text-[11px] font-bold text-brand-green-dark mb-2">{review.title}</h5>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-4">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-40 lg:hidden flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-brand-green-dark truncate max-w-[120px]">{product.name}</h4>
            <p className="text-[10px] font-bold text-brand-green">₹{product.price}</p>
          </div>
        </div>
        <button 
          onClick={handleAddToCartClick}
          className="bg-brand-green text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-md"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
