import { Product, Category, Bundle, Testimonial, FAQItem } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'kids',
    name: 'Kids & Growth Nutrition',
    benefit: 'Essential nutrients for growing bodies',
    image: 'https://picsum.photos/seed/kids/600/400',
    icon: 'Baby'
  },
  {
    id: 'women',
    name: 'Women’s & Family Health',
    benefit: 'Hormonal balance and daily energy',
    image: 'https://picsum.photos/seed/women/600/400',
    icon: 'Heart'
  },
  {
    id: 'diabetic',
    name: 'Diabetic Care',
    benefit: 'Low GI mixes for blood sugar management',
    image: 'https://picsum.photos/seed/diabetic/600/400',
    icon: 'Activity'
  },
  {
    id: 'immunity',
    name: 'Immunity Boosters',
    benefit: 'Traditional herbs for natural defense',
    image: 'https://picsum.photos/seed/immunity/600/400',
    icon: 'Shield'
  },
  {
    id: 'protein',
    name: 'Protein & Strength',
    benefit: 'Plant-based power for active lives',
    image: 'https://picsum.photos/seed/protein/600/400',
    icon: 'Zap'
  },
  {
    id: 'traditional',
    name: 'Traditional Grain Mixes',
    benefit: 'Ancient wisdom in every spoonful',
    image: 'https://picsum.photos/seed/traditional/600/400',
    icon: 'Leaf'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '36-multigrain',
    slug: '36-multigrain-mix',
    name: '36 Multigrain Nutritional Mix',
    price: 450,
    originalPrice: 500,
    weight: '300g',
    benefit: 'Complete family nutrition with 36 sprouted ingredients',
    category: 'traditional',
    image: 'https://picsum.photos/seed/bheema1/800/800',
    tags: ['Protein Rich', 'Immunity Boost'],
    description: 'Our flagship mix combines 36 carefully selected grains, pulses, and nuts, all sprouted for maximum nutrient absorption.',
    ingredients: ['Sprouted Ragi', 'Sprouted Bajra', 'Sprouted Jowar', 'Almonds', 'Walnuts', 'Cardamom'],
    nutrition: { 'Energy': '380 kcal', 'Protein': '14g', 'Fiber': '8g', 'Iron': '4.2mg' },
    howToPrepare: 'Mix 2 tablespoons with water or milk. Cook on medium flame for 5-7 mins until thick. Add jaggery or salt to taste.',
    whoShouldConsume: 'Suitable for all ages from 2 years to elders.',
    allergyDisclaimer: 'Contains nuts (Almonds, Walnuts).',
    isFeatured: true
  },
  {
    id: 'sprouted-millet',
    slug: 'sprouted-millet-mix',
    name: 'Sprouted Millet Mix',
    price: 320,
    weight: '300g',
    benefit: 'Easy to digest, nutrient-dense daily porridge',
    category: 'kids',
    image: 'https://picsum.photos/seed/bheema2/800/800',
    tags: ['High Iron', 'Bone Strength'],
    description: 'A blend of 5 essential millets, sprouted for 48 hours to unlock hidden nutrients.',
    ingredients: ['Sprouted Finger Millet', 'Sprouted Pearl Millet', 'Sprouted Foxtail Millet'],
    nutrition: { 'Energy': '365 kcal', 'Protein': '11g', 'Calcium': '340mg' },
    howToPrepare: 'Add to boiling water and stir continuously to avoid lumps.',
    whoShouldConsume: 'Ideal for growing children and nursing mothers.',
    allergyDisclaimer: 'Gluten-free environment.',
    isFeatured: true
  },
  {
    id: 'karuppu-kavuni',
    slug: 'karuppu-kavuni-mix',
    name: 'Karuppu Kavuni Rice Mix',
    price: 380,
    weight: '300g',
    benefit: 'Antioxidant-rich black rice for cellular health',
    category: 'women',
    image: 'https://picsum.photos/seed/bheema3/800/800',
    tags: ['Weight Management', 'Immunity Boost'],
    description: 'Traditional Emperor\'s rice processed into a convenient mix for modern lifestyles.',
    ingredients: ['Karuppu Kavuni Rice', 'Sprouted Green Gram'],
    nutrition: { 'Energy': '350 kcal', 'Antioxidants': 'High', 'Fiber': '10g' },
    howToPrepare: 'Can be made as a sweet porridge or savory kanji.',
    whoShouldConsume: 'Excellent for women\'s hormonal health.',
    allergyDisclaimer: 'None.',
    isFeatured: true
  },
  {
    id: 'black-urad-dal',
    slug: 'black-urad-mix',
    name: 'Black Urad Dal Porridge Mix',
    price: 290,
    weight: '300g',
    benefit: 'Traditional strength builder for bones and back',
    category: 'protein',
    image: 'https://picsum.photos/seed/bheema4/800/800',
    tags: ['Bone Strength', 'Protein Rich'],
    description: 'A classic South Indian recipe for physical strength and stamina.',
    ingredients: ['Whole Black Urad Dal', 'Raw Rice', 'Fenugreek'],
    nutrition: { 'Energy': '340 kcal', 'Protein': '18g', 'Calcium': '150mg' },
    howToPrepare: 'Cook with coconut milk and palm jaggery for best results.',
    whoShouldConsume: 'Recommended for teenagers and athletes.',
    allergyDisclaimer: 'None.'
  },
  {
    id: 'moringa-powder',
    slug: 'moringa-powder',
    name: 'Moringa Leaf Powder',
    price: 180,
    weight: '100g',
    benefit: 'Natural multivitamin boost for daily energy',
    category: 'immunity',
    image: 'https://picsum.photos/seed/bheema5/800/800',
    tags: ['Immunity Boost', 'High Iron'],
    description: 'Shadow-dried organic moringa leaves ground into a fine, nutrient-dense powder.',
    ingredients: ['100% Moringa Leaves'],
    nutrition: { 'Vitamin A': 'High', 'Vitamin C': 'High', 'Iron': 'High' },
    howToPrepare: 'Add half a teaspoon to smoothies, dals, or warm water.',
    whoShouldConsume: 'Anyone looking for a natural nutrient supplement.',
    allergyDisclaimer: 'None.'
  },
  {
    id: 'diabetic-mix',
    slug: 'diabetic-friendly-mix',
    name: 'Diabetic-Friendly Grain Mix',
    price: 420,
    weight: '300g',
    benefit: 'Low glycemic index for stable sugar levels',
    category: 'diabetic',
    image: 'https://picsum.photos/seed/bheema6/800/800',
    tags: ['Diabetic Friendly', 'Weight Management'],
    description: 'Specially formulated with high-fiber grains and seeds to prevent sugar spikes.',
    ingredients: ['Sprouted Barley', 'Sprouted Horse Gram', 'Methi Seeds'],
    nutrition: { 'Energy': '330 kcal', 'Fiber': '15g', 'GI Index': 'Low' },
    howToPrepare: 'Best consumed as a savory breakfast porridge.',
    whoShouldConsume: 'Specifically for individuals managing blood sugar.',
    allergyDisclaimer: 'Contains Barley (Gluten).'
  },
  {
    id: 'horse-gram-mix',
    slug: 'horse-gram-mix',
    name: 'Sprouted Horse Gram Mix',
    price: 260,
    weight: '300g',
    benefit: 'High protein and iron for weight management',
    category: 'protein',
    image: 'https://picsum.photos/seed/bheema7/800/800',
    tags: ['Protein Rich', 'Weight Management'],
    description: 'Traditional horse gram sprouted and roasted to perfection.',
    ingredients: ['Sprouted Horse Gram', 'Cumin', 'Pepper'],
    nutrition: { 'Energy': '320 kcal', 'Protein': '22g', 'Iron': '6.5mg' },
    howToPrepare: 'Mix with buttermilk or cook as a thick soup.',
    whoShouldConsume: 'Great for those on a weight loss journey.',
    allergyDisclaimer: 'None.'
  },
  {
    id: 'curry-leaf-podi',
    slug: 'curry-leaf-podi',
    name: 'Curry Leaf Podi',
    price: 150,
    weight: '100g',
    benefit: 'Iron-rich condiment for hair and digestion',
    category: 'immunity',
    image: 'https://picsum.photos/seed/bheema8/800/800',
    tags: ['High Iron', 'Immunity Boost'],
    description: 'A flavorful blend of roasted curry leaves and traditional spices.',
    ingredients: ['Curry Leaves', 'Urad Dal', 'Red Chillies', 'Asafoetida'],
    nutrition: { 'Iron': 'High', 'Fiber': 'Medium' },
    howToPrepare: 'Mix with hot rice and ghee or use as a side for idli/dosa.',
    whoShouldConsume: 'Anyone looking to improve iron intake naturally.',
    allergyDisclaimer: 'None.'
  }
];

