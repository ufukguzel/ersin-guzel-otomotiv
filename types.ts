
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  process: string[];
  averageDuration: string;
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  comment: string;
  rating: number;
}

export interface SiteConfig {
  brandName: string;
  slogans: string[];
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours: string;
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}