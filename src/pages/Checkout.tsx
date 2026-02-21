import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { handleWhatsAppRedirect } from '../utils/whatsapp';

export const Checkout: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: ''
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Invalid pincode (6 digits)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsOrdered(true);
      // In a real app, you'd send this to a backend
    }
  };

  const handleWhatsAppOrder = () => {
    handleWhatsAppRedirect(cartItems, formData);
  };

  if (isOrdered) {
    return (
      <div className="pt-32 pb-24 container-custom text-center">
        <div className="w-20 h-20 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-4xl font-serif text-brand-green-dark mb-4">Order Placed!</h1>
        <p className="text-gray-600 mb-8">Thank you for choosing Bheema Foods. Your traditional nutrition is on its way.</p>
        <div className="max-w-md mx-auto space-y-4">
          <button onClick={handleWhatsAppOrder} className="w-full flex items-center justify-center space-x-3 py-4 rounded-full bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all">
            <MessageCircle size={20} />
            <span>Confirm on WhatsApp</span>
          </button>
          <button onClick={() => window.location.href = '/'} className="btn-secondary w-full">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 container-custom">
      <h1 className="text-4xl font-serif text-brand-green-dark mb-12">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-serif text-brand-green-dark mb-8">Shipping Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className={`w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-brand-green/20'}`} placeholder="John Doe" />
                {errors.name && <p className="text-red-500 text-[10px] mt-1 flex items-center"><AlertCircle size={10} className="mr-1" /> {errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className={`w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 ${errors.phone ? 'ring-2 ring-red-500' : 'focus:ring-brand-green/20'}`} placeholder="+91 98765 43210" />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 flex items-center"><AlertCircle size={10} className="mr-1" /> {errors.phone}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Delivery Address</label>
              <textarea required name="address" value={formData.address} onChange={handleInputChange} rows={3} className={`w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 ${errors.address ? 'ring-2 ring-red-500' : 'focus:ring-brand-green/20'}`} placeholder="Street name, Apartment, Area"></textarea>
              {errors.address && <p className="text-red-500 text-[10px] mt-1 flex items-center"><AlertCircle size={10} className="mr-1" /> {errors.address}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Pincode</label>
              <input required name="pincode" value={formData.pincode} onChange={handleInputChange} type="text" className={`w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 ${errors.pincode ? 'ring-2 ring-red-500' : 'focus:ring-brand-green/20'}`} placeholder="600001" />
              {errors.pincode && <p className="text-red-500 text-[10px] mt-1 flex items-center"><AlertCircle size={10} className="mr-1" /> {errors.pincode}</p>}
            </div>
            <button type="submit" className="btn-primary w-full py-5 text-lg">Place Order</button>
          </form>
        </div>

        <div className="bg-brand-beige p-8 rounded-3xl h-fit">
          <h2 className="text-2xl font-serif text-brand-green-dark mb-8">Order Summary</h2>
          <div className="space-y-4 mb-8">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-brand-green-dark">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.quantity} x ₹{item.price}</p>
                </div>
                <p className="font-bold text-brand-green-dark">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-brand-beige-dark pt-6 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-brand-green font-bold uppercase text-xs">Free</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-brand-green-dark pt-4">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
