import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import { ArrowLeft, ExternalLink, Tag, Calendar, Layers, CheckCircle } from 'lucide-react';

const PortfolioItem = () => {
  const { id } = useParams();
  const { data } = useSite();
  const item = data.portfolio.find(p => p.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Project Not Found</h2>
        <p className="text-gray-500 mb-8">The project you are looking for does not exist.</p>
        <Link to="/portfolio" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-10 pb-20 animate-fade-in">
      {/* Header Area */}
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/portfolio" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-primary mb-8 transition font-medium group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                 <Tag size={14} /> {item.category}
               </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 dark:text-white leading-tight tracking-tight">
              {item.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
          
          <div className="flex-shrink-0">
             <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition shadow-xl flex items-center gap-2">
                Visit Website <ExternalLink size={18} />
             </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 relative aspect-video">
           <img 
             src={item.image} 
             alt={item.title} 
             className="w-full h-full object-cover" 
           />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
           {/* Main Article */}
           <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
                <Layers className="text-primary" /> Project Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                 <p className="mb-8">
                   {item.fullContent || `For ${item.title}, we embarked on a mission to redefine their digital presence. The project required a deep dive into user experience research, followed by a complete overhaul of their visual identity and technical infrastructure.`}
                 </p>
                 
                 <h3 className="text-xl font-bold mt-12 mb-4 dark:text-white">The Challenge</h3>
                 <p className="mb-6">
                   In a crowded market, {item.title} needed to stand out. Their previous digital platform was outdated, slow, and didn't reflect the premium nature of their offerings. User retention was low, and mobile conversion rates were suffering.
                 </p>
                 
                 <h3 className="text-xl font-bold mt-12 mb-4 dark:text-white">Our Approach</h3>
                 <p className="mb-6">
                   We adopted a mobile-first strategy, focusing on performance and accessibility. By utilizing modern frameworks and a headless CMS architecture, we ensured the site was blazing fast and easy to manage.
                 </p>
                 <ul className="space-y-2 my-6 list-none pl-0">
                    {['Comprehensive UX Research', 'Custom UI Design System', 'Full-stack Development', 'SEO Optimization'].map((li, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                        <span>{li}</span>
                      </li>
                    ))}
                 </ul>

                 <h3 className="text-xl font-bold mt-12 mb-4 dark:text-white">The Results</h3>
                 <p>
                   Since launch, {item.title} has seen a <strong>150% increase</strong> in organic traffic and a <strong>40% boost</strong> in conversion rates. The new platform provides a seamless experience across all devices.
                 </p>
              </div>
           </div>

           {/* Sidebar Details */}
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 sticky top-24">
                 <h3 className="font-bold mb-8 text-xl dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">At a Glance</h3>
                 
                 <div className="space-y-6">
                    <div>
                       <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">
                          <Calendar size={14} /> Timeline
                       </span>
                       <span className="font-medium dark:text-white text-lg">8 Weeks</span>
                    </div>
                    
                    <div>
                       <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">
                          <Tag size={14} /> Industry
                       </span>
                       <span className="font-medium dark:text-white text-lg">{item.category}</span>
                    </div>

                    <div>
                       <span className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">
                          <Layers size={14} /> Tech Stack
                       </span>
                       <div className="flex flex-wrap gap-2 mt-2">
                          {['React', 'Node.js', 'Tailwind', 'AWS'].map(tag => (
                            <span key={tag} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-md text-sm font-medium shadow-sm border border-gray-100 dark:border-gray-600">
                              {tag}
                            </span>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 mb-4">Need a similar solution?</p>
                    <Link to="/contact" className="block w-full text-center bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition shadow-lg shadow-primary/20">
                        Start Your Project
                    </Link>
                 </div>
              </div>
           </div>
        </div>

        {/* Next Project Navigation (Mock) */}
        <div className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
             <div className="text-sm text-gray-400">Previous Project</div>
             <Link to="/portfolio" className="text-lg font-bold hover:text-primary transition">View All Work</Link>
             <div className="text-sm text-gray-400">Next Project</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;