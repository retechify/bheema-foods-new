import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  const handleCheckout = () => {
    onClose();
    onNavigate('checkout');
  };

  const handleViewCart = () => {
    onClose();
    onNavigate('cart');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-beige flex items-center justify-between bg-brand-beige/20">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-brand-green" size={24} />
                <h2 className="text-xl font-serif font-bold text-brand-green-dark">Your Cart</h2>
                <span className="bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-brand-beige rounded-full transition-colors text-brand-green-dark"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-brand-beige rounded-full flex items-center justify-center mb-6 text-brand-green-light">
                    <ShoppingBag size={40} />
                  </div>
                  <h3 className="text-xl font-serif text-brand-green-dark mb-2">Your cart is empty</h3>
                  <p className="text-brand-green-light mb-8">Traditional nutrition is just a click away.</p>
                  <button 
                    onClick={onClose}
                    className="btn-primary"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4 group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brand-beige flex-shrink-0 border border-brand-beige-dark">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-brand-green-dark leading-tight">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-green-light hover:text-brand-accent transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-brand-green-light mb-3">{item.weight}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-brand-beige-dark rounded-full px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-brand-green-dark hover:text-brand-green disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold text-brand-green-dark">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-brand-green-dark hover:text-brand-green"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-brand-green-dark">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-brand-beige bg-brand-beige/10">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-brand-green-light">
                    <span>Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-brand-green-light">
                    <span>Shipping</span>
                    <span className="text-brand-green font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif font-bold text-brand-green-dark pt-3 border-t border-brand-beige">
                    <span>Total</span>
                    <span>₹{cartTotal}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={handleViewCart}
                    className="btn-secondary py-4"
                  >
                    View Cart
                  </button>
                  <button 
                    onClick={handleCheckout}
                    className="btn-primary flex items-center justify-center space-x-3 py-4"
                  >
                    <span>Checkout</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
                <p className="text-center text-[10px] text-brand-green-light mt-4 uppercase tracking-widest font-bold">
                  Secure Checkout • FSSAI Certified • Fresh Weekly
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
