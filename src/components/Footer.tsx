import React from 'react';
import { CATEGORIES } from '../constants';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, params?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-green-dark text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <span className="text-3xl font-serif font-bold tracking-tight">BHEEMA FOODS</span>
              <p className="text-brand-beige/60 text-sm mt-2">Traditional Nutrition for the Modern Family.</p>
            </div>
            <p className="text-brand-beige/80 text-sm leading-relaxed">
              We are on a mission to bring back the ancient wisdom of Indian nutrition through sprouted, small-batch, and functional food mixes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Categories</h4>
            <ul className="space-y-4">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button 
                    onClick={() => onNavigate('shop', { category: cat.id })}
                    className="text-brand-beige/70 hover:text-brand-accent transition-colors text-sm"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-brand-beige/70 hover:text-brand-accent transition-colors text-sm"
                >
                  Shop All
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Customer Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-beige/70 hover:text-brand-accent transition-colors text-sm">Track Order</a></li>
              <li><a href="#" className="text-brand-beige/70 hover:text-brand-accent transition-colors text-sm">Shipping Policy</a></li>
              <li><a href="#" className="text-brand-beige/70 hover:text-brand-accent transition-colors text-sm">Returns & Refunds</a></li>
              <li><a href="#" className="text-brand-beige/70 hover:text-brand-accent transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-brand-beige/70 hover:text-brand-accent transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-accent shrink-0 mt-1" />
                <span className="text-brand-beige/70 text-sm">123 Traditional Way, Heritage Nagar, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-accent shrink-0" />
                <span className="text-brand-beige/70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-accent shrink-0" />
                <span className="text-brand-beige/70 text-sm">hello@bheemafoods.com</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-beige/40 mb-2">FSSAI License No.</p>
              <p className="text-xs font-mono text-brand-beige/80">12345678901234</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-beige/40 text-xs">
            © 2026 Bheema Foods. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 opacity-30 grayscale invert" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-30 grayscale invert" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-4 opacity-30 grayscale invert" />
          </div>
        </div>
      </div>
    </footer>
  );
};
