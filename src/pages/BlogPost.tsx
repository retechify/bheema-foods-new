import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2, MessageCircle } from 'lucide-react';
import { BLOG_POSTS } from './Blog';

interface BlogPostProps {
  postId: string;
  onNavigate: (page: string, params?: any) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ postId, onNavigate }) => {
  const post = useMemo(() => BLOG_POSTS.find(p => p.id === postId), [postId]);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-serif text-brand-green-dark">Article not found</h2>
        <button onClick={() => onNavigate('blog')} className="btn-primary mt-6">Back to Blog</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container-custom max-w-4xl">
        {/* Back Button */}
        <button 
          onClick={() => onNavigate('blog')}
          className="flex items-center space-x-2 text-gray-400 hover:text-brand-green transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Blog</span>
        </button>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-brand-beige text-brand-green-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center text-gray-400 space-x-2">
              <Calendar size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-green-dark leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-8 border-y border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-brand-beige-dark flex items-center justify-center text-brand-green-dark font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-brand-green-dark">{post.author}</p>
                <p className="text-xs text-gray-400">Nutrition Specialist</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-brand-green transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-brand-green transition-colors">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="rounded-[2.5rem] overflow-hidden mb-16 shadow-xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-green-dark prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-brand-green-dark prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer / Tags */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="flex flex-wrap gap-3">
            {['Traditional', 'Nutrition', 'Sprouted', 'Wellness'].map(tag => (
              <span key={tag} className="bg-gray-50 text-gray-400 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts (Mini) */}
        <div className="mt-24">
          <h3 className="text-2xl font-serif text-brand-green-dark mb-10">You might also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== postId).slice(0, 2).map(p => (
              <div 
                key={p.id}
                onClick={() => onNavigate('blog-post', { id: p.id })}
                className="group cursor-pointer flex space-x-6 items-center"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-serif text-brand-green-dark group-hover:text-brand-green transition-colors leading-tight mb-2">
                    {p.title}
                  </h4>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
