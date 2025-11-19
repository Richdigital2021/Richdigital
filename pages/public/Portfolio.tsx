import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const { data } = useSite();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(data.portfolio.map(item => item.category)))];

  const filteredProjects = filter === 'All' 
    ? data.portfolio 
    : data.portfolio.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      <div className="bg-gray-100 dark:bg-gray-800 py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">Our Work</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of our finest digital craftsmanship.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(item => (
            <Link key={item.id} to={`/portfolio/${item.id}`} className="group block">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="text-white border border-white px-4 py-2 rounded-full text-sm font-medium">View Case Study</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;