import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Calendar, User, Tag } from 'lucide-react';

export const BLOG_POSTS = [
  {
    id: '1',
    title: "The Power of Sprouting: Why 48 Hours Matters",
    excerpt: "Discover how sprouting unlocks hidden nutrients and makes grains easier to digest. We dive deep into the science of traditional grain preparation.",
    content: `
      <p>Sprouting, also known as germination, is a natural process that transforms a dormant seed into a living plant. At Bheema Foods, we believe that this ancient practice is the key to unlocking the true nutritional potential of grains and pulses.</p>
      
      <h3>Why 48 Hours?</h3>
      <p>Our research and traditional wisdom suggest that 48 hours is the "sweet spot" for most grains. During this time, the grain undergoes significant biochemical changes:</p>
      <ul>
        <li><strong>Enzyme Activation:</strong> Dormant enzymes come to life, breaking down complex starches into simpler, easier-to-digest sugars.</li>
        <li><strong>Phytic Acid Reduction:</strong> Phytic acid is an "anti-nutrient" found in grains that binds to minerals like iron, zinc, and calcium, preventing their absorption. Sprouting significantly reduces phytic acid levels.</li>
        <li><strong>Vitamin Boost:</strong> Levels of Vitamin C, Vitamin B, and carotene increase substantially during the sprouting process.</li>
      </ul>

      <h3>The Bheema Method</h3>
      <p>We don't just soak our grains. We follow a meticulous process of washing, soaking, and then allowing the grains to breathe in controlled environments for exactly 48 hours. This ensures maximum sprout length without allowing the grain to become bitter or lose its structural integrity for grinding.</p>
      
      <p>By incorporating sprouted grains into your daily diet, you're not just eating food; you're consuming life-force energy that is primed for absorption by your body.</p>
    `,
    image: "https://picsum.photos/seed/blog1/800/600",
    date: "Oct 12, 2023",
    author: "Dr. Ananya Sharma",
    category: "Nutrition"
  },
  {
    id: '2',
    title: "Ancient Grains for Modern Lifestyles",
    excerpt: "How millets and traditional grains are making a comeback in urban kitchens. Learn how to incorporate these superfoods into your daily diet.",
    content: `
      <p>In the rush of modern life, we've often turned to highly processed, convenient foods. However, a silent revolution is happening in kitchens across the country: the return of ancient grains.</p>
      
      <h3>The Millet Renaissance</h3>
      <p>Millets like Ragi (Finger Millet), Bajra (Pearl Millet), and Jowar (Sorghum) were the staples of our ancestors. They are naturally gluten-free, rich in fiber, and have a low glycemic index, making them perfect for managing modern lifestyle diseases like diabetes and obesity.</p>
      
      <h3>Easy Ways to Incorporate Ancient Grains</h3>
      <ol>
        <li><strong>Start with Breakfast:</strong> Replace your processed cereal with a warm bowl of Bheema Multigrain Mix.</li>
        <li><strong>Mix your Flours:</strong> Add a portion of millet flour to your regular wheat flour for rotis.</li>
        <li><strong>Snack Smart:</strong> Look for snacks made from sprouted grains rather than refined flour.</li>
      </ol>
      
      <p>Ancient grains aren't just a trend; they are a sustainable and nutritious choice for a healthier future.</p>
    `,
    image: "https://picsum.photos/seed/blog2/800/600",
    date: "Oct 05, 2023",
    author: "Chef Vikram",
    category: "Lifestyle"
  },
  {
    id: '3',
    title: "Why Small Batch Grinding is Better",
    excerpt: "The difference between mass-produced flour and our stone-ground traditional mixes. Freshness is the key to retaining nutritional value.",
    content: `
      <p>In the world of industrial food production, speed and volume are king. But at Bheema Foods, we believe that the best things take time. This is why we insist on small-batch grinding.</p>
      
      <h3>The Heat Problem</h3>
      <p>Large-scale industrial mills generate significant heat during the grinding process. This heat can "cook" the flour prematurely, destroying delicate vitamins and essential oils. Our slow, stone-grinding process keeps the flour cool, preserving its natural goodness.</p>
      
      <h3>Freshness You Can Taste</h3>
      <p>Flour begins to oxidize the moment it is ground. By producing in small batches, we ensure that the product reaching your doorstep was ground just days ago, not months. You can smell the difference the moment you open a pack of Bheema Foods.</p>
      
      <p>Small batch means we can maintain rigorous quality control over every single gram that leaves our facility. It's not the easiest way, but it's the right way.</p>
    `,
    image: "https://picsum.photos/seed/blog3/800/600",
    date: "Sep 28, 2023",
    author: "Rajesh Kumar",
    category: "Process"
  },
  {
    id: '4',
    title: "Traditional Weaning: Best First Foods for Babies",
    excerpt: "A guide to introducing solids using traditional Indian wisdom and sprouted grain mixes for optimal growth.",
    content: `
      <p>Introducing solids is a major milestone in your baby's life. While the market is flooded with "instant" baby foods, many parents are looking back to traditional wisdom for a healthier start.</p>
      
      <h3>The First Spoonful</h3>
      <p>Traditionally, sprouted Ragi porridge has been the preferred first food in many Indian households. Why? Because it's rich in calcium and iron, and the sprouting process makes it incredibly gentle on a baby's developing digestive system.</p>
      
      <h3>Why Sprouted is Best for Babies</h3>
      <p>Babies have small stomachs but high nutritional needs. Sprouted grains provide nutrient-dense calories. The breakdown of complex starches during sprouting means the baby's body spends less energy on digestion and more on growth.</p>
      
      <p>Always consult with your pediatrician before starting solids, and remember to introduce one new food at a time.</p>
    `,
    image: "https://picsum.photos/seed/blog4/800/600",
    date: "Sep 15, 2023",
    author: "Dr. Ananya Sharma",
    category: "Parenting"
  },
  {
    id: '5',
    title: "The Role of Ragi in Bone Health",
    excerpt: "Why Finger Millet (Ragi) is the ultimate calcium source for growing children and aging adults alike.",
    content: `
      <p>Ragi, or Finger Millet, is often called a "super-grain," and for good reason. It contains more calcium than any other cereal, making it a powerhouse for bone health.</p>
      
      <h3>A Lifetime of Benefits</h3>
      <p>From the first years of life to the golden years, Ragi provides essential support:</p>
      <ul>
        <li><strong>For Children:</strong> Supports rapid bone development and tooth formation.</li>
        <li><strong>For Adults:</strong> Helps maintain bone density and prevents osteoporosis.</li>
        <li><strong>For Elders:</strong> Provides an easy-to-digest source of minerals to keep bones strong.</li>
      </ul>
      
      <p>At Bheema Foods, our Ragi is always sprouted, which further enhances the bioavailability of its calcium, ensuring your body actually absorbs what you eat.</p>
    `,
    image: "https://picsum.photos/seed/blog5/800/600",
    date: "Sep 02, 2023",
    author: "Nutritionist Priya",
    category: "Health"
  }
];

