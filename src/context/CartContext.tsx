import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, Bundle } from '../types';
import { PRODUCTS, BUNDLES } from '../constants';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (id: string, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('bheema_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('bheema_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id: string, quantity: number = 1) => {
    const product = PRODUCTS.find(p => p.id === id);
    const bundle = BUNDLES.find(b => b.id === id);
    
    if (!product && !bundle) return;

    const itemToAdd = product 
      ? { id: product.id, name: product.name, price: product.price, image: product.image, weight: product.weight }
      : { id: bundle!.id, name: bundle!.name, price: bundle!.price, image: bundle!.image, weight: 'Bundle' };

    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...itemToAdd, quantity }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      updateQuantity, 
      removeFromCart, 
      clearCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
