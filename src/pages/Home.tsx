import React from 'react';
import { CATEGORIES, PRODUCTS, BUNDLES, TESTIMONIALS, FAQS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { CheckCircle2, ArrowRight, Star, Quote, ChevronRight, Baby, Heart, Activity, Shield, Zap, Leaf, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (id: string, quantity?: number) => void;
}

const iconMap: Record<string, any> = {
  Baby, Heart, Activity, Shield, Zap, Leaf
};

export const Home: React.FC<HomeProps> = ({ onNavigate, onAddToCart }) => {
  return (
    <div className="pt-20">
      {/* Section 1: Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-brand-beige">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hero/1920/1080?blur=2" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-beige via-brand-beige/80 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} fill="currentColor" />
              <span>Trusted by 10,000+ Families</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green-dark leading-[1.1] mb-6">
              Traditional Nutrition for the <span className="italic text-brand-green">Modern Family</span>
            </h1>
            <p className="text-lg text-brand-green-dark/80 mb-8 max-w-lg leading-relaxed">
              Sprouted, small-batch, functional mixes rooted in ancient Indian wisdom. Crafted for kids, adults, and elders.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => onNavigate('shop')} className="btn-primary flex items-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight size={18} />
              </button>
              <button onClick={() => onNavigate('shop')} className="btn-secondary">
                Explore Categories
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { text: 'FSSAI Certified', icon: <CheckCircle2 size={16} /> },
                { text: 'No Preservatives', icon: <CheckCircle2 size={16} /> },
                { text: 'Sprouted 48 Hours', icon: <CheckCircle2 size={16} /> },
                { text: 'Fresh Weekly', icon: <CheckCircle2 size={16} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-brand-green-dark/70">
                  <span className="text-brand-green">{item.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/product-hero/800/1000" 
                alt="Product Packaging" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-green/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Shop by Category */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-green-dark mb-4">Shop by Category</h2>
            <p className="text-brand-green-light max-w-xl mx-auto">Targeted nutrition for every member of your family, from toddlers to elders.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Leaf;
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -5 }}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  onClick={() => onNavigate('shop', { category: cat.id })}
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-brand-green-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-12 h-12 bg-brand-beige/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-brand-accent transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-1">{cat.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{cat.benefit}</p>
                    <button className="text-white text-xs font-bold uppercase tracking-widest flex items-center space-x-2 group-hover:text-brand-accent transition-colors">
                      <span>Shop Category</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="py-24 bg-brand-beige">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-brand-green-dark mb-4">Our Bestsellers</h2>
              <p className="text-brand-green-light">The most loved traditional mixes by our community.</p>
            </div>
            <button onClick={() => onNavigate('shop')} className="text-brand-green font-bold uppercase tracking-widest flex items-center space-x-2 hover:text-brand-green-dark transition-colors">
              <span>View All Products</span>
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onView={(id) => onNavigate('product', { id })}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Functional Benefit Banner */}
      <section className="py-20 bg-brand-green-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Leaf size={400} className="rotate-45 translate-x-1/2 -translate-y-1/4" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
              36 Ingredients. Sprouted for 48 Hours. <span className="text-brand-accent italic">Easier to Absorb.</span>
            </h2>
            <p className="text-brand-beige/70 text-lg mb-10 max-w-2xl mx-auto">
              Traditional processing methods aren't just for taste—they unlock nutrition that modern processing ignores.
            </p>
            <button onClick={() => onNavigate('shop')} className="bg-brand-accent hover:bg-white hover:text-brand-green-dark text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              Experience the Difference
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Why Choose Bheema Foods */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-green-dark mb-4">The Bheema Promise</h2>
            <p className="text-brand-green-light">Why families trust us for their daily nutrition.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { title: 'Sprouted Nutrition', icon: <Zap /> },
              { title: 'No Maltodextrin', icon: <X /> },
              { title: 'No Refined Sugar', icon: <X /> },
              { title: 'Freshly Ground', icon: <Activity /> },
              { title: 'Trusted by Families', icon: <Heart /> },
              { title: 'Small Batch', icon: <Leaf /> },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-green mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-brand-green-dark uppercase tracking-wider">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Bundles Section */}
      <section className="py-24 bg-brand-beige-dark/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-green-dark mb-4">Family Bundles</h2>
            <p className="text-brand-green-light">Complete health solutions with extra savings.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUNDLES.map((bundle) => (
              <div key={bundle.id} className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-64 sm:h-auto relative">
                  <img 
                    src={bundle.image} 
                    alt={bundle.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {bundle.savings}
                  </div>
                </div>
                <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif text-brand-green-dark mb-2">{bundle.name}</h3>
                  <p className="text-sm text-brand-green-light mb-6">A curated selection for targeted health goals.</p>
                  <div className="flex items-baseline space-x-3 mb-8">
                    <span className="text-3xl font-bold text-brand-green-dark">₹{bundle.price}</span>
                    <span className="text-lg text-brand-green-light line-through">₹{bundle.originalPrice}</span>
                  </div>
                  <button className="btn-primary w-full">Shop Bundle</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-green-dark mb-4">What Our Community Says</h2>
            <div className="flex items-center justify-center space-x-1 text-brand-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              <span className="ml-2 text-brand-green-dark font-bold">4.9/5 Based on 2,000+ Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-brand-beige p-8 rounded-3xl relative">
                <Quote className="absolute top-6 right-6 text-brand-green-light/20" size={48} />
                <div className="flex space-x-1 text-brand-accent mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-brand-green-dark/80 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-brand-green-dark">{t.name}</h4>
                  <p className="text-xs text-brand-green-light uppercase tracking-widest font-medium">Verified Buyer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Founder Story */}
      <section className="py-24 bg-brand-beige relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/founder/800/1000" 
                  alt="Founder Story" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden sm:block">
                <p className="text-brand-green-dark font-serif italic text-lg mb-2">"Nutrition is the greatest legacy we can leave for our children."</p>
                <p className="text-brand-green-light text-sm font-bold uppercase tracking-widest">— Founder, Bheema Foods</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif text-brand-green-dark mb-6">Preserving a Mother’s Legacy</h2>
              <p className="text-brand-green-dark/80 text-lg mb-6 leading-relaxed">
                Bheema Foods started in a small home kitchen, where our founder's mother would spend days sprouting and roasting grains for the family. 
              </p>
              <p className="text-brand-green-dark/80 text-lg mb-8 leading-relaxed">
                Today, we maintain those same traditional methods—sprouting for 48 hours, slow roasting, and small-batch grinding—to bring that same motherly care to your family's table.
              </p>
              <button className="btn-secondary">Read Our Full Story</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-green-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-green-light">Everything you need to know about our traditional mixes.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-brand-beige rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h4 className="font-bold text-brand-green-dark">{faq.question}</h4>
                  <ChevronDown className="text-brand-green transition-transform group-open:rotate-180" size={20} />
                </summary>
                <div className="px-6 pb-6 text-brand-green-dark/70 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
