import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 container-custom">
      <h1 className="text-4xl font-serif text-brand-green-dark mb-12 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-serif text-brand-green-dark mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">Have questions about our products or your order? We're here to help!</p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-green">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-green-dark uppercase tracking-widest">Phone</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-green">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-green-dark uppercase tracking-widest">Email</p>
                <p className="text-gray-600">hello@bheemafoods.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-green">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-green-dark uppercase tracking-widest">Address</p>
                <p className="text-gray-600">123 Traditional Lane, Nutrition Nagar, Chennai - 600001</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
              <input type="text" className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-green/20" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
              <input type="email" className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-green/20" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
              <textarea rows={4} className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-green/20" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