export const BUNDLES: Bundle[] = [
  {
    id: 'growth-combo',
    name: 'Growth Combo',
    price: 750,
    originalPrice: 820,
    image: 'https://picsum.photos/seed/bundle1/800/800',
    savings: 'Save ₹70',
    products: ['sprouted-millet', '36-multigrain']
  },
  {
    id: 'diabetic-care',
    name: 'Diabetic Care Combo',
    price: 800,
    originalPrice: 890,
    image: 'https://picsum.photos/seed/bundle2/800/800',
    savings: 'Save ₹90',
    products: ['diabetic-mix', 'moringa-powder']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya S.',
    rating: 5,
    text: 'The 36 Multigrain mix has become a staple for my kids. They love the taste and I love the nutrition!',
    product: '36 Multigrain Nutritional Mix'
  },
  {
    id: '2',
    name: 'Rajesh M.',
    rating: 5,
    text: 'Managing my sugar levels became easier with the Diabetic-friendly mix. Very filling and healthy.',
    product: 'Diabetic-Friendly Grain Mix'
  },
  {
    id: '3',
    name: 'Anjali K.',
    rating: 4,
    text: 'Authentic taste. Reminds me of the porridge my grandmother used to make. Highly recommend the Karuppu Kavuni.',
    product: 'Karuppu Kavuni Rice Mix'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is it suitable for babies?',
    answer: 'Our Sprouted Millet Mix is suitable for babies above 6 months. For the 36 Multigrain mix, we recommend starting after 2 years.'
  },
  {
    question: 'Is it diabetic friendly?',
    answer: 'Yes, we have a specific Diabetic-Friendly Grain Mix with low GI ingredients. Many of our other millet-based products are also suitable due to high fiber content.'
  },
  {
    question: 'Does it contain preservatives?',
    answer: 'Absolutely not. We use traditional sprouting and roasting methods to naturally extend shelf life without any chemicals.'
  },
  {
    question: 'How to prepare?',
    answer: 'Most of our mixes can be prepared by mixing with water/milk and cooking for 5-7 minutes. Detailed instructions are on each pack.'
  },
  {
    question: 'How long does it last?',
    answer: 'Since we make fresh weekly batches, our products have a shelf life of 4-6 months when stored in an airtight container in a cool, dry place.'
  }
];
