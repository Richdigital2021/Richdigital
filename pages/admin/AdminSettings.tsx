import React from 'react';
import { useSite } from '../../context/SiteContext';
import { Save } from 'lucide-react';

const AdminSettings = () => {
  const { data, updateData } = useSite();

  const handleChange = (section: keyof typeof data, field: string, value: string) => {
    // Type safety workaround for nested object updates in this simple example
    // In a real app, use a deep merge utility
    if (section === 'hero' || section === 'socials' || section === 'colors') {
      updateData({
        [section]: {
          // @ts-ignore
          ...data[section],
          [field]: value
        }
      });
    } else {
      // @ts-ignore
      updateData({ [field]: value }); // For top level strings if any
    }
  };

  const handleTopLevelChange = (field: string, value: string) => {
      // @ts-ignore
      updateData({ [field]: value });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Site Settings</h1>

      <div className="grid grid-cols-1 gap-8">
        {/* General Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-6 border-b pb-2">General Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Agency Name</label>
              <input 
                type="text" 
                value={data.name} 
                onChange={(e) => handleTopLevelChange('name', e.target.value)}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact Email</label>
              <input 
                type="text" 
                value={data.email} 
                onChange={(e) => handleTopLevelChange('email', e.target.value)}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
            <div className="md:col-span-2">
               <label className="block text-sm font-medium mb-2">Description (SEO)</label>
               <textarea 
                  value={data.description}
                  onChange={(e) => handleTopLevelChange('description', e.target.value)}
                  className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 h-24"
               />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-6 border-b pb-2">Home Hero Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Headline</label>
              <input 
                type="text" 
                value={data.hero.headline} 
                onChange={(e) => handleChange('hero', 'headline', e.target.value)}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subheadline</label>
              <input 
                type="text" 
                value={data.hero.subheadline} 
                onChange={(e) => handleChange('hero', 'subheadline', e.target.value)}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Hero Background Image URL</label>
              <input 
                type="text" 
                value={data.hero.backgroundImage} 
                onChange={(e) => handleChange('hero', 'backgroundImage', e.target.value)}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-6 border-b pb-2">Theme Customization</h2>
          <div>
            <label className="block text-sm font-medium mb-4">Primary Brand Color</label>
            <div className="flex items-center gap-4">
               <input 
                 type="color" 
                 value={data.colors.primary}
                 onChange={(e) => handleChange('colors', 'primary', e.target.value)}
                 className="h-12 w-24 cursor-pointer rounded-lg border-0 p-0"
               />
               <span className="text-sm text-gray-500">Selected: {data.colors.primary}</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">Updates instantly across the site.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;