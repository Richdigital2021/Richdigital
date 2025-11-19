import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Code, Smartphone, Palette, TrendingUp, Search, PenTool, 
  Star, CheckCircle, Globe, Zap, Users, Award, MessageSquare, ChevronDown, ChevronUp,
  Map, Rocket, Headphones, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={32} />,
  Smartphone: <Smartphone size={32} />,
  Palette: <Palette size={32} />,
  TrendingUp: <TrendingUp size={32} />,
  Search: <Search size={32} />,
  PenTool: <PenTool size={32} />,
  Map: <Map size={32} />,
  Rocket: <Rocket size={32} />,
  Headphones: <Headphones size={32} />,
};

const Home = () => {
  const { data } = useSite();
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.hero.backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-50 dark:to-gray-900"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-white mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold mb-8 animate-pulse">
              <Award size={14} className="text-yellow-400" /> Award-Winning Global Agency
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
              {data.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              {data.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-lg font-bold transition transform hover:-translate-y-1 shadow-xl shadow-primary/30"
              >
                {data.hero.ctaText}
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold transition transform hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements background decoration */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </section>

      {/* 2. Brand Highlights / Value Prop Strip */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 py-8 relative z-20 -mt-16 mx-4 md:mx-10 rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 px-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary"><Award size={20} /></div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">10+ Years</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-center gap-3 px-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600"><Users size={20} /></div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">World-Class</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Talent</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-center gap-3 px-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600"><Globe size={20} /></div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Global</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">20+ Countries</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-center gap-3 px-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600"><Star size={20} /></div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Award Winning</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Top Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 dark:text-white">Comprehensive Digital Solutions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer a full suite of services designed to take your business to the next level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {iconMap[service.icon] || <Code />}
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-primary font-semibold flex items-center gap-2 text-sm hover:underline">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
             <Link to="/services" className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-full font-bold hover:opacity-90 transition">
               Explore All Services <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* 4. About Us Summary */}
      <section className="py-24 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                 alt="Our Team" 
                 className="rounded-2xl shadow-2xl relative z-10"
               />
               <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-xl z-20 hidden md:block">
                  <p className="text-4xl font-bold text-primary mb-1">150+</p>
                  <p className="text-sm font-medium dark:text-white">Projects Completed</p>
               </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 dark:text-white">Crafting Digital Excellence Since 2013</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {data.description} We are a team of visionaries, creators, and engineers dedicated to redefining what's possible on the web. Our mission is to empower businesses with innovative digital solutions that drive measurable growth.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['Strategic Thinking', 'Creative Design', 'Technical Mastery', 'Growth Focus'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium dark:text-gray-200">
                    <CheckCircle size={20} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-primary font-bold hover:underline flex items-center gap-2">
                Read Our Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Portfolio */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary-400 font-bold tracking-wider uppercase text-sm">Selected Work</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Featured Projects</h2>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
               <button className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm">All</button>
               <button className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm">Web</button>
               <button className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm">Branding</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {data.portfolio.slice(0, 4).map((item) => (
              <Link key={item.id} to={`/portfolio/${item.id}`} className="group block relative overflow-hidden rounded-2xl bg-gray-800">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary-400 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">Why Partner With Us?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don't just build websites; we build partnerships that drive long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors duration-300">
              <Globe className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3 dark:text-white">International Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">With clients in over 20 countries, we understand global markets and cultural nuances.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors duration-300">
              <Zap className="text-yellow-500 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3 dark:text-white">Results-Driven</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">We focus on KPIs and ROI. Every pixel serves a purpose to grow your business.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors duration-300">
              <MessageSquare className="text-green-500 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3 dark:text-white">Transparent Comms</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">No jargon, no hidden fees. Just clear, honest communication throughout the project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Awards & Recognitions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <h3 className="text-2xl font-bold dark:text-white whitespace-nowrap">Recognized for Excellence</h3>
             <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {data.awards.map(award => (
                  <div key={award.id} className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-sm">
                    <img src={award.image} alt={award.organization} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-xs font-bold uppercase text-gray-500">{award.organization}</p>
                      <p className="font-bold text-sm dark:text-white">{award.title} {award.year}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 8. Clients / Trusted By */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by innovative teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
            {data.clients.map(client => (
               <img key={client.id} src={client.logo} alt={client.name} className="h-8 md:h-10 dark:invert" />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 dark:text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.map((t) => (
              <div key={t.id} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative">
                <div className="absolute -top-5 left-8 text-6xl text-primary opacity-20 font-serif">"</div>
                <div className="flex gap-1 text-yellow-400 mb-4 mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                  <div>
                    <h4 className="font-bold dark:text-white text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Process / How It Works */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-primary font-bold tracking-wider uppercase text-sm">Workflow</span>
             <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 dark:text-white">How We Work</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
             {data.process.map((step, index) => (
                <div key={step.id} className="relative flex flex-col items-center text-center group">
                   {index !== data.process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                   )}
                   <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center mb-4 group-hover:border-primary group-hover:scale-110 transition-all duration-300 z-10 shadow-sm">
                      <div className="text-primary">{iconMap[step.icon] || <Star />}</div>
                   </div>
                   <h4 className="font-bold text-lg mb-2 dark:text-white">{step.title}</h4>
                   <p className="text-xs text-gray-500 px-2">{step.description}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 11. Blog / Insights Preview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 dark:text-white">Latest Insights</h2>
              <p className="text-gray-600 dark:text-gray-400">Trends, strategies, and news from the digital world.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Articles <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.blog.slice(0, 3).map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">{post.date} • {post.author}</p>
                  <h3 className="font-bold text-xl mb-3 dark:text-white group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ Preview */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to know about working with us.</p>
          </div>
          
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
                >
                  <span className="font-bold text-lg dark:text-white">{faq.question}</span>
                  {openFaqId === faq.id ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                </button>
                <AnimatePresence>
                  {openFaqId === faq.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white dark:bg-gray-900 px-6 py-6 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
             <Link to="/contact" className="text-primary font-semibold hover:underline">View all FAQs or Contact Support</Link>
          </div>
        </div>
      </section>

      {/* 14. Newsletter Subscription */}
      <section className="py-20 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                 <Mail size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Subscribe to our newsletter</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                Get the latest digital trends, case studies, and agency insights delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
                <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition shadow-lg shadow-primary/20">
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
           </div>
        </div>
      </section>

      {/* 15. Strong CTA (Bottom) */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                 <circle cx="80" cy="20" r="10" fill="white" />
             </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's build something amazing together. Schedule a free consultation today and take the first step towards digital excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl transform hover:-translate-y-1">
               Book a Strategy Call
             </Link>
             <Link to="/contact" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition transform hover:-translate-y-1">
               Request a Quote
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;