import React from 'react';
import { useSite } from '../../context/SiteContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { data } = useSite();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">{data.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">{data.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 dark:text-white">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">{data.address}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden relative">
              <iframe 
                title="map"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Richdigital)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.7)' }}
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-600 focus:ring-0 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-600 focus:ring-0 transition" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-600 focus:ring-0 transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-600 focus:ring-0 transition">
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Careers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-600 focus:ring-0 transition"></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;