export const Blog: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-serif text-brand-green-dark mb-4">Traditional Wisdom</h1>
          <p className="text-brand-green-light max-w-2xl mx-auto">
            Insights into ancient nutrition, traditional processing methods, and modern wellness for your family.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-brand-beige rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col lg:flex-row"
          >
            <div className="lg:w-3/5 h-80 lg:h-auto overflow-hidden">
              <img 
                src={BLOG_POSTS[0].image} 
                alt={BLOG_POSTS[0].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Featured</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{BLOG_POSTS[0].category}</span>
              </div>
              <h2 className="text-3xl font-serif text-brand-green-dark mb-6 group-hover:text-brand-green transition-colors leading-tight">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {BLOG_POSTS[0].excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand-beige-dark flex items-center justify-center text-brand-green-dark font-bold text-xs">
                    {BLOG_POSTS[0].author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-green-dark">{BLOG_POSTS[0].author}</p>
                    <p className="text-[10px] text-gray-400">{BLOG_POSTS[0].date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate('blog-post', { id: BLOG_POSTS[0].id })}
                  className="text-brand-green font-bold text-xs uppercase tracking-widest flex items-center space-x-2"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.slice(1).map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onNavigate('blog-post', { id: post.id })}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-gray-100"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">{post.category}</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{post.date}</span>
                </div>
                <h3 className="text-xl font-serif text-brand-green-dark mb-4 group-hover:text-brand-green transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <span className="text-[10px] font-bold text-brand-green-dark uppercase tracking-widest">By {post.author}</span>
                  <span className="text-brand-green font-bold text-[10px] uppercase tracking-widest flex items-center space-x-1">
                    <span>Read More</span>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-24 bg-brand-green-dark rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Subscribe to our Newsletter</h2>
            <p className="text-brand-beige/70 mb-10">
              Get traditional recipes, nutritional tips, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
              />
              <button className="bg-brand-accent hover:bg-white hover:text-brand-green-dark text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
