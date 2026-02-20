export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  weight: string;
  benefit: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  ingredients: string[];
  nutrition: Record<string, string>;
  howToPrepare: string;
  whoShouldConsume: string;
  allergyDisclaimer: string;
}

export interface Category {
  id: string;
  name: string;
  benefit: string;
  image: string;
  icon: string;
}

export interface Bundle {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  savings: string;
  products: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  product?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: string;
  quantity: number;
}
