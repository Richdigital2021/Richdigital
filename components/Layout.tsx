import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Monitor, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Chatbot from './Chatbot';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { data, themeMode, toggleTheme, isAdminMode, toggleAdminMode } = useSite();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Sticky Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">R</div>
            <span className="dark:text-white text-gray-900">{data.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {themeMode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link to="/contact" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:brightness-110 transition shadow-lg shadow-primary/30">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="p-2">
              {themeMode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 dark:text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-2xl font-semibold dark:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-4 w-full bg-primary text-white text-center py-4 rounded-xl font-bold text-lg">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                 <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">R</div>
                 {data.name}
              </h3>
              <p className="text-sm opacity-80 mb-6">{data.description}</p>
              <div className="flex gap-4">
                <a href={data.socials.facebook} className="hover:text-white transition"><Facebook size={20} /></a>
                <a href={data.socials.twitter} className="hover:text-white transition"><Twitter size={20} /></a>
                <a href={data.socials.instagram} className="hover:text-white transition"><Instagram size={20} /></a>
                <a href={data.socials.linkedin} className="hover:text-white transition"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
                <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Mobile Apps</Link></li>
                <li><Link to="/services" className="hover:text-white transition">SEO & Marketing</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Brand Strategy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-sm opacity-80 mb-4">Subscribe to get the latest digital trends.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary" />
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
            <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <button 
                onClick={toggleAdminMode} 
                className="flex items-center gap-1 hover:text-white transition"
              >
                <Monitor size={14} /> Admin
              </button>
            </div>
          </div>
        </div>
      </footer>
      
      <Chatbot />
    </div>
  );
};

export default Layout;