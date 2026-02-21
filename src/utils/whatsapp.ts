import { CartItem } from '../types';

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  pincode: string;
}

export const generateWhatsAppMessage = (cartItems: CartItem[], customerDetails?: CustomerDetails): string => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let message = `Hello Bheema Foods,\n\nI would like to place an order:\n\n🛒 *Order Details:*\n`;
  
  cartItems.forEach(item => {
    message += `${item.quantity} x ${item.name} (${item.weight}) – ₹${item.price * item.quantity}\n`;
  });

  message += `\n*Subtotal: ₹${cartTotal}*\n`;

  if (customerDetails && customerDetails.name) {
    message += `\n👤 *Customer Details:*\n`;
    message += `Name: ${customerDetails.name}\n`;
    message += `Phone: ${customerDetails.phone}\n`;
    message += `Address: ${customerDetails.address}\n`;
    message += `Pincode: ${customerDetails.pincode}\n`;
  }

  message += `\nPlease confirm availability.\n\nThank you.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};

export const handleWhatsAppRedirect = (cartItems: CartItem[], customerDetails?: CustomerDetails) => {
  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  const url = generateWhatsAppMessage(cartItems, customerDetails);
  window.open(url, '_blank');
};
