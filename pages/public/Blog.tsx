import React from 'react';
import { useSite } from '../../context/SiteContext';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { data } = useSite();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      <div className="bg-gray-100 dark:bg-gray-800 py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">Insights & News</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts on design, technology, and the future of digital.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.blog.map(post => (
            <article key={post.id} className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
              <Link to={`/blog/${post.id}`} className="block h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 dark:text-white hover:text-primary transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all mt-auto"
                >
                  Read Article <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;