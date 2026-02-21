import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { CartDrawer } from './components/CartDrawer';
import { CartProvider, useCart } from './context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'home' | 'shop' | 'product' | 'cart' | 'checkout' | 'about' | 'contact' | 'blog' | 'blog-post';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageParams, setPageParams] = useState<any>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const { cartCount, addToCart } = useCart();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, pageParams]);

  const navigate = (page: string, params: any = {}) => {
    setCurrentPage(page as Page);
    setPageParams(params);
  };

  const handleAddToCart = (id: string, quantity: number = 1) => {
    addToCart(id, quantity);
    setToastMessage(`Added to cart!`);
    setShowToast(true);
    setIsCartOpen(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} onAddToCart={handleAddToCart} />;
      case 'shop':
        return <Shop onNavigate={navigate} onAddToCart={handleAddToCart} initialCategory={pageParams.category} />;
      case 'product':
        return <ProductDetail productId={pageParams.id} onNavigate={navigate} onAddToCart={handleAddToCart} />;
      case 'cart':
        return <Cart onNavigate={navigate} />;
      case 'checkout':
        return <Checkout />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog onNavigate={navigate} />;
      case 'blog-post':
        return <BlogPost postId={pageParams.id} onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigate} cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (pageParams.id || pageParams.category || '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onNavigate={navigate}
      />

      <Footer onNavigate={navigate} />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] bg-brand-green-dark text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-brand-green"
          >
            <div className="bg-brand-accent rounded-full p-1">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="font-bold tracking-wide">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end space-y-4">
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-brand-beige-dark text-[10px] font-bold text-brand-green-dark uppercase tracking-widest flex items-center space-x-2"
            >
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span>{cartCount} items in cart</span>
            </motion.div>
          )}
        </AnimatePresence>
        <a 
          href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210'}?text=${encodeURIComponent('Hi Bheema Foods, I have some questions about your products.')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-xl border border-brand-beige-dark text-[10px] font-bold text-brand-green-dark uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {cartCount > 0 ? 'Order via WhatsApp' : 'Chat with us'}
          </span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
