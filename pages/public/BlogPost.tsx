import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const { data } = useSite();
  const post = data.blog.find(p => p.id === id);

  if (!post) return <div className="py-20 text-center">Post not found</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-10 pb-20">
      <article className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>

        <div className="mb-8">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4">
            Technology
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6">
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
            </div>
            <div className="flex gap-3">
               <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"><Share2 size={16} /></button>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img src={post.image} alt={post.title} className="w-full object-cover max-h-[500px]" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
            {post.excerpt}
          </p>
          <div className="text-gray-800 dark:text-gray-200 space-y-6">
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>Why this matters</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
           <h4 className="font-bold mb-4 dark:text-white">Share this article</h4>
           <div className="flex gap-4">
             <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:opacity-90"><Facebook size={18} /> Facebook</button>
             <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90"><Twitter size={18} /> Twitter</button>
             <button className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:opacity-90"><Linkedin size={18} /> LinkedIn</button>
           </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;