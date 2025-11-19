import React from 'react';
import { useSite } from '../../context/SiteContext';
import { Target, Heart, Award } from 'lucide-react';

const About = () => {
  const { data } = useSite();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <div className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" className="w-full h-full object-cover" alt="Team" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">We Are {data.name}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collective of creators, thinkers, and doers dedicated to elevating brands in the digital space.
          </p>
        </div>
      </div>

      {/* Mission/Vision */}
      <div className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="inline-flex p-4 bg-primary/10 text-primary rounded-full mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">To empower businesses with innovative digital solutions that drive measurable growth.</p>
          </div>
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="inline-flex p-4 bg-primary/10 text-primary rounded-full mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-400">Integrity, creativity, and user-centricity are at the core of everything we do.</p>
          </div>
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="inline-flex p-4 bg-primary/10 text-primary rounded-full mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">To be the global standard for excellence in digital craftsmanship and strategy.</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.team.map(member => (
              <div key={member.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition text-center group">
                <div className="relative overflow-hidden h-64">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold dark:text-white">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;