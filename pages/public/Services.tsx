import React from 'react';
import { useSite } from '../../context/SiteContext';
import { Code, Smartphone, Palette, TrendingUp, Search, PenTool, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={48} />,
  Smartphone: <Smartphone size={48} />,
  Palette: <Palette size={48} />,
  TrendingUp: <TrendingUp size={48} />,
  Search: <Search size={48} />,
  PenTool: <PenTool size={48} />,
};

const Services = () => {
  const { data } = useSite();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a full suite of digital services designed to take your business to the next level.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl transition-colors ${
                index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800'
              }`}
            >
              <div className="p-4 bg-primary/10 text-primary rounded-2xl shrink-0">
                {iconMap[service.icon] || <Code size={48} />}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                  <br className="mb-4"/>
                  We employ the latest frameworks and strategies to ensure {service.title.toLowerCase()} drives real business results.
                </p>
                <ul className="space-y-2 mb-6">
                   {[1,2,3].map(i => (
                     <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                       <CheckCircle size={16} className="text-primary" /> Enterprise-grade quality
                     </li>
                   ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                  Start a Project <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-primary py-16">
         <div className="container mx-auto px-4 text-center text-white">
             <h2 className="text-3xl font-bold mb-8">Not sure what you need?</h2>
             <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                Book a Free Strategy Call
             </Link>
         </div>
      </div>
    </div>
  );
};

export default Services;