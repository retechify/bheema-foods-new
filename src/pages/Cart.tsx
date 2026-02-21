import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

import { handleWhatsAppRedirect } from '../utils/whatsapp';

export const Cart: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  const handleWhatsAppOrder = () => {
    handleWhatsAppRedirect(cartItems);
  };

  if (cartCount === 0) {
    return (
      <div className="pt-32 pb-24 container-custom text-center">
        <div className="w-20 h-20 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
          <ShoppingBag size={40} />
        </div>
        <h1 className="text-4xl font-serif text-brand-green-dark mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any traditional goodness yet.</p>
        <button onClick={() => onNavigate('shop')} className="btn-primary">Start Shopping</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 container-custom">
      <h1 className="text-4xl font-serif text-brand-green-dark mb-12">Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brand-beige flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-serif text-brand-green-dark mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.weight}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 bg-brand-beige rounded-full px-4 py-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="text-brand-green hover:text-brand-green-dark transition-colors">
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-brand-green-dark w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="text-brand-green hover:text-brand-green-dark transition-colors">
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="font-bold text-brand-green-dark">₹{item.price * item.quantity}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-brand-beige p-8 rounded-3xl h-fit">
          <h2 className="text-2xl font-serif text-brand-green-dark mb-8">Order Summary</h2>
          <div className="space-y-4 mb-8 border-b border-brand-beige-dark pb-8">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-brand-green font-bold uppercase text-xs">Free</span>
            </div>
          </div>
          <div className="flex justify-between text-2xl font-bold text-brand-green-dark mb-8">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>
          <div className="space-y-4">
            <button onClick={() => onNavigate('checkout')} className="btn-primary w-full flex items-center justify-center space-x-3 py-5 text-lg">
              <span>Proceed to Checkout</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={handleWhatsAppOrder} 
              className="w-full flex items-center justify-center space-x-3 py-4 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold uppercase tracking-widest text-sm hover:bg-[#25D366] hover:text-white transition-all"
            >
              <ShoppingBag size={18} />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
