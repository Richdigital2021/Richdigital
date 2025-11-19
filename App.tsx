import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';

import Layout from './components/Layout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Services from './pages/public/Services';
import Portfolio from './pages/public/Portfolio';
import PortfolioItem from './pages/public/PortfolioItem';
import Blog from './pages/public/Blog';
import BlogPost from './pages/public/BlogPost';
import Contact from './pages/public/Contact';

import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminBlog from './pages/admin/AdminBlog';
import AdminSettings from './pages/admin/AdminSettings';

const App = () => {
  return (
    <SiteProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/*" element={
            <AdminLayout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="blog" element={<AdminBlog />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="*" element={<div>Section under construction</div>} />
              </Routes>
            </AdminLayout>
          } />

          {/* Public Routes */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="portfolio/:id" element={<PortfolioItem />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogPost />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </SiteProvider>
  );
};

export default App;