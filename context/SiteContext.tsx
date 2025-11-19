import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteData, SiteContextType } from '../types';
import { INITIAL_DATA } from '../constants';

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider = ({ children }: { children?: ReactNode }) => {
  const [data, setData] = useState<SiteData>(INITIAL_DATA);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('richdigital_data');
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('richdigital_data', JSON.stringify(data));
    
    // Update CSS variable for primary color
    document.documentElement.style.setProperty('--color-primary', data.colors.primary);
  }, [data]);

  // Handle Dark Mode
  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const updateData = (newData: Partial<SiteData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleAdminMode = () => {
    setIsAdminMode(prev => !prev);
  };

  return (
    <SiteContext.Provider value={{ data, updateData, themeMode, toggleTheme, isAdminMode, toggleAdminMode }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
};