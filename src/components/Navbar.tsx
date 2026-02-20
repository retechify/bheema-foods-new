import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (page: string, params?: any) => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', action: () => onNavigate('home') },
    { name: 'Shop All', action: () => onNavigate('shop') },
    { name: 'Categories', action: () => onNavigate('shop') },
    { name: 'Our Story', action: () => onNavigate('home') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-green-dark"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div 
          className="cursor-pointer flex flex-col items-center"
          onClick={() => onNavigate('home')}
        >
          <span className="text-2xl font-serif font-bold tracking-tight text-brand-green-dark">BHEEMA FOODS</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green font-medium -mt-1">Traditional Nutrition</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="text-sm font-medium text-brand-green-dark hover:text-brand-green transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-brand-green-dark hover:text-brand-green transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 text-brand-green-dark hover:text-brand-green transition-colors hidden sm:block">
            <User size={20} />
          </button>
          <button 
            className="p-2 text-brand-green-dark hover:text-brand-green transition-colors relative"
            onClick={() => onNavigate('shop')}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white z-[70] p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-serif font-bold text-brand-green-dark">BHEEMA FOODS</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} className="text-brand-green-dark" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      link.action();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-lg font-medium text-brand-green-dark text-left border-b border-brand-beige pb-2"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
