import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import { LayoutDashboard, FileText, Briefcase, Settings, LogOut, Monitor } from 'lucide-react';

const AdminLayout = ({ children }: { children?: React.ReactNode }) => {
  const { isAdminMode, toggleAdminMode, data } = useSite();
  const location = useLocation();

  // Protected Route Logic
  if (!isAdminMode) {
      // In a real app, this would redirect to login. 
      // Here we just redirect home if admin mode isn't toggled via the footer link
      return <Navigate to="/" replace />;
  }

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Blog Posts', icon: <FileText size={20} />, path: '/admin/blog' },
    { name: 'Portfolio', icon: <Briefcase size={20} />, path: '/admin/portfolio' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">R</div>
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition mb-2">
            <Monitor size={16} /> View Live Site
          </Link>
          <button 
            onClick={toggleAdminMode}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition text-sm font-medium"
          >
            <LogOut size={16} /> Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;