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

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [openAccordions, setOpenAccordions] = useState<string[]>(['description']);

  const product = useMemo(() => PRODUCTS.find(p => p.id === productId), [productId]);

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

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

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
          <span className="text-brand-green-dark">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#F9F9F7] border border-gray-100 shadow-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-md overflow-hidden bg-[#F9F9F7] border border-gray-100 cursor-pointer hover:border-brand-green transition-all">
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
            <div className="mb-6">
              <div className="flex items-center space-x-1 text-brand-accent mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-2">75 reviews</span>
              </div>
              <h1 className="text-3xl font-serif text-brand-green-dark mb-2 leading-tight">{product.name}</h1>
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-xl font-bold text-brand-green-dark">Rs. {product.price}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['185 gms', '72 gms', '5 x 180 gms (Save Rs. 71)', '2kg (+10% Off)', '3kg (+12% Off)'].map((w) => (
                      <button 
                        key={w}
                        className={`px-4 py-2 rounded-md border text-[11px] font-bold transition-all ${w.includes('185 gms') ? 'bg-brand-green-dark text-white border-brand-green-dark' : 'bg-white text-brand-green-dark border-gray-200 hover:border-brand-green'}`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-200 rounded-md">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-brand-green-dark hover:bg-gray-50">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold text-brand-green-dark text-sm">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-brand-green-dark hover:bg-gray-50">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Offers Section */}
                <div className="bg-[#FDFDFB] border border-[#E8E8E1] rounded-lg p-4 space-y-4">
                  <div className="flex items-center space-x-2 text-brand-accent text-[11px] font-bold uppercase tracking-widest">
                    <Tag size={14} />
                    <span>February Offers</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { title: '7% OFF', desc: 'Flat discount for first purchase.', code: 'TASTY' },
                      { title: 'Free Gift', desc: 'Shop for Rs.999+ and get free gift in cart.', code: 'N/A' },
                      { title: '10% OFF', desc: 'Shop for Rs.1499+ and get big discount.', code: 'N/A' },
                    ].map((offer, i) => (
                      <div key={i} className="space-y-1">
                        <h5 className="text-[11px] font-bold text-brand-green-dark">{offer.title}</h5>
                        <p className="text-[9px] text-gray-500 leading-tight">{offer.desc}</p>
                        <p className="text-[9px] font-bold text-brand-green-dark">Code: {offer.code}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => onAddToCart(product.id, quantity)}
                  className="w-full bg-[#3D5A35] hover:bg-brand-green-dark text-white py-4 rounded-md font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-md"
                >
                  ADD TO CART
                </button>

                {/* Bundle Banner */}
                <div className="relative rounded-lg overflow-hidden bg-[#FDFDFB] border border-[#E8E8E1] p-6 flex items-center justify-between group cursor-pointer">
                  <div className="z-10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-green-dark mb-1">BUNDLE UP. SAVE BIG.</h4>
                    <p className="text-[10px] text-gray-500">Create Your Own Box & Save <span className="font-bold text-brand-green">UPTO 20%</span></p>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 group-hover:opacity-40 transition-opacity">
                    <img src="https://picsum.photos/seed/bundle-mini/200/200" alt="Bundle" className="w-full h-full object-cover" />
                  </div>
                  <ChevronRight size={20} className="text-brand-green-dark z-10" />
                </div>

                {/* Accordions */}
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  {[
                    { id: 'description', title: 'Description', content: product.description },
                    { id: 'shipping', title: 'Shipping Information', content: 'Free shipping on orders above Rs. 599. Delivery within 3-5 business days across India.' },
                  ].map((item) => (
                    <div key={item.id} className="border-b border-gray-100 last:border-0">
                      <button 
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full py-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-green-dark hover:text-brand-green transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          {item.id === 'description' ? <Activity size={16} /> : <Truck size={16} />}
                          <span>{item.title}</span>
                        </div>
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

        {/* Trust Badges */}
        <div className="py-16 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {trustBadges.map((badge, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="text-brand-green-dark flex justify-center">
                {badge.icon}
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-green-dark">{badge.title}</h4>
              <p className="text-[9px] text-gray-400 leading-tight max-w-[120px] mx-auto">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="py-20 border-t border-gray-100">
          <h2 className="text-2xl font-serif text-brand-green-dark mb-12 text-center italic">You will also like these....</h2>
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
            <h2 className="text-2xl font-serif text-brand-green-dark mb-8">Customer Reviews</h2>
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

              <button className="bg-[#3D5A35] text-white px-8 py-3 rounded-md text-[11px] font-bold uppercase tracking-widest hover:bg-brand-green-dark transition-all">
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
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-brand-green-dark">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-brand-green-dark">{review.name} <span className="text-[9px] text-brand-green ml-2 font-normal italic">Verified</span></h4>
                  </div>
                </div>
                <h5 className="text-[11px] font-bold text-brand-green-dark mb-2">{review.title}</h5>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <button className="flex items-center space-x-1 hover:text-brand-green transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                    <span className="text-[9px]">0</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-brand-accent transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" /></svg>
                    <span className="text-[9px]">0</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-40 lg:hidden flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-md overflow-hidden border border-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-brand-green-dark truncate max-w-[120px]">{product.name}</h4>
            <p className="text-[10px] font-bold text-brand-green">Rs. {product.price}</p>
          </div>
        </div>
        <button 
          onClick={() => onAddToCart(product.id, quantity)}
          className="bg-[#3D5A35] text-white px-6 py-3 rounded-md text-[10px] font-bold uppercase tracking-widest"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
