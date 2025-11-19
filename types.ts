export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  fullContent?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  image: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteData {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  colors: {
    primary: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    backgroundImage: string;
  };
  services: Service[];
  portfolio: PortfolioItem[];
  blog: BlogPost[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  team: {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
  }[];
  clients: Client[];
  awards: Award[];
  process: ProcessStep[];
}

export interface SiteContextType {
  data: SiteData;
  updateData: (newData: Partial<SiteData>) => void;
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}